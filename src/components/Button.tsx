import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, ...props }, ref) => {
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.3)]',
      secondary: 'bg-white text-slate-900 hover:bg-slate-100',
      outline: 'bg-transparent border border-slate-200 text-slate-900 hover:bg-slate-100',
    };
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base font-medium',
      lg: 'px-8 py-4 text-lg font-bold',
    };

    const commonClasses = cn(
      'inline-flex items-center justify-center rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <a
          ref={ref as any}
          href={href}
          className={commonClasses}
          {...(props as any)}
        />
      );
    }

    return (
      <button
        ref={ref as any}
        className={commonClasses}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
