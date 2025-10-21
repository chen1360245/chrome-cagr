/**
 * Logo Component
 *
 * Displays the CAGR Calculator logo in different variants
 *
 * @param variant - Logo variant: 'full' | 'icon' | 'favicon'
 * @param className - Additional CSS classes
 */

import Image from 'next/image'

interface LogoProps {
  variant?: 'full' | 'icon-1' | 'icon-2' | 'icon-3' | 'favicon'
  className?: string
  width?: number
  height?: number
}

export function Logo({ variant = 'full', className = '', width, height }: LogoProps) {
  const logoSources = {
    full: '/logo-full.svg',
    'icon-1': '/logo-variant-1.svg',
    'icon-2': '/logo-variant-2.svg',
    'icon-3': '/logo-variant-3.svg',
    favicon: '/logo-favicon.svg',
  }

  const defaultSizes = {
    full: { width: 240, height: 50 },
    'icon-1': { width: 200, height: 200 },
    'icon-2': { width: 200, height: 200 },
    'icon-3': { width: 200, height: 200 },
    favicon: { width: 64, height: 64 },
  }

  const logoSrc = logoSources[variant]
  const defaultSize = defaultSizes[variant]

  return (
    <Image
      src={logoSrc}
      alt="CAGR Calculator Logo"
      width={width || defaultSize.width}
      height={height || defaultSize.height}
      className={className}
      priority
    />
  )
}
