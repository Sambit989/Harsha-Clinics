'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { diagnosticTests, clinicInfo } from '@/lib/data'
import { Check, MapPin, Phone, Clock } from 'lucide-react'

export default function DiagnosticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Diagnostics & Laboratory Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Accurate, reliable diagnostic tests with state-of-the-art laboratory equipment and experienced technicians
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-primary mb-2">Same-Day</p>
              <p className="text-foreground font-medium">Results Available</p>
              <p className="text-sm text-muted-foreground mt-2">Quick turnaround on most tests</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-primary mb-2">Digital</p>
              <p className="text-foreground font-medium">Reports Online</p>
              <p className="text-sm text-muted-foreground mt-2">Access reports anytime, anywhere</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-primary mb-2">Home</p>
              <p className="text-foreground font-medium">Sample Collection</p>
              <p className="text-sm text-muted-foreground mt-2">No need to leave your home</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-primary mb-2">Certified</p>
              <p className="text-foreground font-medium">Technicians</p>
              <p className="text-sm text-muted-foreground mt-2">Highly trained professionals</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Modern Laboratory Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Automated Analyzers</h3>
                  <p className="text-muted-foreground">State-of-the-art equipment for accurate results</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Quality Control</h3>
                  <p className="text-muted-foreground">Regular calibration and validation procedures</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Infection Control</h3>
                  <p className="text-muted-foreground">Highest standards of hygiene and safety</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Secure Records</h3>
                  <p className="text-muted-foreground">Digital storage with patient confidentiality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tests Available */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Tests & Services Available</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diagnosticTests.map((category, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.tests.map((test) => (
                    <li key={test} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">How It Works</h2>

          <div className="space-y-6">
            {[
              { num: '1', title: 'Schedule', desc: 'Book your test appointment at your convenience' },
              { num: '2', title: 'Sample Collection', desc: 'Quick and hygienic sample collection by trained staff' },
              { num: '3', title: 'Analysis', desc: 'Tests processed in our modern laboratory' },
              { num: '4', title: 'Results', desc: 'Receive digital reports via email or online portal' },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-lg text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Diagnostic Tests?</h2>
          <p className="text-lg opacity-90 mb-8">Book your appointment today and get accurate results with our modern diagnostic services</p>
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
