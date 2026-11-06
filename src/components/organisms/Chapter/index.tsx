'use client'

import { useEffect, useRef } from 'react'

import { motion, useMotionValue, useScroll, useTransform } from 'motion/react'

import { Page1, Page2, Page3, Page4, Page5 } from './pages'

const PAGES = 5

/** Capítulo 1: o scroll vertical move a faixa de páginas, lida da direita para a esquerda. */
export function Chapter() {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  // quanto a faixa precisa andar: largura total menos a tela
  const distance = useMotionValue(0)
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ['start start', 'end end'],
  })
  // começa mostrando a página 1 (ponta direita) e anda para a esquerda
  const x = useTransform(() => -distance.get() * (1 - scrollYProgress.get()))
  const page = useTransform(
    scrollYProgress,
    (p) => `PÁGINA ${Math.min(PAGES, 1 + Math.floor(p * PAGES))} / ${PAGES}`,
  )
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const measure = () => {
      const d = Math.max(0, track.current!.scrollWidth - innerWidth)
      distance.set(d)
      section.current!.style.height = `${innerHeight + d * 1.1}px`
    }
    const observer = new ResizeObserver(measure)
    observer.observe(track.current!)
    addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      removeEventListener('resize', measure)
    }
  }, [distance])

  return (
    <section
      ref={section}
      id="capitulo"
      aria-label="Capítulo 1"
      className="relative bg-ink"
    >
      {/* faixa centrada na altura: no celular as páginas são mais baixas que a tela */}
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="absolute top-[calc(14px+env(safe-area-inset-top))] right-[max(16px,env(safe-area-inset-right))] left-[max(16px,env(safe-area-inset-left))] z-10 flex items-center justify-between gap-4 text-[13px] font-bold tracking-[.06em] text-paper">
          <span>← LEIA DA DIREITA PARA A ESQUERDA</span>
          <motion.span className="tabular-nums max-sm:hidden">
            {page}
          </motion.span>
        </div>
        {/* progresso de leitura, que cresce da direita para a esquerda como a leitura */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-white/10">
          <motion.div
            className="h-full origin-right bg-red"
            style={{ scaleX: bar }}
          />
        </div>
        {/* ordem invertida: a página 1 fica na ponta direita */}
        <motion.div
          ref={track}
          style={{ x }}
          className="flex w-max gap-[18px] px-5 pt-[58px] pb-[30px] md:gap-7 md:px-10 md:pt-16 md:pb-8"
        >
          <Page5 />
          <Page4 />
          <Page3 />
          <Page2 />
          <Page1 />
        </motion.div>
      </div>
    </section>
  )
}
