'use client'

import { useId } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// ── Single beam SVG ───────────────────────────────────────────────────────────

interface BeamProps {
  className?: string
  delay?: number
  duration?: number
  repeatDelay?: number
}

export function Beam({ className, delay = 0, duration = 2.2, repeatDelay = 3 }: BeamProps) {
  const id = useId().replace(/:/g, '')

  return (
    <svg
      width="156"
      height="63"
      viewBox="0 0 156 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('absolute pointer-events-none opacity-60', className)}
    >
      <path
        d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
        stroke={`url(#grad-${id})`}
        strokeWidth={1.2}
      />
      <defs>
        <motion.linearGradient
          id={`grad-${id}`}
          variants={{
            initial: { x1: '40%', x2: '50%', y1: '160%', y2: '180%' },
            animate: { x1: '0%', x2: '10%', y1: '-40%', y2: '-20%' },
          }}
          animate="animate"
          initial="initial"
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay,
          }}
        >
          <stop stopColor="#4361ee" stopOpacity="0" />
          <stop stopColor="#6c82f5" />
          <stop offset="0.4" stopColor="#4361ee" />
          <stop offset="1" stopColor="#4361ee" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  )
}

// ── GridBeam wrapper ──────────────────────────────────────────────────────────

interface GridBeamProps {
  children: React.ReactNode
  className?: string
  beams?: number
}

export function GridBeam({ children, className, beams = 4 }: GridBeamProps) {
  const beamConfigs = [
    { className: 'top-8  left-[8%]',  delay: 0,   duration: 2.2, repeatDelay: 4   },
    { className: 'top-12 left-[38%]', delay: 1.4, duration: 1.9, repeatDelay: 3.5 },
    { className: 'top-4  left-[62%]', delay: 0.7, duration: 2.5, repeatDelay: 4.5 },
    { className: 'top-16 left-[82%]', delay: 2.1, duration: 2.0, repeatDelay: 3.8 },
  ].slice(0, beams)

  return (
    <div className={cn('relative w-full grid-subtle overflow-hidden', className)}>
      {beamConfigs.map((cfg, i) => (
        <Beam key={i} {...cfg} />
      ))}
      {children}
    </div>
  )
}
