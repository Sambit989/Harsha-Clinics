'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { PackageCard } from '@/components/package-card'
import { TestimonialCard } from '@/components/testimonial-card'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { FAQItem } from '@/components/faq-item'
import { AppointmentForm } from '@/components/appointment-form'
import { AnimatedStats } from '@/components/animated-stats'
import { clinicInfo, services, healthPackages, whyChooseUs, testimonials, faqs, stats } from '@/lib/data'
import { MapPin, Phone, Clock, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
                Compassionate Healthcare in Your Neighborhood
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {clinicInfo.tagline}
              </p>
              <p className="text-foreground mb-8 leading-relaxed max-w-lg">
                {clinicInfo.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: {clinicInfo.phone}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Book Appointment
                </a>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{clinicInfo.rating} Rating</p>
                  <p className="text-sm text-muted-foreground">{clinicInfo.reviews} verified reviews</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <AnimatedStats stats={stats} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Harsha Clinics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted neighborhood healthcare provider dedicated to compassionate, affordable, and quality medical care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-lg p-8 text-center">
              <h3 className="font-bold text-lg text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver compassionate, affordable, and reliable healthcare through experienced medical professionals and advanced diagnostics.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-8 text-center">
              <h3 className="font-bold text-lg text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most trusted neighborhood healthcare provider combining modern medical technology with compassionate treatment.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-8 text-center">
              <h3 className="font-bold text-lg text-foreground mb-3">Our Commitment</h3>
              <p className="text-muted-foreground">
                Patient-first care with emphasis on hygiene, safety, affordability, and clinical excellence in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services covering general medicine, diagnostics, emergency care, and specialized treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} title={service.title} items={service.items} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Harsha Clinics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in healthcare with a patient-centric approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <p className="text-3xl mb-2">{item.icon}</p>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section id="packages" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Health Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect health package for your wellness needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                name={pkg.name}
                price={pkg.price}
                duration={pkg.duration}
                tests={pkg.tests}
                description={pkg.description}
                popular={pkg.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Patient Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Hear from our satisfied patients about their healthcare experience
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services and facilities
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Ready to experience compassionate healthcare? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <a href={`tel:${clinicInfo.phone}`} className="bg-card border border-border text-foreground p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="font-bold text-lg text-primary">{clinicInfo.phone}</p>
              <p className="text-sm text-muted-foreground mt-1">Available during clinic hours</p>
            </a>

            {/* Hours */}
            <div className="bg-card border border-border text-foreground p-6 rounded-lg text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="font-bold">{clinicInfo.hours.days}</p>
              <p className="text-sm text-muted-foreground mt-1">{clinicInfo.hours.open} - {clinicInfo.hours.close}</p>
            </div>

            {/* Location */}
            <a href="https://maps.google.com/?q=Harsha+Clinics+Madhapur+Hyderabad" target="_blank" rel="noopener noreferrer" className="bg-card border border-border text-foreground p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="font-bold text-sm">{clinicInfo.address.area}</p>
              <p className="text-sm text-muted-foreground mt-1">{clinicInfo.address.fullCity}, {clinicInfo.address.state}</p>
            </a>
          </div>

          {/* Appointment Form */}
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="font-bold text-xl mb-6 text-center text-foreground">Book an Appointment</h3>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Floating Emergency Button */}
      <a
        href={`tel:${clinicInfo.phone}`}
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transition-transform z-40"
        aria-label="Emergency call"
      >
        <Phone className="w-6 h-6" />
      </a>

      <Footer />
    </div>
  )
}
