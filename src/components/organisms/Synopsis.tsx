'use client'

import { motion } from 'motion/react'

import { EASE } from '@constants/motion'
import { SYNOPSIS } from '@domain/story'

export function Synopsis() {
  return (
    <section className="border-b-4 border-ink py-[100px] max-md:py-16">
      <div className="wrap grid gap-10 md:grid-cols-[.9fr_1.1fr]">
        <motion.h2
          className="m-0 overflow-hidden font-display text-[clamp(40px,6vw,76px)] leading-[.95] font-normal text-balance"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.span
            className="block"
            variants={{ hidden: { y: '100%' }, show: { y: 0 } }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            O céu procura alguém
          </motion.span>
        </motion.h2>
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {SYNOPSIS.map((p, i) => (
            <motion.p
              key={i}
              className={i === 0 ? 'm-0 text-xl font-bold' : 'm-0 text-muted'}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE },
                },
              }}
            >
              {p}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
