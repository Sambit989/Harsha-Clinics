'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { services, clinicInfo } from '@/lib/data'
import { Phone } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive healthcare services designed to meet your family&apos;s diverse health needs under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.id} title={service.title} items={service.items} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Service Details</h2>

          <div className="space-y-12">
            {/* General Medicine */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-4xl mb-4">👨‍⚕️</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">General Physician Services</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our experienced general physicians provide comprehensive healthcare for common illnesses and chronic conditions. From fever and flu to diabetes management and hypertension treatment, we&apos;re here for your primary healthcare needs.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Expert diagnosis and treatment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Chronic disease management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Preventive health counseling</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-8 border border-border">
                <p className="text-sm font-medium text-primary mb-4">Common Conditions Treated</p>
                <div className="space-y-3">
                  {['Fever', 'Cold & Flu', 'Diabetes Management', 'Hypertension', 'Thyroid Issues', 'Gastric Problems'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Emergency Care */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-background rounded-lg p-8 border border-border">
                <p className="text-sm font-medium text-primary mb-4">Emergency Support Available</p>
                <div className="space-y-3">
                  {['Trauma Care', 'Injury Treatment', 'Wound Dressing', 'Fracture Assessment', 'Severe Pain Management', 'Emergency Stabilization'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <p className="text-4xl mb-4">🚑</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">Emergency & Trauma Care</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We provide immediate emergency care for accidents, injuries, and acute medical conditions. Our trained staff ensures quick stabilization and appropriate referral when needed.
                </p>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-accent font-semibold">Emergency Line Available 24/7</p>
                  <p className="text-lg font-bold text-accent mt-2">{clinicInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* Health Checkups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-4xl mb-4">🏥</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">Preventive Health Checkups</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Early detection is key to preventing serious health issues. Our preventive health packages include routine screening, annual checkups, and specialized packages for different age groups and health conditions.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Routine screening programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Annual health packages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Specialized screening for seniors</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-8 border border-border">
                <p className="text-sm font-medium text-primary mb-4">Preventive Screenings</p>
                <div className="space-y-3">
                  {['Blood Pressure Check', 'Weight & BMI', 'Blood Sugar Test', 'Cholesterol Check', 'Cancer Screening', 'Vaccination'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specialty Care */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-background rounded-lg p-8 border border-border">
                <p className="text-sm font-medium text-primary mb-4">Specialized Services</p>
                <div className="space-y-3">
                  {['Cardiac Evaluation', 'Respiratory Care', 'Diabetes Management', 'Thyroid Disorders', 'Gastric Care', 'ECG Services'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <p className="text-4xl mb-4">❤️</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">Specialty Care Services</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Beyond general medicine, we offer specialized care for cardiac, respiratory, and other chronic conditions. Our doctors are experienced in managing complex health issues with modern diagnostic equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Our Services?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl mb-3">⭐</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Expert Medical Team</h3>
              <p className="text-muted-foreground">Our doctors bring years of experience and commitment to patient care with the latest medical knowledge.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl mb-3">🔬</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Modern Diagnostics</h3>
              <p className="text-muted-foreground">State-of-the-art laboratory and diagnostic equipment ensure accurate and quick results.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl mb-3">💙</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Patient-Centric Care</h3>
              <p className="text-muted-foreground">We listen to your concerns and provide personalized treatment plans tailored to your needs.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-3xl mb-3">💰</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Affordable Healthcare</h3>
              <p className="text-muted-foreground">Quality medical care at reasonable prices, making healthcare accessible to everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Any of Our Services?</h2>
          <p className="text-lg opacity-90 mb-8">Schedule an appointment with our healthcare professionals today</p>
          <a href={`tel:${clinicInfo.phone}`} className="inline-flex items-center justify-center bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            <Phone className="w-5 h-5 mr-2" />
            Call: {clinicInfo.phone}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
