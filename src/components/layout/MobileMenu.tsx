'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavLinks, servicesMegaMenuData, siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu whenever navigation occurs
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center">
      {/* Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-11 h-11 flex items-center justify-center text-[var(--color-prestige-charcoal)] hover:text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-prestige-gold)] rounded-md transition-colors"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Slide-in Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[64px] z-50 bg-black/40 backdrop-blur-sm flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-md h-[calc(100vh-64px)] bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Menu Links */}
              <div className="p-6 space-y-4">
                <nav>
                  <ul className="space-y-1">
                    {mainNavLinks.map((item) => {
                      const isActive = pathname === item.href;
                      const isServices = item.label === 'Services';

                      if (isServices) {
                        return (
                          <li key={item.label} className="border-b border-[var(--color-neutral-100)] py-1">
                            <button
                              type="button"
                              onClick={() => setServicesExpanded((prev) => !prev)}
                              className="w-full flex items-center justify-between py-2 text-base font-medium text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)]"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={cn(
                                  'w-4 h-4 transition-transform duration-200',
                                  servicesExpanded && 'rotate-180 text-[var(--color-prestige-gold)]'
                                )}
                              />
                            </button>

                            {/* Collapsible Services Sub-categories */}
                            {servicesExpanded && (
                              <div className="pl-3 py-2 space-y-3 bg-[var(--color-neutral-50)] rounded-lg my-1">
                                {servicesMegaMenuData.categories.map((cat) => (
                                  <div key={cat.title}>
                                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--color-neutral-400)] block mb-1">
                                      {cat.title}
                                    </span>
                                    <ul className="space-y-1.5 pl-1">
                                      {cat.items.map((subItem) => (
                                        <li key={subItem.label}>
                                          <Link
                                            href={subItem.href}
                                            className="text-xs font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-prestige-gold)] flex items-center justify-between py-1"
                                          >
                                            <span>{subItem.label}</span>
                                            <ArrowRight className="w-3 h-3 opacity-40" />
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </li>
                        );
                      }

                      return (
                        <li key={item.label} className="border-b border-[var(--color-neutral-100)] py-1">
                          <Link
                            href={item.href}
                            className={cn(
                              'block py-2 text-base font-medium transition-colors',
                              isActive
                                ? 'text-[var(--color-prestige-gold)] font-semibold'
                                : 'text-[var(--color-prestige-charcoal)] hover:text-[var(--color-prestige-gold)]'
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}

                    <li className="pt-2">
                      <Link
                        href="/emi-calculator"
                        className="block py-2 text-sm font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-prestige-gold)]"
                      >
                        EMI Calculator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/favorites"
                        className="block py-2 text-sm font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-prestige-gold)]"
                      >
                        Saved Properties
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Bottom CTAs & Contact Snapshot */}
              <div className="p-6 bg-[var(--color-neutral-50)] border-t border-[var(--color-neutral-200)] space-y-4">
                <Button href="/contact" variant="primary" fullWidth size="lg">
                  Contact Us
                </Button>

                <div className="pt-2 space-y-2 text-xs text-[var(--color-neutral-600)]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[var(--color-prestige-gold)] shrink-0" />
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hover:underline">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[var(--color-prestige-gold)] shrink-0" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
