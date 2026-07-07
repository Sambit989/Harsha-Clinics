'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { clinicConfig } from '@/lib/clinicConfig'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">{clinicConfig.name}</h3>
            <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
              {clinicConfig.description}
            </p>
            <div className="flex gap-2 text-sm">
              <span className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full text-xs font-semibold">
                {clinicConfig.rating}★ Rated
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-neutral-400">
              <a href={`tel:${clinicConfig.phone}`} className="flex items-start gap-2 hover:text-white transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>{clinicConfig.phone}</span>
              </a>
              <a href={`mailto:${clinicConfig.email}`} className="flex items-start gap-2 hover:text-white transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>{clinicConfig.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                <div className="text-sm">
                  <p className="text-white">{clinicConfig.hours.days}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{clinicConfig.hours.open} - {clinicConfig.hours.close}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Location</h3>
            <a
              href={clinicConfig.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
              <div>
                <p className="text-white">{clinicConfig.address.area}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{clinicConfig.address.city}, {clinicConfig.address.state}</p>
              </div>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              {clinicConfig.navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label === 'Appointment' ? 'Book Appointment' : link.label === 'About' ? 'About Us' : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} {clinicConfig.name}. All rights reserved.
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
