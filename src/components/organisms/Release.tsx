'use client'

import { motion } from 'motion/react'

import { EASE } from '@constants/motion'
import { RELEASE } from '@domain/story'

export function Release() {
  return (
    <section className="border-t-4 border-ink bg-ink py-[90px] text-paper max-md:py-16">
      <div className="wrap grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          {/* a visibilidade é medida no título: o texto começa fora da máscara e nunca seria "visto" */}
          <motion.h2
            className="m-0 overflow-hidden font-display text-[clamp(44px,7vw,92px)] leading-[.9] font-normal"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <motion.span
              className="block"
              variants={{ hidden: { y: '100%' }, show: { y: 0 } }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              Estreia em
              <br />
              janeiro de 2027
            </motion.span>
          </motion.h2>
          <a
            href="#capitulo"
            className="mt-[26px] inline-block border-[2.5px] border-paper bg-red px-[18px] py-2.5 font-black text-paper no-underline shadow-[4px_4px_0_var(--color-paper)] transition-transform hover:-translate-y-0.5"
          >
            Reler o capítulo 1
          </a>
        </div>
        <motion.dl
          className="m-0 grid grid-cols-[auto_1fr] gap-x-[22px] gap-y-2.5 font-medium"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {RELEASE.map(([term, value]) => (
            <motion.div
              key={term}
              className="contents"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              <dt className="text-[#9a9a95]">{term}</dt>
              <dd className="m-0 font-black">{value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
