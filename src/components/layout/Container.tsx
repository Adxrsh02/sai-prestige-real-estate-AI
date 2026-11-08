import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'default',
  as: Component = 'div',
  ...props
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
