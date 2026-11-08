import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/properties', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/buy', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/rent', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/sell', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/locations', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/insights', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/home-loan', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/emi-calculator', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/property-valuation', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/why-sai-prestige', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/happy-customers', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
