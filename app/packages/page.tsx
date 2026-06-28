'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PackageCard } from '@/components/package-card'
import { healthPackages, clinicInfo } from '@/lib/data'
import { Check, Phone } from 'lucide-react'

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Health Packages</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive health screening packages tailored to meet different healthcare needs. Choose the perfect package for your wellness journey.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Our Health Packages?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">All-Inclusive</h3>
              <p className="text-muted-foreground">Comprehensive tests with doctor consultation included in each package</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Affordable Pricing</h3>
              <p className="text-muted-foreground">Best value for comprehensive health screening with no hidden charges</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Quick Results</h3>
              <p className="text-muted-foreground">Same-day digital reports with detailed interpretation by doctors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Health Packages</h2>

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

      {/* Comparison */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Package Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-bold text-foreground">Feature</th>
                  <th className="text-center py-3 px-4 font-bold text-foreground">Basic</th>
                  <th className="text-center py-3 px-4 font-bold text-foreground bg-accent/10">Executive</th>
                  <th className="text-center py-3 px-4 font-bold text-foreground">Specialist</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Physical Examination', basic: '✓', executive: '✓', specialist: '✓' },
                  { feature: 'Blood Tests', basic: '✓', executive: '✓', specialist: '✓' },
                  { feature: 'Doctor Consultation', basic: '✓', executive: '✓', specialist: '✓' },
                  { feature: 'ECG', basic: '✗', executive: '✓', specialist: '✓' },
                  { feature: 'Digital Report', basic: '✓', executive: '✓', specialist: '✓' },
                  { feature: 'Follow-up Visit', basic: '✗', executive: '✓', specialist: '✓' },
                  { feature: 'Health Advice Report', basic: '✗', executive: '✓', specialist: '✓' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{row.feature}</td>
                    <td className="text-center py-3 px-4">{row.basic}</td>
                    <td className="text-center py-3 px-4 bg-accent/5">{row.executive}</td>
                    <td className="text-center py-3 px-4">{row.specialist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Package FAQs</h2>

          <div className="space-y-4">
            {[
              { q: 'Can I modify the tests in a package?', a: 'Yes, you can add or remove tests based on your needs. Our team will help customize the package for you.' },
              { q: 'How long does the entire process take?', a: 'Most packages take 1-2 hours depending on the number of tests. You can refer to individual package timings.' },
              { q: 'Are reports available immediately?', a: 'Digital reports are typically available within 24 hours. Physical reports can be collected from the clinic.' },
              { q: 'Can I book home sample collection?', a: 'Yes, home sample collection is available for most tests. Just mention it when booking your appointment.' },
              { q: 'Is there any preparation needed?', a: 'For some tests, fasting may be required. We&apos;ll provide detailed instructions when you book.' },
              { q: 'Do you provide a written report?', a: 'Yes, both digital and printed reports are available. Reports include test values and detailed interpretation.' },
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Charge of Your Health?</h2>
          <p className="text-lg opacity-90 mb-8">Choose a health package and schedule your screening today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${clinicInfo.phone}`} className="inline-flex items-center justify-center bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              <Phone className="w-5 h-5 mr-2" />
              Call to Book: {clinicInfo.phone}
            </a>
            <a href="/#contact" className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
              Book Online
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
