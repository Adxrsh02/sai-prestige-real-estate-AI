export interface Testimonial {
  id: string;
  name: string;
  location: string;
  category?: string;
  feedback: string;
  image: string;
}

/**
 * Verified Client Testimonials for SAI PRESTIGE
 * Architecture designed for seamless scalability as more client feedback is verified.
 */
export const testimonialsData: Testimonial[] = [
  {
    id: 'suresh-ganjale',
    name: 'Suresh Ganjale',
    location: 'Nerul, Navi Mumbai',
    category: 'First-Time Homebuyer',
    feedback:
      'Sai Prestige made our dream come true! As first-time buyers, we were anxious, but their team guided us patiently through every step. Transparent process, no hidden costs, and a beautiful home — couldn’t have asked for more!',
    image:
      'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793428463/yash_feedback.jpg',
  },
  {
    id: 'mayuresh-bhoir',
    name: 'Mayuresh Bhoir',
    location: 'Vashi, Navi Mumbai',
    category: 'Property Investor',
    feedback:
      'Professional, punctual, and genuinely helpful! Sai Prestige offered great property options that suited my budget and investment goals. Their market knowledge gave me full confidence in making the right decision.',
    image:
      'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793428474/bhoir_feedback.jpg',
  },
  {
    id: 'yash-vaviya',
    name: 'Yash Vaviya',
    location: 'Seawoods, Navi Mumbai',
    category: 'Relocation Client',
    feedback:
      'We relocated to Mumbai and had very little time to find a home. Sai Prestige went above and beyond to understand our needs. Within days, we moved into the perfect flat. Honest service and complete peace of mind.',
    image:
      'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793428463/yash_feedback.jpg',
  },
  {
    id: 'zammer-mandre',
    name: 'Zammer Mandre',
    location: 'Kuwait',
    category: 'NRI Client',
    feedback:
      'I live abroad and was worried about buying a property in India, but Sai Prestige handled everything smoothly. From video tours to legal paperwork, they were professional and trustworthy throughout.',
    image:
      'https://res.cloudinary.com/qlxaljlj/image/upload/q_auto,f_auto/v1793428463/zameer_feedback.jpg',
  },
];

