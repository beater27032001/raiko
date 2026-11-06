'use client'

import { Art, Fill, Ink, INK, PAPER, Rain, RED } from './Art'

/** Casa japonesa: corpo de papel, telhado curvo preto contornado de papel, janela acesa. */
function House({
  x,
  y,
  w,
  delay,
}: {
  x: number
  y: number
  w: number
  delay: number
}) {
  const h = w * 0.5
  const roof = `M${x - 8} ${y + 14} Q${x + w * 0.22} ${y + 8} ${x + w * 0.5} ${y - 16} Q${x + w * 0.78} ${y + 8} ${x + w + 8} ${y + 14} L${x + w + 2} ${y + 20} Q${x + w * 0.5} ${y + 4} ${x - 2} ${y + 20}Z`
  return (
    <>
      <Fill
        d={`M${x + 4} ${y + 16} h${w - 8} v${h} h${-(w - 8)}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.5}
        delay={delay}
      />
      <Fill
        d={`M${x + 4} ${y + 16} h${w - 8} v${h * 0.35} h${-(w - 8)}Z`}
        fill="url(#tone)"
        delay={delay + 0.1}
      />
      <Fill
        d={`M${x + w * 0.38} ${y + 22 + h * 0.3} h${w * 0.24} v${h * 0.4} h${-w * 0.24}Z`}
        fill={RED}
        stroke={INK}
        strokeWidth={2}
        delay={delay + 0.25}
      />
      <Ink
        d={`M${x + w * 0.5} ${y + 22 + h * 0.3} v${h * 0.4}`}
        strokeWidth={1.5}
        delay={delay + 0.3}
      />
      <Fill d={roof} stroke={PAPER} strokeWidth={1.5} delay={delay + 0.15} />
    </>
  )
}

/** Vila de Kumoyama à noite: montanha com o santuário no topo, arrozais, telhados e chuva. */
export function Village({ fit = 'slice' }: { fit?: 'slice' | 'meet' }) {
  return (
    <Art viewBox="0 0 300 420" fit={fit} align="xMidYMax">
      <Fill d="M0 0 H300 V260 H0Z" fill="url(#tone)" opacity={0.35} delay={0} />
      <Rain width={300} height={420} count={60} />
      <Fill
        d="M0 270 L55 200 L85 222 L150 110 L210 210 L245 186 L300 245 V420 H0Z"
        delay={0.1}
      />
      {/* arrozais em degraus na encosta */}
      <Ink
        d="M20 300 Q80 286 140 298 M10 318 Q90 302 170 318 M150 304 Q220 290 290 306 M120 324 Q210 308 300 326"
        stroke={PAPER}
        strokeWidth={1.2}
        delay={0.7}
      />
      {/* escadaria até o santuário */}
      <Ink
        d="M150 125 L140 160 L158 196 L138 236 L156 280"
        stroke={PAPER}
        strokeWidth={1.6}
        strokeDasharray="2 3"
        delay={0.8}
      />
      <Fill
        d="M136 102 h28 v4 h-28Z M140 108 h20 v2 h-20Z M142 108 h3 v13 h-3Z M155 108 h3 v13 h-3Z"
        fill={RED}
        delay={0.7}
      />
      <House x={12} y={338} w={74} delay={0.9} />
      <House x={110} y={352} w={86} delay={1.05} />
      <House x={212} y={334} w={76} delay={1.2} />
      <Fill d="M0 400 H300 V420 H0Z" delay={1.3} />
      <Ink
        d="M246 0 L230 38 L244 42 L222 96 L236 98 L226 124"
        strokeWidth={5}
        delay={0.3}
      />
      <Ink
        d="M246 0 L230 38 L244 42 L222 96 L236 98 L226 124"
        stroke={PAPER}
        strokeWidth={1.6}
        delay={0.35}
      />
    </Art>
  )
}

/** Kaito pedalando com os sacos de arroz na chuva. */
export function RiceBike() {
  return (
    <Art viewBox="0 0 300 160">
      <Rain width={300} height={160} count={30} />
      <Ink d="M0 146 H300" strokeWidth={2} />
      <Ink
        d="M118 128 m-22 0 a22 22 0 1 0 44 0 a22 22 0 1 0 -44 0"
        strokeWidth={3.5}
        delay={0.1}
      />
      <Ink
        d="M218 128 m-22 0 a22 22 0 1 0 44 0 a22 22 0 1 0 -44 0"
        strokeWidth={3.5}
        delay={0.2}
      />
      <Ink
        d="M118 128 L150 96 L196 96 L218 128 M150 96 L166 128 L196 96 M166 128 L118 128 M196 96 L204 80 L214 80"
        strokeWidth={3}
        delay={0.35}
      />
      {/* garupa com os sacos de arroz */}
      <Fill
        d="M92 72 q-4 -22 18 -24 h20 q20 2 16 24 q-2 22 -26 22 q-26 0 -28 -22Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.5}
        delay={0.6}
      />
      <Fill
        d="M70 88 q-2 -16 14 -18 h14 q16 2 12 18 q-2 16 -20 16 q-18 0 -20 -16Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.5}
        delay={0.65}
      />
      <text
        x="111"
        y="80"
        fontSize="20"
        fontWeight="900"
        textAnchor="middle"
        fill={RED}
      >
        米
      </text>
      {/* Kaito curvado na capa de chuva */}
      <Fill
        d="M160 52 q10 -18 30 -10 q14 8 8 24 l14 26 q-30 8 -52 -2Z"
        delay={0.8}
      />
      <Fill
        d="M196 30 m-12 0 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0"
        delay={0.85}
      />
      <Ink d="M192 60 L212 80" strokeWidth={5} delay={0.9} />
      <Ink d="M30 60 H80 M20 80 H64 M38 100 H70" strokeWidth={2} delay={1} />
    </Art>
  )
}

/** Os trezentos degraus até o santuário. */
export function Stairs() {
  const steps = Array.from({ length: 16 }, (_, i) => {
    const t = i / 15
    const y = 290 - t * 230
    const half = 70 - t * 58
    return `M${100 - half} ${y.toFixed(1)} H${100 + half}`
  })
  return (
    <Art viewBox="0 0 200 300" fit="slice">
      <Rain width={200} height={300} count={34} />
      <Fill d="M0 0 H200 V90 H0Z" fill="url(#tone)" opacity={0.5} delay={0} />
      <Fill
        d="M0 300 L30 60 L100 40 L170 60 L200 300Z"
        fill={PAPER}
        delay={0}
      />
      <Fill
        d="M0 300 L30 60 L48 300Z M200 300 L170 60 L152 300Z"
        fill="url(#hatch)"
        delay={0.15}
      />
      <Ink d="M30 300 L88 60 M170 300 L112 60" strokeWidth={3} />
      <Ink d={steps.join(' ')} strokeWidth={2} delay={0.2} />
      <Fill
        d="M86 36 h28 v4 h-28Z M89 42 h22 v2 h-22Z M91 42 h3 v16 h-3Z M106 42 h3 v16 h-3Z"
        fill={RED}
        delay={1}
      />
      <Fill
        d="M30 200 h10 v-14 h-10Z M160 200 h10 v-14 h-10Z M48 140 h7 v-10 h-7Z M145 140 h7 v-10 h-7Z"
        fill={RED}
        stroke={INK}
        strokeWidth={1.5}
        delay={1.1}
      />
      {/* Kaito pequeno lá embaixo, com o saco nas costas */}
      <Fill
        d="M96 252 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M90 260 h12 l3 22 h-18Z M102 258 q12 -2 12 10 q0 10 -10 10Z"
        delay={1.2}
      />
    </Art>
  )
}

/** O pé de Kaito batendo na poça do degrau: ondas e respingos. */
export function Puddle() {
  return (
    <Art viewBox="0 0 300 150" fit="slice">
      <Fill d="M0 0 H300 V150 H0Z" fill="url(#tone)" opacity={0.25} delay={0} />
      <Ink
        d="M40 112 Q150 92 260 112 Q150 132 40 112Z"
        strokeWidth={3}
        delay={0.1}
      />
      <Ink
        d="M80 112 Q150 100 220 112 Q150 124 80 112Z"
        strokeWidth={2}
        delay={0.3}
      />
      <Ink
        d="M118 112 Q150 106 182 112 Q150 118 118 112Z"
        strokeWidth={1.5}
        delay={0.45}
      />
      {/* coroa de respingos */}
      <Ink
        d="M150 104 V60 M136 104 L118 66 M164 104 L182 66 M126 106 L96 82 M174 106 L204 82"
        strokeWidth={2.5}
        delay={0.6}
      />
      <Fill
        d="M150 54 m-4 0 a4 6 0 1 0 8 0 a4 6 0 1 0 -8 0 M116 60 m-3 0 a3 5 0 1 0 6 0 a3 5 0 1 0 -6 0 M184 60 m-3 0 a3 5 0 1 0 6 0 a3 5 0 1 0 -6 0 M92 78 m-3 0 a3 4 0 1 0 6 0 a3 4 0 1 0 -6 0 M208 78 m-3 0 a3 4 0 1 0 6 0 a3 4 0 1 0 -6 0"
        delay={0.9}
      />
      {/* sola do tênis entrando por cima */}
      <Fill
        d="M120 0 h70 v30 q-4 18 -36 18 q-34 0 -34 -18Z"
        stroke={PAPER}
        strokeWidth={2}
        delay={0.2}
      />
      <Ink
        d="M128 36 h52 M132 42 h44"
        stroke={PAPER}
        strokeWidth={1.5}
        delay={0.5}
      />
    </Art>
  )
}

/** O portão torii do santuário na tempestade. */
export function Torii() {
  return (
    <Art viewBox="0 0 300 220" fit="slice">
      <Rain width={300} height={220} count={40} />
      <Fill d="M30 40 Q150 22 270 40 L276 54 Q150 36 24 54Z" delay={0.1} />
      <Fill
        d="M56 66 H244 V78 H56Z"
        fill={RED}
        stroke={INK}
        strokeWidth={3}
        delay={0.25}
      />
      <Fill
        d="M78 54 h18 l6 166 h-30Z M204 54 h18 l6 166 h-30Z"
        fill={RED}
        stroke={INK}
        strokeWidth={3}
        delay={0.35}
      />
      <Ink d="M100 92 Q150 106 200 92" strokeWidth={5} delay={0.6} />
      <Ink
        d="M118 98 l-4 10 l6 0 l-4 10 M150 101 l-4 10 l6 0 l-4 10 M182 98 l-4 10 l6 0 l-4 10"
        strokeWidth={2}
        delay={0.8}
      />
      <Ink d="M0 210 H300" strokeWidth={3} delay={0.2} />
    </Art>
  )
}

/** A espada Raikō presa na pedra, com a corda sagrada e o papel ritual. */
export function SwordInStone() {
  return (
    <Art viewBox="0 0 200 300">
      <Ink
        d="M100 28 L100 8 M80 40 L66 26 M120 40 L134 26 M74 70 L56 66 M126 70 L144 66"
        strokeWidth={2}
        delay={1.1}
      />
      {/* lâmina */}
      <Fill
        d="M96 40 h8 v170 h-8Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.5}
        delay={0.2}
      />
      <Ink d="M100 46 V204" strokeWidth={1} delay={0.5} />
      {/* guarda e cabo */}
      <Fill d="M100 40 m-16 0 a16 6 0 1 0 32 0 a16 6 0 1 0 -32 0" delay={0.3} />
      <Fill d="M95 -2 h10 v40 h-10Z" delay={0.3} />
      <Ink
        d="M95 4 l10 6 M105 4 l-10 6 M95 14 l10 6 M105 14 l-10 6 M95 24 l10 6 M105 24 l-10 6"
        stroke={PAPER}
        strokeWidth={1.2}
        delay={0.6}
      />
      <Ink
        d="M100 38 q-14 10 -10 26"
        stroke={RED}
        strokeWidth={3}
        delay={0.8}
      />
      {/* pedra */}
      <Fill
        d="M30 300 Q38 214 100 206 Q166 212 172 300Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={3}
        delay={0.1}
      />
      <Fill
        d="M128 214 Q166 220 172 300 H124 Q140 260 128 214Z"
        fill="url(#hatch)"
        delay={0.7}
      />
      <Ink
        d="M58 272 l14 -10 l6 12 M150 284 l-8 -12"
        strokeWidth={1.5}
        delay={0.75}
      />
      {/* corda e papéis */}
      <Ink d="M42 236 Q100 254 160 236" strokeWidth={6} delay={0.9} />
      <Ink
        d="M70 244 l-4 12 l8 0 l-4 12 M100 248 l-4 12 l8 0 l-4 12 M130 244 l-4 12 l8 0 l-4 12"
        strokeWidth={2}
        delay={1}
      />
    </Art>
  )
}

/** Postes e fios zumbindo; Kaito tapando os ouvidos. */
export function PowerLines() {
  return (
    <Art viewBox="0 0 300 200" fit="slice">
      <Ink
        d="M50 200 V20 M250 200 V30 M30 34 H70 M230 44 H270"
        strokeWidth={4}
      />
      <Ink
        d="M34 34 Q150 80 234 44 M66 34 Q150 96 266 44 M50 60 Q150 110 250 70"
        strokeWidth={1.5}
        delay={0.3}
      />
      <Ink
        d="M36 26 l-6 -8 l6 2 l-4 -8 M266 36 l6 -8 l-6 2 l4 -8"
        stroke={RED}
        strokeWidth={2}
        delay={0.9}
      />
      {/* Kaito embaixo, mãos nos ouvidos */}
      <Fill
        d="M150 150 m-12 0 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M134 164 h32 l6 36 h-44Z"
        delay={0.6}
      />
      <Fill
        d="M130 142 q-4 10 6 14 l4 -6Z M170 142 q4 10 -6 14 l-4 -6Z"
        delay={0.7}
      />
      <Ink
        d="M118 140 q-8 6 0 12 M110 136 q-12 10 0 20 M182 140 q8 6 0 12 M190 136 q12 10 0 20"
        strokeWidth={2}
        delay={1}
      />
    </Art>
  )
}

/** Raizō na forja: fogo vermelho, bigorna e o martelo erguido. */
export function Forge() {
  return (
    <Art viewBox="0 0 300 200" fit="slice">
      <Fill d="M0 0 H300 V200 H0Z" delay={0} />
      <Fill
        d="M30 200 Q30 120 70 96 Q64 130 92 128 Q86 100 110 84 Q118 132 140 200Z"
        fill={RED}
        delay={0.3}
      />
      <Fill
        d="M120 152 h70 l-8 12 h-54Z M138 164 h34 v18 h-34Z M126 182 h58 v10 h-58Z"
        fill={PAPER}
        delay={0.4}
      />
      {/* Raizō: careca com coque, barba longa */}
      <Ink
        d="M232 70 m-16 0 a16 16 0 1 0 32 0 a16 16 0 1 0 -32 0"
        stroke={PAPER}
        strokeWidth={2.5}
        delay={0.5}
      />
      <Ink
        d="M232 52 v-8 m-4 4 h8"
        stroke={PAPER}
        strokeWidth={3}
        delay={0.7}
      />
      <Ink
        d="M222 80 q10 40 -4 64 M242 80 q2 36 14 60 M232 84 q2 40 0 66"
        stroke={PAPER}
        strokeWidth={2}
        delay={0.8}
      />
      <Ink
        d="M214 96 L188 60 L176 66 M188 60 L196 48"
        stroke={PAPER}
        strokeWidth={3.5}
        delay={0.9}
      />
      <Ink
        d="M150 140 l-10 -18 M162 136 l2 -22 M174 140 l12 -16 M140 128 l-16 -6"
        stroke={RED}
        strokeWidth={2}
        delay={1.2}
      />
    </Art>
  )
}

/** A mão de Kaito fechando no cabo, com o raio saindo da lâmina. */
export function Grip() {
  return (
    <Art viewBox="0 0 300 200" fit="slice">
      <Ink
        d="M0 100 L60 92 L50 110 L120 98"
        stroke={PAPER}
        strokeWidth={3}
        delay={0.9}
      />
      <Ink
        d="M300 104 L236 96 L250 116 L180 104"
        stroke={PAPER}
        strokeWidth={3}
        delay={1}
      />
      <Fill d="M60 88 H240 V112 H60Z" fill={PAPER} delay={0.1} />
      <Ink
        d="M70 88 l14 24 M84 88 l-14 24 M98 88 l14 24 M112 88 l-14 24 M126 88 l14 24 M140 88 l-14 24"
        strokeWidth={1.8}
        delay={0.3}
      />
      {/* dedos fechando */}
      <Fill
        d="M150 70 q10 -6 20 2 l2 46 q-10 8 -22 0Z M174 72 q10 -6 20 2 l2 44 q-10 8 -22 0Z M198 76 q10 -4 18 4 l0 38 q-8 6 -18 0Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.5}
        delay={0.4}
      />
      <Fill
        d="M148 112 q30 18 70 4 l4 24 q-40 16 -76 -4Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.5}
        delay={0.5}
      />
      <Ink d="M156 84 h8 M180 86 h8 M204 90 h6" strokeWidth={1.5} delay={0.7} />
    </Art>
  )
}

/** Pergaminho da lenda: a espada sendo forjada sob o raio. */
export function LegendScroll() {
  return (
    <Art viewBox="0 0 300 200">
      <Fill
        d="M30 30 H270 V170 H30Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.5}
        delay={0.1}
      />
      <Fill d="M20 22 h14 v156 h-14Z M266 22 h14 v156 h-14Z" delay={0.2} />
      <Ink d="M150 40 L136 80 L152 84 L130 132" strokeWidth={4} delay={0.4} />
      <Ink
        d="M150 40 L136 80 L152 84 L130 132"
        stroke={PAPER}
        strokeWidth={1.4}
        delay={0.45}
      />
      <Ink d="M80 150 L210 112" strokeWidth={3} delay={0.6} />
      <Fill d="M208 104 m-6 0 a6 3 0 1 0 12 0 a6 3 0 1 0 -12 0" delay={0.8} />
      <Fill
        d="M150 126 m-22 0 a22 22 0 1 0 44 0 a22 22 0 1 0 -44 0"
        fill={RED}
        delay={0.5}
        opacity={0.9}
      />
      <text
        x="244"
        y="70"
        fontSize="22"
        fontWeight="900"
        textAnchor="middle"
        fill={INK}
        style={{ writingMode: 'vertical-rl' }}
      >
        雷光
      </text>
    </Art>
  )
}

/** Brasão da linhagem Kurogane: um raio dentro do losango de ferro. */
export function ClanCrest() {
  return (
    <Art viewBox="0 0 200 200">
      <Ink
        d="M100 100 m-80 0 a80 80 0 1 0 160 0 a80 80 0 1 0 -160 0"
        strokeWidth={5}
      />
      <Ink
        d="M100 100 m-66 0 a66 66 0 1 0 132 0 a66 66 0 1 0 -132 0"
        strokeWidth={2}
        delay={0.3}
      />
      <Fill d="M100 42 L158 100 L100 158 L42 100Z" delay={0.5} />
      <Fill
        d="M108 58 L86 104 L104 104 L90 144 L122 92 L104 92 L118 58Z"
        fill={RED}
        delay={0.9}
      />
    </Art>
  )
}
