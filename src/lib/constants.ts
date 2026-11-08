import { MegaMenuData, NavLinkItem, SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'SAI PRESTIGE',
  tagline: 'Premium Real Estate Advisory & Developments',
  description:
    'Experience architectural distinction and trusted real estate expertise with SAI PRESTIGE. Curated luxury properties, premier new projects, and end-to-end property advisory in Navi Mumbai.',
  url: 'https://saiprestigerealestate.com',
  locale: 'en_IN',
  contact: {
    phone: '+91 93264 33965',
    email: 'sai.prestige01@gmail.com',
    address: 'Shop No. 03, Plot No. 172, Dream Heritage, opposite Ramsheth Thakur International Sports Complex, Sector 17, Ulwe',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    country: 'India',
  },
  social: {
    instagram: 'https://instagram.com/saiprestige',
    linkedin: 'https://www.linkedin.com/company/sai-prestige/?viewAsMember=true',
    whatsapp: 'https://wa.me/919326433965',
  },
};

export const servicesMegaMenuData: MegaMenuData = {
  title: 'Comprehensive Real Estate Services',
  categories: [
    {
      title: 'BUY',
      items: [
        { label: 'Residential Properties', href: '/buy', description: 'Curated luxury flats, duplexes & penthouses' },
        { label: 'Commercial Spaces', href: '/buy?type=commercial', description: 'High-yield office spaces & retail' },
        { label: 'Luxury Developments', href: '/properties?category=luxury', description: 'Exclusive gated estates' },
        { label: 'New Project Launches', href: '/properties?status=new-launch', description: 'Early-stage investment opportunities' },
      ],
    },
    {
      title: 'RENT',
      items: [
        { label: 'Residential Rentals', href: '/rent', description: 'Premium homes and managed residences' },
        { label: 'Commercial Leases', href: '/rent?type=commercial', description: 'Strategic corporate office spaces' },
      ],
    },
    {
      title: 'SELL',
      items: [
        { label: 'Sell Your Property', href: '/sell', description: 'Direct marketing to verified high-net-worth buyers' },
        { label: 'Property Valuation', href: '/property-valuation', description: 'Transparent, accurate market appraisal' },
      ],
    },
    {
      title: 'FINANCE',
      items: [
        { label: 'Home Loan Assistance', href: '/home-loan', description: 'Competitive rates and trusted banking partners' },
        { label: 'EMI Calculator', href: '/emi-calculator', description: 'Interactive loan & repayment calculation tool' },
        { label: 'Rent vs Buy Analysis', href: '/emi-calculator#rent-vs-buy', description: 'Compare renting vs property acquisition' },
      ],
    },
    {
      title: 'ASSISTANCE',
      items: [
        { label: 'Property Consultation', href: '/services#consultation', description: 'Tailored investment & legal guidance' },
        { label: 'Documentation & Registration', href: '/services#documentation', description: 'Smooth, compliant title registration' },
      ],
    },
  ],
};

export const mainNavLinks: NavLinkItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Properties', href: '/properties' },
  { label: 'Buy', href: '/buy' },
  { label: 'Rent', href: '/rent' },
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'Insights', href: '/insights' },
];

export const footerNavigation = {
  discovery: [
    { label: 'All Properties', href: '/properties' },
    { label: 'Buy Property', href: '/buy' },
    { label: 'Rent Property', href: '/rent' },
    { label: 'Sell Property', href: '/sell' },
    { label: 'Compare Properties', href: '/compare' },
    { label: 'Saved Properties', href: '/favorites' },
  ],
  services: [
    { label: 'All Real Estate Services', href: '/services' },
    { label: 'Home Loan Support', href: '/home-loan' },
    { label: 'EMI Calculator', href: '/emi-calculator' },
    { label: 'Property Valuation Request', href: '/property-valuation' },
    { label: 'Documentation Guidance', href: '/services#documentation' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Why SAI PRESTIGE', href: '/why-sai-prestige' },
    { label: 'Happy Customers & Stories', href: '/happy-customers' },
    { label: 'Real Estate Insights', href: '/insights' },
    { label: 'Locations Served', href: '/locations' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
};
