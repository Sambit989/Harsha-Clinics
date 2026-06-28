export const clinicInfo = {
  name: 'Harsha Clinics',
  tagline: 'Compassionate Healthcare • Accurate Diagnostics • Quality Treatment',
  rating: 4.9,
  reviews: 140,
  phone: '79896 93477',
  address: {
    street: 'Ground Floor, Shop No. 1 & 2, Plot No. 337',
    area: 'Ayyappa Society',
    city: 'Madhapur',
    fullCity: 'Hyderabad',
    state: 'Telangana',
    zip: '500081',
  },
  hours: {
    open: '10:00 AM',
    close: '9:30 PM',
    days: 'Monday – Sunday',
  },
  description: 'Multi-specialty healthcare clinic dedicated to providing affordable, accessible, and quality healthcare services for individuals and families.',
}

export const services = [
  {
    id: 1,
    title: 'General Physician Consultation',
    items: ['Fever', 'Cold & Flu', 'Viral Infections', 'Diabetes Management', 'Hypertension', 'Thyroid Disorders', 'Gastric Problems', 'Seasonal Illnesses'],
    icon: '👨‍⚕️',
  },
  {
    id: 2,
    title: 'Health Checkups',
    items: ['Routine Health Screening', 'Preventive Health Packages', 'Annual Checkups', 'Blood Pressure Monitoring', 'Diabetes Screening'],
    icon: '🏥',
  },
  {
    id: 3,
    title: 'Diagnostics & Laboratory',
    items: ['Blood Tests', 'Urine Tests', 'Thyroid Profile', 'Liver Function Test', 'Kidney Function Test', 'Lipid Profile', 'Vitamin Tests', 'CBC', 'Hormonal Tests'],
    icon: '🔬',
  },
  {
    id: 4,
    title: 'Emergency Care',
    items: ['Trauma Care', 'Injury Treatment', 'Wound Dressing', 'Suturing', 'Fracture Assessment', 'Severe Pain Management', 'Emergency Stabilization'],
    icon: '🚑',
  },
  {
    id: 5,
    title: 'Cardiac Care',
    items: ['Chest Pain Evaluation', 'ECG', 'Heart Disease Screening', 'Cardiac Emergency Assessment'],
    icon: '❤️',
  },
  {
    id: 6,
    title: 'Respiratory Care',
    items: ['Asthma', 'COPD', 'Breathing Problems', 'Respiratory Infections'],
    icon: '💨',
  },
]

export const healthPackages = [
  {
    id: 1,
    name: 'Basic Health Checkup',
    price: '₹999',
    duration: 'Approx 30 mins',
    tests: ['BP Monitoring', 'Weight & Height', 'Physical Examination'],
    description: 'Perfect for routine wellness checks',
  },
  {
    id: 2,
    name: 'Executive Health Checkup',
    price: '₹3,999',
    duration: 'Approx 2 hours',
    tests: ['Complete Blood Count', 'Lipid Profile', 'Liver Function Test', 'Kidney Function Test', 'Thyroid Profile', 'ECG', 'Doctor Consultation'],
    description: 'Comprehensive health assessment for professionals',
    popular: true,
  },
  {
    id: 3,
    name: 'Diabetes Screening',
    price: '₹1,499',
    duration: 'Approx 45 mins',
    tests: ['Fasting Blood Sugar', 'Post-Meal Blood Sugar', 'HbA1c', 'Doctor Consultation'],
    description: 'Specific screening for diabetes management',
  },
  {
    id: 4,
    name: 'Heart Health Package',
    price: '₹4,999',
    duration: 'Approx 1.5 hours',
    tests: ['ECG', 'Lipid Profile', 'Thyroid Profile', 'Blood Pressure Monitoring', 'Cardiologist Consultation'],
    description: 'Comprehensive cardiac health evaluation',
  },
  {
    id: 5,
    name: "Women's Health Package",
    price: '₹2,999',
    duration: 'Approx 1.5 hours',
    tests: ['Complete Blood Count', 'Thyroid Profile', 'Calcium & Vitamin D', 'Gynecological Consultation'],
    description: 'Specialized wellness for women',
  },
  {
    id: 6,
    name: 'Senior Citizen Package',
    price: '₹3,499',
    duration: 'Approx 2 hours',
    tests: ['Complete Blood Count', 'Lipid Profile', 'Liver & Kidney Function', 'Bone Density Assessment', 'ECG', 'Doctor Consultation'],
    description: 'Tailored for senior health needs',
  },
]

export const diagnosticTests = [
  { category: 'Blood Tests', tests: ['Complete Blood Count', 'Blood Sugar Test', 'Lipid Profile', 'Thyroid Profile'] },
  { category: 'Function Tests', tests: ['Liver Function Test', 'Kidney Function Test', 'Cardiac Markers'] },
  { category: 'Specialty Tests', tests: ['Vitamin Tests', 'Hormonal Tests', 'Allergy Testing'] },
  { category: 'Samples', tests: ['Home Sample Collection Available', 'Quick Results', 'Digital Reports'] },
]

export const whyChooseUs = [
  { icon: '👨‍⚕️', title: 'Experienced Doctors', description: 'Qualified medical professionals with years of expertise' },
  { icon: '🔬', title: 'Modern Laboratory', description: 'Advanced diagnostic equipment for accurate results' },
  { icon: '💰', title: 'Affordable Consultation', description: 'Quality healthcare at competitive prices' },
  { icon: '⚡', title: 'Same-Day Diagnostics', description: 'Quick turnaround time for test results' },
  { icon: '📄', title: 'Digital Reports', description: 'Instant access to medical reports online' },
  { icon: '😊', title: 'Friendly Staff', description: 'Compassionate care and professional service' },
  { icon: '✨', title: 'Hygienic Environment', description: 'Highest standards of cleanliness and safety' },
  { icon: '⏱️', title: 'Minimal Waiting Time', description: 'Efficient scheduling for your convenience' },
  { icon: '👥', title: 'Personalized Care', description: 'Individual attention to each patient' },
  { icon: '🆘', title: 'Emergency Support', description: 'Available for urgent medical situations' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    text: 'Excellent doctor with friendly staff. Highly recommended.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    text: 'Very hygienic clinic with quick diagnosis and treatment.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    text: 'Affordable consultation and excellent laboratory services.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Neha Gupta',
    text: 'Professional doctors who genuinely care for patients.',
    rating: 5,
  },
]

export const faqs = [
  {
    question: 'What are your clinic hours?',
    answer: `Harsha Clinics is open Monday to Sunday from 10:00 AM to 9:30 PM. We're here to serve you every day of the week.`,
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment through our online form, call us at 79896 93477, or visit us in person. We also offer WhatsApp appointments for your convenience.',
  },
  {
    question: 'Do you offer home sample collection?',
    answer: 'Yes! We provide home sample collection for blood tests and other diagnostic services. Simply mention this when booking your appointment.',
  },
  {
    question: 'What health packages do you offer?',
    answer: 'We offer specialized health packages including Basic Health Checkup, Executive Health Checkup, Diabetes Screening, Heart Health Package, Women\'s Health Package, and Senior Citizen Package.',
  },
  {
    question: 'Are digital reports available?',
    answer: 'Yes, all diagnostic reports are available digitally. You can access them online through our secure portal within 24 hours of the test.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'We accept most major health insurance plans. Please contact us to confirm your insurance coverage.',
  },
  {
    question: 'Is the clinic wheelchair accessible?',
    answer: 'Yes, Harsha Clinics is fully wheelchair accessible with dedicated facilities to ensure comfortable access for all patients.',
  },
  {
    question: 'What should I bring for my first visit?',
    answer: 'Please bring a valid ID, insurance card (if applicable), and any previous medical records. Arrive 10 minutes early to complete registration.',
  },
]

export const stats = [
  { label: 'Patients Served', value: '2000+', icon: '👥' },
  { label: 'Google Rating', value: '4.9★', icon: '⭐' },
  { label: 'Years of Service', value: '5+', icon: '📅' },
  { label: 'Expert Doctors', value: '8+', icon: '👨‍⚕️' },
]
