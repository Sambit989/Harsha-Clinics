'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Calendar, Clock, User, Phone, Mail, Trash2, CheckCircle, XCircle, Search, RefreshCw, Activity, AlertCircle, Eye } from 'lucide-react'

interface Appointment {
  _id: string
  name: string
  phone: string
  email?: string
  date: string
  time: string
  concern?: string
  status: 'Pending' | 'Confirmed' | 'Cancelled'
  createdAt: string
}

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFallback, setIsFallback] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Confirmed' | 'Cancelled'>('All')
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)

  const fetchAppointments = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/appointments')
      const data = await response.json()
      if (data.success) {
        setAppointments(data.data)
        setIsFallback(!!data.isFallback)
      } else {
        throw new Error(data.error || 'Failed to fetch appointments')
      }
    } catch (err: any) {
      setError(err.message || 'Error loading appointments. Make sure MongoDB is running.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAppointments()
  }, [])

  const updateStatus = async (id: string, newStatus: 'Pending' | 'Confirmed' | 'Cancelled') => {
    try {
      const response = await fetch(`/api/appointments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })
      const data = await response.json()
      if (data.success) {
        setAppointments((prev) =>
          prev.map((app) => (app._id === id ? { ...app, status: newStatus } : app))
        )
        if (selectedAppointment && selectedAppointment._id === id) {
          setSelectedAppointment({ ...selectedAppointment, status: newStatus })
        }
      } else {
        alert(data.error || 'Failed to update status')
      }
    } catch (err: any) {
      alert('Error updating status: ' + err.message)
    }
  }

  const deleteAppointment = async (id: string) => {
    if (!confirm('Are you sure you want to delete this appointment?')) return

    try {
      const response = await fetch(`/api/appointments/${id}`, {
        method: 'DELETE',
      })
      const data = await response.json()
      if (data.success) {
        setAppointments((prev) => prev.filter((app) => app._id !== id))
        if (selectedAppointment && selectedAppointment._id === id) {
          setSelectedAppointment(null)
        }
      } else {
        alert(data.error || 'Failed to delete appointment')
      }
    } catch (err: any) {
      alert('Error deleting appointment: ' + err.message)
    }
  }

  // Stats calculation
  const totalCount = appointments.length
  const pendingCount = appointments.filter((app) => app.status === 'Pending').length
  const confirmedCount = appointments.filter((app) => app.status === 'Confirmed').length
  const cancelledCount = appointments.filter((app) => app.status === 'Cancelled').length

  // Filtering logic
  const filteredAppointments = appointments.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.phone.includes(searchQuery) ||
      (app.email && app.email.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesStatus = statusFilter === 'All' || app.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Admin Page */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage and track medical appointments for Harsha Clinics</p>
          </div>
          <button
            onClick={fetchAppointments}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-card text-foreground hover:bg-muted font-medium transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Database fallback notification */}
        {isFallback && (
          <div className="bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 p-4 rounded-xl flex items-start gap-3 mb-8">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold">Running in Offline Fallback Mode</p>
              <p className="text-sm opacity-90 mt-1">
                The application could not connect to MongoDB (ECONNREFUSED). To ensure a smooth testing experience,
                we have automatically enabled local fallback storage. All appointments are currently read from and 
                written to <code>data/appointments.json</code>.
              </p>
              <p className="text-xs opacity-75 mt-2">
                Once you start your local MongoDB database or set up a MongoDB Atlas URI in <code>.env.local</code>,
                the app will automatically connect to it.
              </p>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Card 1: Total */}
          <div className="bg-card border border-border p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Total Bookings</span>
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-3xl font-bold text-foreground">{totalCount}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20"></div>
          </div>

          {/* Card 2: Pending */}
          <div className="bg-card border border-border p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Pending</span>
              <Clock className="w-5 h-5 text-secondary animate-pulse" />
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-3xl font-bold text-foreground">{pendingCount}</span>
              <span className="text-xs text-muted-foreground">needs action</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary/30"></div>
          </div>

          {/* Card 3: Confirmed */}
          <div className="bg-card border border-border p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Confirmed</span>
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-3xl font-bold text-foreground">{confirmedCount}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500/20"></div>
          </div>

          {/* Card 4: Cancelled */}
          <div className="bg-card border border-border p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Cancelled</span>
              <XCircle className="w-5 h-5 text-destructive" />
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-3xl font-bold text-foreground">{cancelledCount}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-destructive/20"></div>
          </div>
        </div>

        {/* Filters and Table Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List and Filters (Col Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filter controls */}
            <div className="bg-card border border-border p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search name, phone, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-border bg-background rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Status Tabs */}
              <div className="flex p-1 bg-muted rounded-lg w-full md:w-auto overflow-x-auto">
                {(['All', 'Pending', 'Confirmed', 'Cancelled'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`flex-1 md:flex-none px-4 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                      statusFilter === status
                        ? 'bg-card text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Error view */}
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Failed to Connect Database</p>
                  <p className="text-sm opacity-90 mt-1">{error}</p>
                  <p className="text-xs opacity-75 mt-2">Please ensure MongoDB is running and that your connection string in <code>.env.local</code> is set correctly.</p>
                </div>
              </div>
            )}

            {/* Appointments List */}
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-12 bg-card border border-border rounded-xl">
                  <RefreshCw className="w-8 h-8 mx-auto text-primary animate-spin mb-3" />
                  <p className="text-muted-foreground">Loading appointments...</p>
                </div>
              ) : filteredAppointments.length === 0 ? (
                <div className="text-center py-16 bg-card border border-border rounded-xl">
                  <p className="text-4xl mb-3">📭</p>
                  <p className="font-semibold text-foreground">No Appointments Found</p>
                  <p className="text-sm text-muted-foreground mt-1">Try adjusting your search criteria or booking an appointment first.</p>
                </div>
              ) : (
                filteredAppointments.map((app) => (
                  <div
                    key={app._id}
                    className={`bg-card border p-5 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer ${
                      selectedAppointment?._id === app._id
                        ? 'border-primary ring-2 ring-primary/10'
                        : 'border-border hover:border-muted-foreground/30'
                    }`}
                    onClick={() => setSelectedAppointment(app)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className="font-bold text-lg text-foreground">{app.name}</h3>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              app.status === 'Confirmed'
                                ? 'bg-emerald-500/10 text-emerald-500'
                                : app.status === 'Cancelled'
                                ? 'bg-destructive/10 text-destructive'
                                : 'bg-secondary/10 text-secondary'
                            }`}
                          >
                            {app.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            {app.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4 flex-shrink-0" />
                            {app.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-4 h-4 flex-shrink-0" />
                            {app.phone}
                          </span>
                        </div>
                      </div>

                      {/* Action buttons on hover / layout */}
                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedAppointment(app)
                          }}
                          className="p-2 border border-border rounded-lg bg-background text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            updateStatus(app._id, 'Confirmed')
                          }}
                          disabled={app.status === 'Confirmed'}
                          className="p-2 border border-border rounded-lg bg-background text-emerald-500 hover:bg-emerald-500/10 transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                          title="Confirm Appointment"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            updateStatus(app._id, 'Cancelled')
                          }}
                          disabled={app.status === 'Cancelled'}
                          className="p-2 border border-border rounded-lg bg-background text-destructive hover:bg-destructive/10 transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                          title="Cancel Appointment"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            deleteAppointment(app._id)
                          }}
                          className="p-2 border border-border rounded-lg bg-background text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                          title="Delete Record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Details Sidebar (Col Span 1) */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border p-6 rounded-xl sticky top-24 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-6">Booking Details</h2>

              {selectedAppointment ? (
                <div className="space-y-6">
                  {/* Status header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className="font-bold text-foreground mt-0.5">{selectedAppointment.status}</p>
                    </div>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => updateStatus(selectedAppointment._id, 'Confirmed')}
                        className={`px-3 py-1 rounded text-xs font-semibold border transition-all ${
                          selectedAppointment.status === 'Confirmed'
                            ? 'bg-emerald-500 text-white border-emerald-500'
                            : 'bg-background hover:bg-muted text-emerald-500 border-border'
                        }`}
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => updateStatus(selectedAppointment._id, 'Cancelled')}
                        className={`px-3 py-1 rounded text-xs font-semibold border transition-all ${
                          selectedAppointment.status === 'Cancelled'
                            ? 'bg-destructive text-white border-destructive'
                            : 'bg-background hover:bg-muted text-destructive border-border'
                        }`}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <User className="w-3.5 h-3.5" /> Patient Name
                      </p>
                      <p className="font-semibold text-foreground mt-0.5">{selectedAppointment.name}</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" /> Phone Number
                      </p>
                      <a href={`tel:${selectedAppointment.phone}`} className="font-semibold text-primary hover:underline block mt-0.5">
                        {selectedAppointment.phone}
                      </a>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5" /> Email Address
                      </p>
                      <p className="font-semibold text-foreground mt-0.5">
                        {selectedAppointment.email || <span className="text-muted-foreground font-normal italic">None provided</span>}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> Preferred Date
                      </p>
                      <p className="font-semibold text-foreground mt-0.5">{selectedAppointment.date}</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> Time Slot
                      </p>
                      <p className="font-semibold text-foreground mt-0.5">{selectedAppointment.time}</p>
                    </div>
                  </div>

                  {/* Health Concern */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-1">Health Concern / Reason for Visit</p>
                    <div className="bg-muted p-3.5 rounded-lg text-sm text-foreground leading-relaxed whitespace-pre-line border border-border">
                      {selectedAppointment.concern || <span className="text-muted-foreground italic font-normal">No concern described.</span>}
                    </div>
                  </div>

                  {/* Meta details */}
                  <div className="text-[11px] text-muted-foreground pt-4 border-t border-border flex justify-between">
                    <span>ID: {selectedAppointment._id}</span>
                    <span>Booked: {new Date(selectedAppointment.createdAt).toLocaleString()}</span>
                  </div>

                  {/* Actions */}
                  <button
                    onClick={() => deleteAppointment(selectedAppointment._id)}
                    className="w-full flex items-center justify-center gap-2 bg-destructive/10 text-destructive hover:bg-destructive text-destructive hover:text-white py-2 px-4 rounded-lg font-semibold border border-destructive/20 hover:border-destructive transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Appointment Record
                  </button>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground border border-dashed border-border rounded-lg">
                  <User className="w-8 h-8 mx-auto opacity-30 mb-2" />
                  <p className="text-sm">Select an appointment from the list to view its complete details and history.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
