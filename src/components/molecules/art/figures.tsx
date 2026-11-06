'use client'

import { Art, Fill, Ink, INK, PAPER, RED } from './Art'

/** Mio de pé, rabo de cavalo ao vento e o bastão em diagonal. */
export function MioStanding() {
  return (
    <Art viewBox="0 0 200 300" fit="meet" align="xMidYMax">
      <Ink d="M40 288 L176 70" strokeWidth={5} delay={0.2} />
      {/* cabeça e rabo de cavalo */}
      <Fill
        d="M100 62 m-17 0 a17 18 0 1 0 34 0 a17 18 0 1 0 -34 0"
        delay={0.3}
      />
      <Fill
        d="M112 46 q34 -6 56 20 q-26 -6 -40 6 q14 6 18 22 q-22 -14 -34 -30Z"
        delay={0.4}
      />
      <Ink d="M114 48 l6 -6" stroke={RED} strokeWidth={5} delay={0.8} />
      <Ink d="M92 62 h6 M104 62 h6" stroke={PAPER} strokeWidth={2} delay={1} />
      {/* corpo: quimono e hakama */}
      <Fill d="M80 82 h40 l14 70 l18 136 h-104 l18 -136Z" delay={0.5} />
      <Ink
        d="M100 84 L92 112 L100 130 L108 112Z"
        stroke={PAPER}
        strokeWidth={2}
        delay={0.9}
      />
      <Ink
        d="M100 150 V288 M76 200 l-8 88 M124 200 l8 88"
        stroke={PAPER}
        strokeWidth={1.5}
        delay={1}
      />
      <Ink d="M84 128 h32" stroke={RED} strokeWidth={4} delay={1.1} />
      <Fill d="M120 104 q24 -10 36 -26 l8 6 q-12 22 -40 32Z" delay={0.6} />
    </Art>
  )
}

/** A mão de Kaito no chão depois do raio: fumaça e faíscas saindo dos dedos. */
export function SparkHand() {
  return (
    <Art viewBox="0 0 300 160" fit="slice">
      <Fill d="M0 0 H300 V160 H0Z" fill="url(#tone)" opacity={0.3} delay={0} />
      <Ink d="M0 148 H300" strokeWidth={2.5} />
      {/* palma e dedos abertos */}
      <Fill
        d="M90 150 Q86 112 120 104 L196 100 Q212 102 210 116 L176 122 L214 122 Q226 126 220 138 L178 140 L210 142 Q218 150 206 154 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={3}
        delay={0.2}
      />
      <Ink
        d="M128 116 q20 -4 40 -2 M126 128 q24 -2 46 2"
        strokeWidth={1.5}
        delay={0.5}
      />
      <Ink
        d="M226 112 l14 -8 l-4 10 l14 -6 M230 132 l18 2 l-10 6 l16 4 M210 98 l6 -16 l4 10 l6 -14"
        stroke={RED}
        strokeWidth={2.5}
        delay={0.8}
      />
      <Ink
        d="M100 96 q-14 -20 0 -40 q14 -18 0 -36 M150 90 q16 -22 0 -42 q-14 -18 4 -36"
        strokeWidth={2}
        delay={0.9}
      />
    </Art>
  )
}

/** Retrato de Kaito: cabelo espetado, cachecol e olhar teimoso. */
export function KaitoBust() {
  return (
    <Art viewBox="0 0 200 240" label="Retrato de Kaito Arashi">
      <Fill
        d="M30 240 q8 -54 70 -62 q62 8 70 62Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={3}
        delay={0.1}
      />
      <Fill
        d="M62 182 q38 22 76 0 l6 22 q-44 22 -88 0Z"
        fill={RED}
        stroke={INK}
        strokeWidth={2.5}
        delay={0.6}
      />
      <Ink d="M64 100 q0 66 36 74 q36 -8 36 -74" strokeWidth={3} delay={0.2} />
      <Fill
        d="M56 104 l-6 -30 l18 10 l-4 -30 l20 18 l6 -30 l14 26 l14 -28 l6 30 l18 -16 l-4 28 l18 -8 l-8 30 q-10 -22 -46 -22 q-36 0 -46 22Z"
        delay={0.3}
      />
      <Fill
        d="M118 104 q14 30 18 -4 q0 60 -36 74 q22 -22 18 -70Z"
        fill="url(#tone)"
        delay={0.5}
      />
      <Fill
        d="M78 118 q8 -6 16 0 v10 q-8 4 -16 0Z M106 118 q8 -6 16 0 v10 q-8 4 -16 0Z"
        delay={0.7}
      />
      <Fill
        d="M84 120 m-2 0 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 M112 120 m-2 0 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0"
        fill={PAPER}
        delay={0.9}
      />
      <Ink
        d="M76 108 l20 5 M124 108 l-20 5 M94 152 q6 3 12 0 M100 128 l-3 12 h5"
        strokeWidth={2.5}
        delay={0.8}
      />
      <Ink
        d="M80 74 l6 22 M100 66 l2 26 M120 74 l-4 22"
        stroke={PAPER}
        strokeWidth={1.5}
        delay={1}
      />
    </Art>
  )
}

/** Retrato de Mio: franja reta, rabo de cavalo e a fita vermelha (sobre fundo escuro). */
export function MioBust() {
  return (
    <Art viewBox="0 0 200 240" label="Retrato de Mio Kurogane">
      <Ink
        d="M30 240 q8 -54 70 -62 q62 8 70 62"
        stroke={PAPER}
        strokeWidth={3}
        delay={0.1}
      />
      <Ink
        d="M100 178 L84 214 L100 240 L116 214Z"
        stroke={PAPER}
        strokeWidth={2.5}
        delay={0.4}
      />
      <Ink
        d="M66 100 q0 66 34 74 q34 -8 34 -74"
        stroke={PAPER}
        strokeWidth={3}
        delay={0.2}
      />
      <Fill
        d="M60 110 q-4 -58 40 -60 q44 2 40 60 l-6 -14 h-68Z"
        fill={PAPER}
        delay={0.3}
      />
      <Fill
        d="M134 64 q40 -10 52 40 q-20 -20 -36 -12 q10 14 4 40 q-10 -40 -24 -50Z"
        fill={PAPER}
        delay={0.4}
      />
      <Ink d="M136 66 l10 -8" stroke={RED} strokeWidth={6} delay={0.9} />
      <Fill
        d="M78 116 l16 2 l-2 8 q-8 2 -14 -4Z M122 116 l-16 2 l2 8 q8 2 14 -4Z"
        fill={PAPER}
        delay={0.8}
      />
      <Fill
        d="M88 120 m-2 0 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 M112 120 m-2 0 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0"
        fill={RED}
        delay={1}
      />
      <Ink
        d="M94 152 h12 M100 130 l-2 12 h4"
        stroke={PAPER}
        strokeWidth={2.2}
        delay={0.9}
      />
      <Ink
        d="M76 60 l4 40 M92 54 v42 M108 54 v42 M124 60 l-4 40"
        strokeWidth={1.4}
        delay={0.7}
      />
    </Art>
  )
}

/** Retrato de Raizō: careca com coque, faixa na testa e barba longa. */
export function RaizoBust() {
  return (
    <Art viewBox="0 0 200 240" label="Retrato do ferreiro Raizō">
      <Fill
        d="M30 240 q8 -50 70 -58 q62 8 70 58Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={3}
        delay={0.1}
      />
      <Ink
        d="M62 104 q-4 -54 38 -56 q42 2 38 56 q0 56 -38 66 q-38 -10 -38 -66"
        strokeWidth={3}
        delay={0.2}
      />
      <Ink d="M96 48 v-14 m-8 8 h16" strokeWidth={4} delay={0.4} />
      <Fill
        d="M60 86 h80 v10 h-80Z"
        fill={RED}
        stroke={INK}
        strokeWidth={2}
        delay={0.5}
      />
      <Ink d="M140 90 l16 -6 l-4 14" strokeWidth={2.5} delay={0.7} />
      <Fill
        d="M62 104 q-4 -54 38 -56 q-16 30 -8 56 q-6 40 8 66 q-38 -10 -38 -66Z"
        fill="url(#tone)"
        delay={0.45}
      />
      <Fill
        d="M72 106 q12 -12 24 -2 l-4 4 q-10 -6 -18 2Z M104 104 q12 -10 24 2 l-2 4 q-10 -8 -18 -2Z"
        delay={0.8}
      />
      <Ink
        d="M80 122 q6 3 12 0 M108 122 q6 3 12 0 M72 132 l8 4 M128 132 l-8 4 M84 74 q16 -6 32 0"
        strokeWidth={2}
        delay={0.85}
      />
      <Fill
        d="M76 140 q24 12 48 0 q4 50 -24 90 q-28 -40 -24 -90Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.5}
        delay={0.6}
      />
      <Ink
        d="M88 156 q4 30 8 50 M100 152 v62 M112 156 q-4 30 -8 50"
        strokeWidth={1.5}
        delay={0.9}
      />
    </Art>
  )
}
