'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { stats, clinicInfo } from '@/lib/data'
import { Heart, Users, Award, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Harsha Clinics</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Your trusted neighborhood healthcare provider delivering compassionate care with modern medical expertise
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Harsha Clinics was founded with a simple yet powerful mission: to provide accessible, affordable, and high-quality healthcare to families in our community. Located in the heart of Madhapur, Ayyappa Society, we&apos;ve grown from a small clinic to a trusted healthcare destination.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Our team of experienced doctors and healthcare professionals are dedicated to understanding each patient&apos;s unique needs and providing personalized care. We believe that healthcare should never compromise on quality, even when it&apos;s affordable.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today, with a 4.9★ Google rating from over 140 patients, we continue our mission to be the most trusted healthcare provider in the neighborhood.
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-background border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver compassionate, affordable, and reliable healthcare through experienced medical professionals, advanced diagnostics, and personalized patient care.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-background border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted neighborhood healthcare provider by combining modern medical technology with compassionate treatment and patient-centered care.
              </p>
            </div>

            {/* Values */}
            <div className="bg-background border border-border rounded-xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Patient-first care, compassion, clinical excellence, integrity, transparency, hygiene & safety, and commitment to affordable healthcare for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Track Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Patients Trust Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-2xl mb-3">👨‍⚕️</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Experienced Doctors</h3>
              <p className="text-muted-foreground">Our team consists of highly qualified medical professionals with years of experience in their respective fields.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-2xl mb-3">🔬</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Modern Diagnostics</h3>
              <p className="text-muted-foreground">State-of-the-art laboratory equipment ensures accurate and reliable diagnostic results for all patients.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-2xl mb-3">💚</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Patient Care First</h3>
              <p className="text-muted-foreground">We prioritize patient comfort and satisfaction in every interaction and treatment decision.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-2xl mb-3">⏱️</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Efficient Service</h3>
              <p className="text-muted-foreground">Minimal waiting times and quick service without compromising on quality of care.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-2xl mb-3">✨</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Clean & Hygienic</h3>
              <p className="text-muted-foreground">Highest standards of cleanliness and infection control to ensure patient safety.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-2xl mb-3">💰</p>
              <h3 className="font-bold text-lg text-foreground mb-2">Affordable Pricing</h3>
              <p className="text-muted-foreground">Quality healthcare that doesn&apos;t break the bank, with transparent pricing and no hidden charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Visit Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-foreground mb-4">Address</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                {clinicInfo.address.street}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                {clinicInfo.address.area}, {clinicInfo.address.city}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {clinicInfo.address.fullCity}, {clinicInfo.address.state} - {clinicInfo.address.zip}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-foreground mb-4">Business Hours</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Days:</strong> {clinicInfo.hours.days}
              </p>
              <p className="text-muted-foreground">
                <strong>Hours:</strong> {clinicInfo.hours.open} - {clinicInfo.hours.close}
              </p>
              <p className="text-sm text-muted-foreground mt-4 italic">*Please verify exact timings before visiting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Quality Healthcare</h2>
          <p className="text-lg opacity-90 mb-8">Join thousands of satisfied patients who trust Harsha Clinics for their healthcare needs</p>
          <a href={`tel:${clinicInfo.phone}`} className="inline-flex items-center justify-center bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            <Users className="w-5 h-5 mr-2" />
            Get in Touch: {clinicInfo.phone}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
