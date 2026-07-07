'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { clinicInfo } from '@/lib/data'

import { clinicConfig } from '@/lib/clinicConfig'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = clinicConfig.navLinks

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {clinicConfig.logo.type === 'image' ? (
              <img
                src={clinicConfig.logo.imageLight}
                alt={`${clinicConfig.name} Logo`}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                {clinicConfig.logo.initials}
              </div>
            )}
            <div className="hidden sm:block">
              <p className="font-bold text-primary">{clinicConfig.name}</p>
              <p className="text-xs text-muted-foreground">{clinicConfig.logo.subtitle}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={`tel:${clinicInfo.phone}`}
              className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{clinicInfo.phone}</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${clinicInfo.phone}`}
              className="block w-full mt-3 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center text-sm"
            >
              Call Now: {clinicInfo.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
