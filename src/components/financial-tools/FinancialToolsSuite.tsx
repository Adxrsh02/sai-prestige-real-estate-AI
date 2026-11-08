'use client';

import React, { useState, useEffect } from 'react';
import { EmiCalculator } from './EmiCalculator';
import { StampDutyCalculator } from './StampDutyCalculator';
import { RentVsBuyCalculator } from './RentVsBuyCalculator';
import { Calculator, Landmark, Scale, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FinancialToolTab = 'all' | 'emi' | 'stamp-duty' | 'rent-vs-buy';

export const FinancialToolsSuite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FinancialToolTab>('all');

  // Listen to URL hash on initial load or change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#stamp-duty') {
        setActiveTab('stamp-duty');
      } else if (hash === '#rent-vs-buy') {
        setActiveTab('rent-vs-buy');
      } else if (hash === '#home-loan-emi') {
        setActiveTab('emi');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: FinancialToolTab) => {
    setActiveTab(tab);
    if (tab === 'emi') {
      window.history.replaceState(null, '', '#home-loan-emi');
    } else if (tab === 'stamp-duty') {
      window.history.replaceState(null, '', '#stamp-duty');
    } else if (tab === 'rent-vs-buy') {
      window.history.replaceState(null, '', '#rent-vs-buy');
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const tabs = [
    { id: 'all' as const, label: 'All Financial Tools', icon: LayoutGrid },
    { id: 'emi' as const, label: 'Home Loan EMI', icon: Calculator },
    { id: 'stamp-duty' as const, label: 'Stamp Duty & Cess', icon: Landmark },
    { id: 'rent-vs-buy' as const, label: 'Rent vs Buy Analysis', icon: Scale },
  ];

  return (
    <div className="space-y-6">
      {/* Luxury Segmented Navigation Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-1 scrollbar-none">
        <div className="inline-flex items-center p-1 rounded-xl bg-white border border-[var(--color-neutral-200)] shadow-[var(--shadow-subtle)] gap-1 shrink-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  'flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap',
                  isActive
                    ? 'bg-[var(--color-prestige-charcoal)] text-white shadow-xs'
                    : 'text-[var(--color-neutral-600)] hover:text-[var(--color-prestige-charcoal)] hover:bg-[var(--color-neutral-100)]'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon
                  className={cn(
                    'w-3.5 h-3.5',
                    isActive ? 'text-[var(--color-prestige-gold)]' : 'text-[var(--color-neutral-400)]'
                  )}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Calculator Panels */}
      {activeTab === 'all' && (
        <div className="space-y-6">
          {/* Top Row: Dual EMI & Stamp Duty Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-start">
            <EmiCalculator />
            <StampDutyCalculator />
          </div>

          {/* Bottom Row: Featured Rent vs Buy Analysis Calculator */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-start">
            <RentVsBuyCalculator className="lg:col-span-2" />
          </div>
        </div>
      )}

      {activeTab === 'emi' && (
        <div className="max-w-3xl mx-auto">
          <EmiCalculator />
        </div>
      )}

      {activeTab === 'stamp-duty' && (
        <div className="max-w-3xl mx-auto">
          <StampDutyCalculator />
        </div>
      )}

      {activeTab === 'rent-vs-buy' && (
        <div className="max-w-4xl mx-auto">
          <RentVsBuyCalculator />
        </div>
      )}
    </div>
  );
};
