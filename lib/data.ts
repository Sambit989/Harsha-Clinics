import { clinicConfig } from './clinicConfig';

export const clinicInfo = {
  name: clinicConfig.name,
  tagline: clinicConfig.tagline,
  rating: clinicConfig.rating,
  reviews: clinicConfig.reviewsCount,
  phone: clinicConfig.phone,
  address: clinicConfig.address,
  hours: clinicConfig.hours,
  description: clinicConfig.description,
};

export const services = clinicConfig.services;
export const healthPackages = clinicConfig.healthPackages;
export const diagnosticTests = clinicConfig.diagnosticTests;
export const whyChooseUs = clinicConfig.whyChooseUs;
export const testimonials = clinicConfig.testimonials;
export const stats = clinicConfig.stats;

// Process FAQs to dynamically substitute clinic hours and contact info
export const faqs = clinicConfig.faqs.map((faq) => ({
  question: faq.question,
  answer: faq.answer
    .replace(/{DAYS}/g, clinicConfig.hours.days)
    .replace(/{OPEN}/g, clinicConfig.hours.open)
    .replace(/{CLOSE}/g, clinicConfig.hours.close)
    .replace(/{PHONE}/g, clinicConfig.phone),
}));
