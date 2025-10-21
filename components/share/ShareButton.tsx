'use client'

import { useState } from 'react'
import { Share2, Check, Copy } from 'lucide-react'
import type { CalculationResult } from '@/types/calculator'
import {
  buildShareUrl,
  generateShareText,
  isWebShareSupported,
  copyToClipboard,
} from '@/lib/utils/shareUtils'

interface ShareButtonProps {
  result: CalculationResult
  variant?: 'primary' | 'secondary'
  className?: string
}

export function ShareButton({ result, variant = 'secondary', className = '' }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  const handleShare = async () => {
    setIsSharing(true)
    const shareUrl = buildShareUrl(result)
    const shareText = generateShareText(result)

    // 1. Try Web Share API first (mobile native share)
    if (isWebShareSupported()) {
      try {
        await navigator.share({
          title: 'Smart CAGR Calculator Result',
          text: shareText,
          url: shareUrl,
        })
        // Successfully shared
        setIsSharing(false)
        return
      } catch (err) {
        // User cancelled sharing or share failed
        if (err instanceof Error && err.name === 'AbortError') {
          // User cancelled, not an error
          setIsSharing(false)
          return
        }
        // Other error, fall through to clipboard
        console.log('Web Share failed, falling back to clipboard:', err)
      }
    }

    // 2. Fallback: Copy to clipboard
    try {
      const success = await copyToClipboard(shareUrl)
      if (success) {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } else {
        // 3. Final fallback: Show prompt
        prompt('Copy this link:', shareUrl)
      }
    } catch (err) {
      console.error('Copy to clipboard failed:', err)
      // Final fallback: Show prompt
      prompt('Copy this link:', shareUrl)
    } finally {
      setIsSharing(false)
    }
  }

  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary:
      'bg-primary text-white hover:bg-primary-dark active:scale-95 shadow-sm hover:shadow-md',
    secondary:
      'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 active:scale-95',
  }

  return (
    <button
      onClick={handleShare}
      disabled={isSharing}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      title="Share this calculation"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600" />
          <span>Copied!</span>
        </>
      ) : isSharing ? (
        <>
          <Share2 className="w-4 h-4 animate-pulse" />
          <span>Sharing...</span>
        </>
      ) : (
        <>
          {isWebShareSupported() ? (
            <Share2 className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span>{isWebShareSupported() ? 'Share' : 'Copy Link'}</span>
        </>
      )}
    </button>
  )
}
