'use client'

import { useState, type ReactNode } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CollapsibleSectionProps {
  id?: string
  title: string
  icon?: ReactNode
  children: ReactNode
  defaultExpanded?: boolean
  className?: string
}

export function CollapsibleSection({
  id,
  title,
  icon,
  children,
  defaultExpanded = false,
  className = '',
}: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        {/* Header - Clickable to toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors duration-200 text-left"
          aria-expanded={isExpanded}
          aria-controls={id ? `${id}-content` : undefined}
        >
          <div className="flex items-center gap-3">
            {icon && <span className="text-primary">{icon}</span>}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
          </div>

          <div className="flex items-center gap-2">
            {isExpanded ? (
              <>
                <span className="text-sm text-gray-500 hidden sm:inline">Collapse</span>
                <ChevronUp className="w-5 h-5 text-gray-600" />
              </>
            ) : (
              <>
                <span className="text-sm text-gray-500 hidden sm:inline">Expand</span>
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </>
            )}
          </div>
        </button>

        {/* Content - Collapsible */}
        <div
          id={id ? `${id}-content` : undefined}
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-6 py-6 prose prose-gray max-w-none">{children}</div>
        </div>
      </div>
    </section>
  )
}
