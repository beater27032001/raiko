'use client'

import type { CSSProperties, ReactNode } from 'react'

import { motion } from 'motion/react'

import { cn } from '@lib/utils'

type Place = CSSProperties

/** Página do mangá: uma grade de quadros numerada embaixo. */
export function Page({
  number,
  template,
  children,
}: {
  number: number
  template: string
  children: ReactNode
}) {
  return (
    <div
      className="relative grid aspect-[7/10] flex-none gap-[9px] bg-paper p-3.5 shadow-[0_0_0_1px_#000,8px_8px_0_rgb(255_255_255/.08)] max-md:max-h-[calc(100svh-96px)] max-md:w-[86vw] md:h-[calc(100svh-104px)] md:max-w-[86vw]"
      style={{ gridTemplate: template }}
    >
      {children}
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray">
        {number}
      </span>
    </div>
  )
}

export function Panel({
  dark,
  className,
  style,
  children,
}: {
  dark?: boolean
  className?: string
  style?: Place
  children?: ReactNode
}) {
  return (
    <div
      className={cn(
        'relative min-h-0 min-w-0 overflow-hidden border-[3px] border-ink',
        dark ? 'bg-ink text-paper' : 'bg-paper',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}

export const SpeedLines = ({ light }: { light?: boolean }) => (
  <div
    aria-hidden
    className={cn('speed-lines', light && 'speed-lines-light')}
  />
)

export const Tone = ({ up, style }: { up?: boolean; style?: Place }) => (
  <div aria-hidden className={cn('tone', up && 'tone-up')} style={style} />
)

export function Narration({
  style,
  children,
}: {
  style: Place
  children: ReactNode
}) {
  return (
    <p
      className="absolute z-[2] m-0 max-w-[62%] border-2 border-ink bg-paper px-2 py-1.5 text-[clamp(11px,1.5vh,14px)] leading-[1.4] font-medium text-ink"
      style={style}
    >
      {children}
    </p>
  )
}

export function Bubble({
  style,
  children,
}: {
  style: Place
  children: ReactNode
}) {
  return (
    <motion.p
      className="bubble absolute z-[2] m-0 max-w-[70%] rounded-[50%] border-[2.5px] border-ink bg-white px-[18px] py-3 text-center text-[clamp(12px,1.7vh,16px)] leading-[1.3] font-bold text-ink"
      style={style}
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ amount: 0.8 }}
      transition={{ type: 'spring', stiffness: 380, damping: 18 }}
    >
      {children}
    </motion.p>
  )
}

/** Onomatopeia que "estoura" cada vez que entra na tela. */
export function Sfx({
  children,
  red,
  size,
  rotate = 0,
  style,
}: {
  children: string
  red?: boolean
  size: string
  rotate?: number
  style: Place
}) {
  return (
    <motion.span
      aria-hidden
      className={cn(
        'absolute z-[3] font-display leading-[.9] whitespace-nowrap [-webkit-text-stroke:4px_var(--color-ink)] [paint-order:stroke_fill]',
        red ? 'text-red' : 'text-paper',
      )}
      style={{ ...style, fontSize: size }}
      initial={{ scale: 1.9, opacity: 0, rotate }}
      whileInView={{ scale: 1, opacity: 1, rotate }}
      // começa ampliada e o quadro corta o excesso: um limite alto nunca dispararia em telas estreitas
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.2, 1.6, 0.4, 1] }}
    >
      {children}
    </motion.span>
  )
}
