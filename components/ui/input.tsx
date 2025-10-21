/**
 * Input Component - Based on PRD Section 7.4.1
 * Custom styled input with mobile-first approach
 */
import * as React from 'react'
import { cn } from '@/lib/utils/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  filled?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, filled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base styles (PRD 7.4.1)
          'flex w-full rounded-lg border-2 bg-white px-4 py-3 text-base transition-all duration-200',
          'placeholder:text-gray-400',
          'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20',
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Mobile-first height (PRD 7.7.3)
          'h-12 md:h-12',
          // State-based styling
          error && 'border-error focus:border-error focus:ring-error',
          filled && 'border-success',
          !error && !filled && 'border-gray-300',
          className
        )}
        ref={ref}
        // Prevent iOS auto-zoom (PRD 7.7.3)
        style={{ fontSize: '16px' }}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
