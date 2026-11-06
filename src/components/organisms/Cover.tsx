'use client'

import { useEffect, useRef } from 'react'

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

import { EASE } from '@constants/motion'
import {
  buildScene,
  FRAME_COUNT,
  frameAt,
  frameLabel,
  type Scene,
} from '@domain/frames'
import { TAGLINE } from '@domain/story'
import { drawFrame } from '@lib/drawFrame'

export function Cover() {
  const section = useRef<HTMLElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ['start start', 'end end'],
  })
  // com menos movimento, a capa já mostra o último quadro
  const frame = useTransform(scrollYProgress, (p) =>
    reduced ? FRAME_COUNT - 1 : frameAt(p),
  )
  const label = useTransform(frame, frameLabel)

  useEffect(() => {
    const cv = canvas.current!
    const ctx = cv.getContext('2d')!
    let scene: Scene | null = null
    let last = -1
    const draw = (i: number) => {
      if (!scene || i === last) return
      last = i
      drawFrame(ctx, scene, i)
    }
    const resize = () => {
      const dpr = Math.min(devicePixelRatio, 2)
      cv.width = cv.clientWidth * dpr
      cv.height = cv.clientHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      scene = buildScene(cv.clientWidth, cv.clientHeight)
      last = -1
      draw(frame.get())
    }
    const observer = new ResizeObserver(resize)
    observer.observe(cv)
    const unsubscribe = frame.on('change', draw)
    return () => {
      observer.disconnect()
      unsubscribe()
    }
  }, [frame])

  return (
    <section ref={section} className="relative h-[320vh]">
      <div className="sticky top-0 h-svh overflow-hidden border-b-4 border-ink">
        <canvas
          ref={canvas}
          aria-hidden
          className="absolute inset-0 block size-full"
        />
        <div className="pointer-events-none absolute inset-0 grid grid-cols-[1fr_auto] grid-rows-[auto_1fr_auto] pt-[calc(24px+env(safe-area-inset-top))] pr-[max(20px,env(safe-area-inset-right))] pb-7 pl-[max(20px,env(safe-area-inset-left))]">
          <motion.div
            className="col-start-1 row-start-1 self-start justify-self-start border-[3px] border-ink bg-red px-2 py-2.5 font-display text-lg tracking-[.1em] text-paper [writing-mode:vertical-rl]"
            initial={{ y: -60, rotate: -8, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 18,
              delay: 0.5,
            }}
          >
            第一巻
          </motion.div>
          <div
            aria-hidden
            className="ink-outline col-start-2 row-span-2 row-start-1 font-display text-[clamp(84px,17vw,210px)] leading-[.95] tracking-[.02em] [--stroke:10px] [writing-mode:vertical-rl]"
          >
            {[...'雷光'].map((ch, i) => (
              <motion.span
                key={ch}
                className="inline-block"
                initial={{ y: '-40%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  ease: EASE,
                }}
              >
                {ch}
              </motion.span>
            ))}
          </div>
          <div className="col-span-full row-start-3 flex flex-col gap-1.5">
            <h1 className="ink-outline m-0 overflow-hidden pb-[.05em] font-display text-[clamp(56px,12vw,150px)] leading-[.85] font-normal tracking-[-.01em] [--stroke:8px]">
              <motion.span
                className="inline-block"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
              >
                RAIKŌ
              </motion.span>
            </h1>
            <motion.p
              className="m-0 max-w-full self-start border-[3px] border-ink bg-paper px-3 py-1.5 text-[clamp(16px,2vw,22px)] font-black"
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
            >
              {TAGLINE}
            </motion.p>
          </div>
        </div>
        <motion.div
          aria-hidden
          className="absolute right-[max(20px,env(safe-area-inset-right))] bottom-7 border-2 border-ink bg-paper px-2 py-0.5 text-xs font-bold tabular-nums max-sm:hidden"
        >
          {label}
        </motion.div>
      </div>
    </section>
  )
}
