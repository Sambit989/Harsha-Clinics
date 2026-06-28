'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AppointmentForm } from '@/components/appointment-form'
import { clinicInfo } from '@/lib/data'
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Book Your Appointment</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Schedule a consultation with our experienced doctors. Quick, convenient, and hassle-free booking.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Schedule Your Visit</h2>
                <AppointmentForm />
              </div>

              {/* How It Works */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-8">How It Works</h3>
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Fill the Form', desc: 'Provide your basic details and preferred appointment time' },
                    { step: '2', title: 'Confirmation', desc: 'We&apos;ll confirm your appointment via call or SMS' },
                    { step: '3', title: 'Visit the Clinic', desc: 'Come on your scheduled date with minimal waiting' },
                    { step: '4', title: 'Get Treatment', desc: 'Consult with our doctor and receive personalized care' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Contact */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6 sticky top-24">
                <h3 className="font-bold text-lg text-foreground mb-6">Quick Contact</h3>

                <div className="space-y-4">
                  {/* Phone */}
                  <a href={`tel:${clinicInfo.phone}`} className="flex gap-4 p-4 bg-primary/10 hover:bg-primary/20 transition-colors rounded-lg group">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Call Us</p>
                      <p className="font-bold text-primary">{clinicInfo.phone}</p>
                    </div>
                  </a>

                  {/* Location */}
                  <a
                    href="https://maps.google.com/?q=Harsha+Clinics+Madhapur+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 p-4 bg-secondary/10 hover:bg-secondary/20 transition-colors rounded-lg group"
                  >
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Visit Us</p>
                      <p className="font-bold text-foreground text-sm">{clinicInfo.address.area}</p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex gap-4 p-4 bg-accent/10 rounded-lg">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Hours</p>
                      <p className="font-bold text-foreground text-sm">{clinicInfo.hours.days}</p>
                      <p className="text-xs text-muted-foreground mt-1">{clinicInfo.hours.open} - {clinicInfo.hours.close}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Book With Us */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">Why Book With Us</h3>
                <div className="space-y-3">
                  {[
                    'Experienced Doctors',
                    'Modern Facilities',
                    'Quick Confirmation',
                    'Minimal Waiting',
                    'Affordable Fees',
                    'Friendly Staff',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Methods */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Other Ways to Book</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl mb-4">📞</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Direct booking over the phone</p>
              <a href={`tel:${clinicInfo.phone}`} className="text-primary font-semibold hover:underline">
                {clinicInfo.phone}
              </a>
            </div>

            <div className="text-center">
              <p className="text-4xl mb-4">💬</p>
              <h3 className="font-bold text-lg text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Quick booking via WhatsApp</p>
              <a href={`https://wa.me/919789693477`} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                Send Message
              </a>
            </div>

            <div className="text-center">
              <p className="text-4xl mb-4">🏥</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Walk In</h3>
              <p className="text-muted-foreground mb-4">Visit us directly at the clinic</p>
              <p className="text-primary font-semibold">{clinicInfo.address.area}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Appointment FAQs</h2>

          <div className="space-y-4">
            {[
              { q: 'How do I book an appointment?', a: 'You can book through our online form on this page, call us directly, or visit the clinic in person.' },
              { q: 'How long does the appointment take?', a: 'Consultation typically takes 20-30 minutes, depending on your health concern.' },
              { q: 'Do I need an appointment?', a: 'While appointments are preferred for faster service, walk-ins are also welcome based on availability.' },
              { q: 'Can I cancel or reschedule?', a: 'Yes, you can cancel or reschedule by calling us. Please provide at least 24 hours notice.' },
              { q: 'What should I bring?', a: 'Bring a valid ID, insurance card (if applicable), and any previous medical records.' },
              { q: 'Is there a consultation fee?', a: 'Our consultation is affordable. Call us for current rates and any special offers.' },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
