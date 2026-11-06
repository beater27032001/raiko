'use client'

import type { ReactNode, SVGProps } from 'react'

import { motion, useReducedMotion, type Variants } from 'motion/react'

import { cn } from '@lib/utils'

export const INK = '#0d0d0d'
export const PAPER = '#fbfbf8'
export const RED = '#e3262e'

// Traço desenhado na tela: o comprimento do caminho vai de 0 a 1.
const DRAW: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (delay: number = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.9, delay, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.01, delay },
    },
  }),
}
const APPEAR: Variants = {
  hidden: { opacity: 0 },
  show: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.45, delay },
  }),
}

/**
 * Ilustração em nanquim que preenche o quadro. Mede a própria visibilidade (ocupa o quadro inteiro,
 * então nunca fica recortada) e desenha os traços quando aparece.
 */
export function Art({
  viewBox,
  fit = 'meet',
  align = 'xMidYMid',
  label,
  className,
  children,
}: {
  viewBox: string
  fit?: 'meet' | 'slice'
  align?: string
  label?: string
  className?: string
  children: ReactNode
}) {
  const reduced = useReducedMotion()
  return (
    <motion.svg
      viewBox={viewBox}
      preserveAspectRatio={`${align} ${fit}`}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn('absolute inset-0 size-full', className)}
      initial={reduced ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.svg>
  )
}

type PathProps = Omit<SVGProps<SVGPathElement>, 'ref' | 'd'> & {
  d: string
  delay?: number
}

/** Linha de nanquim que se desenha. */
export function Ink({
  d,
  delay = 0,
  stroke = INK,
  strokeWidth = 3,
  ...rest
}: PathProps) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={DRAW}
      custom={delay}
      {...(rest as object)}
    />
  )
}

/** Forma chapada (silhueta, sombra, cor) que aparece depois dos traços. */
export function Fill({ d, delay = 0.4, fill = INK, ...rest }: PathProps) {
  return (
    <motion.path
      d={d}
      fill={fill}
      variants={APPEAR}
      custom={delay}
      {...(rest as object)}
    />
  )
}

/** Chuva em diagonal, determinística (sem aleatório, igual em todo render). */
export function Rain({
  width,
  height,
  count = 40,
  color = INK,
  opacity = 0.55,
  delay = 0.2,
}: {
  width: number
  height: number
  count?: number
  color?: string
  opacity?: number
  delay?: number
}) {
  const drops = Array.from({ length: count }, (_, i) => {
    const x = (((i * 73) % 100) / 100) * (width + 40)
    const y = (((i * 37) % 100) / 100) * height
    const len = 14 + ((i * 11) % 18)
    return `M${x.toFixed(1)} ${y.toFixed(1)} l${(-len * 0.35).toFixed(1)} ${len}`
  })
  return (
    <motion.path
      d={drops.join(' ')}
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeOpacity={opacity}
      variants={APPEAR}
      custom={delay}
    />
  )
}

/** Padrões compartilhados (retícula e hachura), declarados uma vez na página. */
export function ArtDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <pattern id="tone" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="1" fill={INK} />
        </pattern>
        <pattern
          id="tone-light"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2.5" cy="2.5" r="0.9" fill={PAPER} />
        </pattern>
        <pattern
          id="hatch"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="4" stroke={INK} strokeWidth="1.1" />
        </pattern>
      </defs>
    </svg>
  )
}
