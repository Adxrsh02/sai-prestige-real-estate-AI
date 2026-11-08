export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  isExternal?: boolean;
}

export interface MegaMenuCategory {
  title: string;
  items: NavLinkItem[];
}

export interface MegaMenuData {
  title: string;
  categories: MegaMenuCategory[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    country: string;
  };
  social: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
    whatsapp?: string;
  };
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type BadgeVariant = 'gold' | 'charcoal' | 'neutral' | 'outline';
