/**
 * CLINIC TEMPLATE CONFIGURATION
 * 
 * Update this file to customize the website for a new clinic client.
 * For visual branding adjustments:
 * 1. Replace favicons and logos in the `public/` directory:
 *    - `public/apple-icon.png` (Apple touch icon)
 *    - `public/icon-light-32x32.png` (Light mode favicon)
 *    - `public/icon-dark-32x32.png` (Dark mode favicon)
 *    - `public/icon.svg` (Vector favicon/logo icon)
 * 2. Update brand colors in `app/globals.css` (primary, secondary, and accent custom properties).
 */

export const clinicConfig = {
  // ==========================================
  // 1. Core Branding & Profile Details
  // ==========================================
  name: 'Your Clinic Name',
  tagline: 'Compassionate Healthcare • Accurate Diagnostics • Quality Treatment',
  description: 'Providing comprehensive, high-quality healthcare services. Our experienced medical professionals are dedicated to delivering personalized care tailored to the needs of individuals and families.',
  rating: 4.9,
  reviewsCount: 140,

  // Logo config
  logo: {
    type: 'text', // Options: 'text' or 'image'
    initials: 'YC', // 2-letter abbreviation shown inside the visual block
    subtitle: 'Trusted Care', // Secondary text shown beneath the clinic name
    imageLight: '/placeholder-logo.svg', // Path to light mode logo image in public/
    imageDark: '/placeholder-logo.svg',  // Path to dark mode logo image in public/
  },

  // ==========================================
  // 2. Contact Information
  // ==========================================
  phone: '+91 XXXXXXXXXX',
  emergencyPhone: '+91 XXXXXXXXXX',
  email: 'contact@yourclinic.com',
  whatsappNumber: '91XXXXXXXXXX', // Must be digits only (no '+', '-', or spaces) for click-to-chat API
  appointmentLink: '#contact', // Internal section anchor (e.g. '#contact') or external URL (e.g. Practo)
  googleMapsLink: 'https://maps.google.com/?q=Your+Clinic+Name+Address', // Clickable map redirection link

  // ==========================================
  // 3. Business Location & Working Hours
  // ==========================================
  address: {
    street: 'Ground Floor, Shop No. XX, Plot No. XXX',
    area: 'Your Clinic Area',
    city: 'Your Clinic City',
    fullCity: 'Your City Name', // Used in layout titles
    state: 'Your State',
    zip: 'XXXXXX',
  },

  hours: {
    days: 'Monday – Sunday',
    open: '10:00 AM',
    close: '9:30 PM',
  },

  // ==========================================
  // 4. Social Media Redirection Links
  // ==========================================
  socials: {
    facebook: 'https://facebook.com/yourclinic',
    instagram: 'https://instagram.com/yourclinic',
    linkedin: 'https://linkedin.com/company/yourclinic',
    twitter: 'https://twitter.com/yourclinic',
  },

  // ==========================================
  // 5. Dynamic Navigation Links
  // ==========================================
  // Control which pages appear in the navbar and footer. Comment out or remove to hide pages.
  navLinks: [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/diagnostics', label: 'Diagnostics' },
    { href: '/appointment', label: 'Appointment' },
    { href: '/admin', label: 'Admin' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contact', label: 'Contact' },
  ],

  // ==========================================
  // 6. Dynamic Services List
  // ==========================================
  // Configures the services showcase on Home & details on the Services page.
  // Written in a neutral way to fit general, dental, skin, eye, pediatric, or ortho clinics.
  services: [
    {
      id: 1,
      title: 'General Consultation',
      description: 'Comprehensive health assessments and professional consultations for a wide range of primary medical concerns, chronic conditions, and general wellness guidance.',
      items: ['Routine Examinations', 'Chronic Condition Management', 'Primary Care Consultations', 'Preventive Health Advice', 'General Illness Diagnostics', 'Lifestyle & Wellness Guidance'],
      icon: '👨‍⚕️',
    },
    {
      id: 2,
      title: 'Preventive Health Screenings',
      description: 'Routine screenings and specialized packages designed to detect potential health conditions early and assist you in maintaining an optimal quality of life.',
      items: ['Routine Wellness Screenings', 'Annual Health Packages', 'Biometric Assessments', 'Risk Factors Evaluation', 'Personalized Screenings'],
      icon: '🏥',
    },
    {
      id: 3,
      title: 'Diagnostic & Laboratory Services',
      description: 'Accurate and timely diagnostic tests utilizing advanced technology. Comprehensive clinical investigations to aid in accurate treatment mapping.',
      items: ['Routine Blood Profiles', 'Urine Analyses', 'Metabolic Assessments', 'Organ Function Screening', 'Hormonal Assays', 'Digital Test Reports'],
      icon: '🔬',
    },
    {
      id: 4,
      title: 'Acute & Emergency Care Support',
      description: 'Stabilizing care and prompt clinical support for acute illnesses, sudden discomforts, minor trauma, and urgent diagnostic evaluations.',
      items: ['Minor Injury Stabilization', 'Acute Discomfort Management', 'Urgent Consultations', 'Suturing & Wound Care', 'Emergency Support Referrals'],
      icon: '🚑',
    },
    {
      id: 5,
      title: 'Specialty Evaluation Care',
      description: 'Specialized clinical assessment targeting target organ systems, chronic metabolic management, and advanced therapeutic interventions.',
      items: ['Targeted Organ Assessments', 'Specialty Consultations', 'Chronic Care Tracking', 'Therapeutic Monitoring'],
      icon: '❤️',
    },
    {
      id: 6,
      title: 'Respiratory & Wellness Therapy',
      description: 'Evaluation and therapeutic care for breathing concerns, respiratory discomfort, allergy assessments, and general respiratory support.',
      items: ['Respiratory Evaluations', 'Allergy Diagnostics', 'Breathing Exercises Counseling', 'Therapeutic Support'],
      icon: '💨',
    },
  ],

  // ==========================================
  // 7. Dynamic Health Packages
  // ==========================================
  // Configures the Packages page grid and features.
  healthPackages: [
    {
      id: 1,
      name: 'Basic Health Checkup',
      price: '₹999',
      duration: 'Approx 30 mins',
      tests: ['Vitals & BP Monitoring', 'Biometric Screening', 'Physical Examination'],
      description: 'Perfect for routine wellness checks and basic screening',
    },
    {
      id: 2,
      name: 'Executive Health Checkup',
      price: '₹3,999',
      duration: 'Approx 2 hours',
      tests: ['Complete Blood Profile', 'Metabolic Panel', 'Liver & Kidney Panel', 'Cardio screening (ECG)', 'Doctor Consultation'],
      description: 'Comprehensive health assessment for busy professionals',
      popular: true,
    },
    {
      id: 3,
      name: 'Specialized Screening',
      price: '₹1,499',
      duration: 'Approx 45 mins',
      tests: ['Targeted Blood Profile', 'Post-Meal Analyses', 'Clinical Consultations'],
      description: 'Targeted screening for metabolic tracking and wellness',
    },
    {
      id: 4,
      name: 'Advanced Cardiac Package',
      price: '₹4,999',
      duration: 'Approx 1.5 hours',
      tests: ['Cardiac Panel (ECG)', 'Lipid Profile', 'Metabolic Assays', 'Specialist Consultation'],
      description: 'Comprehensive cardiovascular wellness evaluation',
    },
    {
      id: 5,
      name: 'Women’s Wellness Package',
      price: '₹2,999',
      duration: 'Approx 1.5 hours',
      tests: ['Complete Blood Count', 'Hormonal Assays', 'Mineral & Vitamin Profile', 'Clinical Consultations'],
      description: 'Specialized diagnostic checks for women’s health needs',
    },
    {
      id: 6,
      name: 'Senior Care Package',
      price: '₹3,499',
      duration: 'Approx 2 hours',
      tests: ['Complete Blood Profiling', 'Bone Density Screening', 'Metabolic Assessments', 'Doctor Consultation'],
      description: 'Tailored diagnostics for senior health and mobility',
    },
  ],

  // Package Comparison Table Config
  packageComparison: {
    columns: ['Feature', 'Basic', 'Executive', 'Specialist'],
    rows: [
      { feature: 'Physical Examination', values: ['✓', '✓', '✓'] },
      { feature: 'Diagnostic Screening', values: ['✓', '✓', '✓'] },
      { feature: 'Doctor Consultation', values: ['✓', '✓', '✓'] },
      { feature: 'Cardiac Screening (ECG)', values: ['✗', '✓', '✓'] },
      { feature: 'Digital Test Reports', values: ['✓', '✓', '✓'] },
      { feature: 'Follow-up Consultation', values: ['✗', '✓', '✓'] },
      { feature: 'Personalized Health Plan', values: ['✗', '✓', '✓'] },
    ]
  },

  // ==========================================
  // 8. Diagnostic Test Categories
  // ==========================================
  diagnosticTests: [
    { category: 'Clinical Blood Tests', tests: ['Complete Blood Count', 'Blood Sugar Assays', 'Lipid Panel Profile', 'Hormonal Assays'] },
    { category: 'Organ Function Tests', tests: ['Liver Function Assays', 'Kidney Function Screening', 'Cardiac Markers'] },
    { category: 'Specialized Screening', tests: ['Vitamin & Mineral Levels', 'Allergy Panels', 'Immunology Testing'] },
    { category: 'Sample Options', tests: ['Home Sample Collection Available', 'Prompt Results Processing', 'Secure Digital Reports'] },
  ],

  // ==========================================
  // 9. Why Choose Us Features
  // ==========================================
  whyChooseUs: [
    { icon: '👨‍⚕️', title: 'Experienced Team', description: 'Qualified healthcare professionals with years of clinical expertise' },
    { icon: '🔬', title: 'Modern Diagnostics', description: 'Advanced equipment ensuring accurate and prompt test results' },
    { icon: '💰', title: 'Affordable Rates', description: 'Premium healthcare services structured at transparent, competitive rates' },
    { icon: '⚡', title: 'Quick Turnaround', description: 'Efficient laboratory processing for prompt test results' },
    { icon: '📄', title: 'Digital Reports', description: 'Secure digital access to your medical records and reports online' },
    { icon: '😊', title: 'Friendly Support', description: 'Compassionate assistance and professional care for every patient' },
    { icon: '✨', title: 'Hygienic Setup', description: 'Highest standards of sterilization, safety, and hygiene protocols' },
    { icon: '⏱️', title: 'Minimal Wait Times', description: 'Optimized appointment schedules to minimize patient waiting' },
    { icon: '👥', title: 'Personalized Care', description: 'Focused individual attention to patient diagnostics and treatment' },
    { icon: '🆘', title: 'Urgent Care Support', description: 'Available support systems for urgent and acute care situations' },
  ],

  // ==========================================
  // 10. Patient Testimonials (Clinic Neutral)
  // ==========================================
  testimonials: [
    { id: 1, name: 'Alex Johnson', text: 'Highly experienced doctors and exceptionally helpful staff. The care here is prompt and compassionate.', rating: 5 },
    { id: 2, name: 'Sarah Patel', text: 'Extremely hygienic facility with rapid turnaround on reports. The diagnostic process was smooth and hassle-free.', rating: 5 },
    { id: 3, name: 'Michael Chang', text: 'Affordable consultation options and reliable laboratory checks. Highly recommend for regular family checkups.', rating: 5 },
    { id: 4, name: 'Emily Robinson', text: 'Professional environment and doctors who patiently listen and clarify doubts. Very satisfied with the care.', rating: 5 },
  ],

  // ==========================================
  // 11. Frequently Asked Questions
  // ==========================================
  // These answers dynamically inject clinic details to keep the content generic but accurate.
  faqs: [
    {
      question: 'What are your clinic hours?',
      answer: 'Our clinic is open {DAYS} from {OPEN} to {CLOSE}. We are committed to providing accessible care throughout the week.',
    },
    {
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment through our online form, call us directly at {PHONE}, or visit us in person. We also support quick bookings via WhatsApp.',
    },
    {
      question: 'Do you offer home sample collection?',
      answer: 'Yes! We provide home sample collection services for routine lab screenings and blood diagnostics. Simply request this when scheduling your test.',
    },
    {
      question: 'What health checkup packages do you offer?',
      answer: 'We provide a range of health screening plans, including Basic Health Checkup, Executive Health Checkup, Specialized Screening, Cardiac, Women’s Wellness, and Senior Care Packages.',
    },
    {
      question: 'Are digital reports available?',
      answer: 'Yes! All diagnostic reports are securely uploaded online. You can access your digital report link or receive them via email/WhatsApp, typically within 24 hours.',
    },
    {
      question: 'Do you accept health insurance?',
      answer: 'We cooperate with major insurance providers. Please get in touch with our billing desk prior to your checkup to confirm your policy coverage details.',
    },
    {
      question: 'Is the clinic wheelchair accessible?',
      answer: 'Yes, our clinic facilities are fully accessible. We have ramps and dedicated assistance to ensure comfortable access for all patients.',
    },
    {
      question: 'What should I bring for my first consultation?',
      answer: 'Please bring a valid photo identification card, any current medical prescriptions or past diagnostic reports, and your insurance card if applicable.',
    },
  ],

  // ==========================================
  // 12. Animated Counter Statistics
  // ==========================================
  stats: [
    { label: 'Patients Served', value: '2000+', icon: '👥' },
    { label: 'Verified Reviews', value: '4.9★', icon: '⭐' },
    { label: 'Years of Service', value: '5+', icon: '📅' },
    { label: 'Medical Staff', value: '8+', icon: '👨‍⚕️' },
  ],

  // ==========================================
  // 13. Dynamic SEO Default Settings
  // ==========================================
  seo: {
    title: 'Your Clinic Name | Trusted Healthcare Services',
    description: 'Providing compassionate family medicine, accurate laboratory diagnostics, health packages, and urgent care support under one roof.',
    domain: 'https://yourclinic.com', // Absolute URL (no trailing slash) used for robots.txt and sitemap generation
  }
}
