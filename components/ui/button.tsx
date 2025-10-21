/**
 * Button Component - Based on PRD Section 7.4.2
 * shadcn/ui button with custom styling for CAGR Calculator
 */
import * as React from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary hover:bg-primary-dark text-white shadow-sm active:scale-[0.98] focus-visible:ring-primary',
        secondary:
          'bg-white hover:bg-gray-50 text-primary border-2 border-primary focus-visible:ring-primary',
        ghost: 'hover:bg-gray-100 hover:text-gray-900',
        danger: 'bg-error hover:bg-red-600 text-white focus-visible:ring-error',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
        mobile: 'h-14 px-6 text-lg w-full md:w-auto md:h-12', // Mobile-first size (PRD 7.7.3)
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
