'use client'

import { motion } from 'motion/react'

import { EASE } from '@constants/motion'
import { CAST, type Character } from '@domain/story'
import { cn } from '@lib/utils'

function Portrait({ c }: { c: Character }) {
  return (
    <div
      className={cn(
        'relative h-60 overflow-hidden border-b-[3px] border-ink',
        c.look === 'dark' && 'bg-ink',
      )}
    >
      {c.look === 'lines' && <div aria-hidden className="speed-lines" />}
      {c.look === 'dark' && <div aria-hidden className="tone tone-up invert" />}
      {c.look === 'tone' && <div aria-hidden className="tone" />}
      <span
        lang="ja"
        className="absolute top-3 left-3 border-2 border-ink bg-paper px-1 py-1.5 text-[15px] font-black [writing-mode:vertical-rl]"
      >
        {c.japanese}
      </span>
      <motion.span
        aria-hidden
        className={cn(
          'absolute right-3 -bottom-3.5 font-display text-[150px] leading-none [-webkit-text-stroke:4px_var(--color-ink)] [paint-order:stroke_fill]',
          c.look === 'dark' ? 'text-red' : 'text-paper',
        )}
        // sobe junto com o card (que mede a visibilidade); o retrato corta o excesso
        variants={{ hidden: { y: '40%' }, show: { y: 0 } }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {c.kanji}
      </motion.span>
    </div>
  )
}

export function Cast() {
  return (
    <section
      id="elenco"
      className="scroll-mt-4 pt-[110px] pb-[90px] max-md:pt-20"
    >
      <div className="wrap">
        <h2 className="m-0 mb-[.6em] font-display text-[clamp(40px,6vw,76px)] leading-[.95] font-normal text-balance">
          Três pessoas, uma tempestade
        </h2>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {CAST.map((c, i) => (
            <motion.article
              key={c.name}
              className="flex min-w-0 flex-col border-[3px] border-ink bg-paper shadow-[6px_6px_0_var(--color-ink)] transition-[translate,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_var(--color-ink)]"
              variants={{
                hidden: { opacity: 0, y: 40, rotate: i % 2 ? 2 : -2 },
                show: {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: { duration: 0.7, ease: EASE },
                },
              }}
            >
              <Portrait c={c} />
              <div className="flex flex-col gap-2 px-[18px] pt-[18px] pb-5">
                <div className="text-[13px] font-bold tracking-[.06em] text-red">
                  {c.role}
                </div>
                <h3 className="m-0 font-display text-[26px] leading-[1.05] font-normal">
                  {c.name}
                </h3>
                <p className="m-0 text-[15px] text-muted">{c.text}</p>
                <q className="text-[15px] font-bold">{c.quote}</q>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
