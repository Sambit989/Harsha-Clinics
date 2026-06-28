'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { clinicInfo } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Harsha Clinics</h3>
            <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
              Trusted neighborhood healthcare provider combining modern medical technology with compassionate treatment.
            </p>
            <div className="flex gap-2 text-sm">
              <span className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full text-xs font-semibold">
                {clinicInfo.rating}★ Rated
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <a href={`tel:${clinicInfo.phone}`} className="flex items-start gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>{clinicInfo.phone}</span>
              </a>
              <a href="mailto:info@harshaclinics.com" className="flex items-start gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>info@harshaclinics.com</span>
              </a>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <div className="text-sm">
                  <p className="text-white">{clinicInfo.hours.days}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{clinicInfo.hours.open} - {clinicInfo.hours.close}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Location</h3>
            <a
              href="https://maps.google.com/?q=Harsha+Clinics+Madhapur+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
              <div>
                <p className="text-white">{clinicInfo.address.area}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{clinicInfo.address.city}, {clinicInfo.address.state}</p>
              </div>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/packages" className="hover:text-white transition-colors">Health Packages</a></li>
              <li><a href="/appointment" className="hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p className="text-center md:text-left">
              © 2024 Harsha Clinics. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
