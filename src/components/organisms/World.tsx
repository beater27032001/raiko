'use client'

import { motion } from 'motion/react'

import { EASE } from '@constants/motion'
import { WORLD, type WorldEntry } from '@domain/story'
import { ClanCrest, LegendScroll, Village } from '@molecules/art/scenes'

const ART: Record<WorldEntry['art'], React.ReactNode> = {
  village: <Village fit="slice" />,
  legend: <LegendScroll />,
  clan: <ClanCrest />,
}

export function World() {
  return (
    <section
      id="mundo"
      className="scroll-mt-4 border-t-4 border-ink pt-[110px] pb-[60px] max-md:pt-20"
    >
      <div className="wrap">
        <motion.h2
          className="m-0 mb-[.6em] overflow-hidden font-display text-[clamp(40px,6vw,76px)] leading-[.95] font-normal"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.span
            className="block"
            variants={{ hidden: { y: '100%' }, show: { y: 0 } }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            O mundo de Raikō
          </motion.span>
        </motion.h2>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {WORLD.map((entry) => (
            <motion.article
              key={entry.title}
              className="flex min-w-0 flex-col gap-3"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: EASE },
                },
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-[3px] border-ink bg-paper">
                {ART[entry.art]}
                <span
                  lang="ja"
                  className="absolute top-2.5 right-2.5 z-10 border-2 border-ink bg-paper px-1 py-1.5 text-sm font-black [writing-mode:vertical-rl]"
                >
                  {entry.japanese}
                </span>
              </div>
              <h3 className="m-0 font-display text-2xl leading-[1.05] font-normal">
                {entry.title}
              </h3>
              <p className="m-0 text-[15px] text-muted">{entry.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
