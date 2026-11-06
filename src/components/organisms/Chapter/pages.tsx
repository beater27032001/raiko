import { MioStanding, SparkHand } from '@molecules/art/figures'
import {
  Forge,
  Grip,
  PowerLines,
  Puddle,
  RiceBike,
  Stairs,
  SwordInStone,
  Torii,
  Village,
} from '@molecules/art/scenes'
import {
  Bubble,
  Narration,
  Page,
  Panel,
  Sfx,
  SpeedLines,
  Tone,
} from '@molecules/manga'

/** 1 · A vila na tempestade e o título do capítulo. */
export function Page1() {
  return (
    <Page number={1} template="1fr / 1fr">
      <Panel>
        <Village />
        <Sfx
          size="clamp(40px,8vh,84px)"
          rotate={-6}
          style={{ right: '6%', top: '6%' }}
        >
          ゴロゴロ
        </Sfx>
        <Narration style={{ left: 12, top: '30%' }}>
          Na vila de Kumoyama, ninguém olha para cima durante as tempestades.
        </Narration>
        <div className="absolute inset-x-0 bottom-0 z-[2] border-t-[3px] border-ink bg-paper p-4">
          <div className="text-[13px] font-black tracking-[.1em]">
            第一話 · CAPÍTULO 1
          </div>
          <h2 className="m-0 mt-[.15em] font-display text-[clamp(24px,4.2vh,40px)] leading-none font-normal">
            O céu rachou
          </h2>
        </div>
      </Panel>
    </Page>
  )
}

/** 2 · Kaito e a última entrega da noite. */
export function Page2() {
  return (
    <Page number={2} template="1fr 1.2fr 0.9fr / 1fr">
      <Panel>
        <RiceBike />
        <Narration style={{ left: 8, top: 8 }}>
          Kaito Arashi, 16 anos. Entrega arroz desde os doze.
        </Narration>
      </Panel>
      <Panel>
        <Stairs />
        <Bubble style={{ right: '6%', top: '10%' }}>
          Trezentos degraus…
          <br />
          numa tempestade.
        </Bubble>
      </Panel>
      <Panel>
        <Puddle />
        <Sfx
          size="clamp(30px,5.5vh,56px)"
          rotate={-4}
          style={{ left: '6%', bottom: '10%' }}
        >
          ザァァ
        </Sfx>
      </Panel>
    </Page>
  )
}

/** 3 · O santuário e a espada presa na pedra. */
export function Page3() {
  return (
    <Page number={3} template="1.3fr 1fr / 1fr 1fr">
      <Panel style={{ gridColumn: '1 / -1' }}>
        <Torii />
        <Bubble style={{ left: '6%', top: '8%' }}>
          Entrega do arroz!
          <br />
          …Tem alguém aí?
        </Bubble>
      </Panel>
      <Panel>
        <SwordInStone />
        <Sfx
          size="clamp(26px,4.5vh,44px)"
          rotate={8}
          style={{ right: '6%', top: '8%' }}
        >
          ジジ…
        </Sfx>
      </Panel>
      <Panel>
        <Tone />
        <Narration style={{ left: 8, bottom: 8 }}>
          No altar, uma espada presa à pedra. E ela estava vibrando.
        </Narration>
      </Panel>
    </Page>
  )
}

/** 4 · Kaito olha para cima. */
export function Page4() {
  return (
    <Page number={4} template="1fr 1.1fr 1.3fr / 1fr">
      <Panel>
        <Tone />
        <Narration style={{ right: 10, bottom: 10 }}>
          Kaito olhou para cima.
        </Narration>
      </Panel>
      <Panel>
        <SpeedLines />
        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 300 120"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <path
            d="M40 64 Q150 -6 262 58 Q150 112 40 64Z"
            fill="#fbfbf8"
            stroke="#0d0d0d"
            strokeWidth="5"
          />
          <circle cx="152" cy="60" r="34" fill="#0d0d0d" />
          <circle
            cx="152"
            cy="60"
            r="20"
            fill="none"
            stroke="#fbfbf8"
            strokeWidth="2"
            strokeDasharray="3 4"
          />
          <circle cx="140" cy="48" r="9" fill="#fbfbf8" />
          <circle cx="166" cy="72" r="4" fill="#fbfbf8" />
          <path
            d="M30 50 Q150 -24 272 44"
            fill="none"
            stroke="#0d0d0d"
            strokeWidth="7"
          />
        </svg>
      </Panel>
      <Panel dark>
        <SpeedLines light />
        <Sfx
          size="clamp(48px,9vh,96px)"
          rotate={8}
          style={{ right: '8%', top: '16%' }}
        >
          ピカッ
        </Sfx>
      </Panel>
    </Page>
  )
}

/** 5 · O raio. */
export function Page5() {
  return (
    <Page number={5} template="1fr / 1fr">
      <Panel>
        <SpeedLines />
        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 200 286"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <circle cx="112" cy="178" r="56" fill="#e3262e" />
          <polyline
            points="92,-5 120,60 98,72 132,128 106,138 116,178"
            fill="none"
            stroke="#0d0d0d"
            strokeWidth="16"
            strokeLinejoin="miter"
          />
          <polyline
            points="92,-5 120,60 98,72 132,128 106,138 116,178"
            fill="none"
            stroke="#fbfbf8"
            strokeWidth="6"
            strokeLinejoin="miter"
          />
        </svg>
        <Sfx
          red
          size="clamp(56px,11vh,120px)"
          rotate={-10}
          style={{ left: '5%', top: '8%' }}
        >
          ドォン!!
        </Sfx>
        <Bubble style={{ left: '12%', bottom: '12%' }}>
          …está
          <br />
          quente.
        </Bubble>
      </Panel>
    </Page>
  )
}

/** 6 · Depois do raio, ele passa a ouvir a eletricidade. */
export function Page6() {
  return (
    <Page number={6} template="1fr 1.25fr / 1fr">
      <Panel>
        <SparkHand />
        <Narration style={{ right: 8, top: 8 }}>
          Ele acordou com a chuva no rosto. E com um zumbido.
        </Narration>
      </Panel>
      <Panel>
        <PowerLines />
        <Sfx
          size="clamp(34px,6.5vh,64px)"
          rotate={-6}
          style={{ left: '6%', top: '30%' }}
        >
          ブーン
        </Sfx>
        <Bubble style={{ right: '6%', top: '30%' }}>
          Que barulho
          <br />é esse?!
        </Bubble>
      </Panel>
    </Page>
  )
}

/** 7 · Mio aparece. */
export function Page7() {
  return (
    <Page number={7} template="1fr 1.25fr 1fr / 1fr 1fr">
      <Panel style={{ gridColumn: '1 / -1' }}>
        <Tone />
        <Bubble style={{ right: '8%', top: '14%' }}>
          Não toque
          <br />
          na espada.
        </Bubble>
        <Narration style={{ left: 8, bottom: 8 }}>
          Mio Kurogane, guardiã do santuário.
        </Narration>
      </Panel>
      <Panel dark style={{ gridColumn: '1 / -1' }}>
        <SpeedLines light />
        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 300 160"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <g transform="rotate(-14 150 80)">
            <rect x="40" y="76" width="190" height="8" fill="#fbfbf8" />
            <polygon points="230,76 262,80 230,84" fill="#fbfbf8" />
            <rect x="26" y="70" width="10" height="20" fill="#e3262e" />
            <rect x="0" y="75" width="26" height="10" fill="#fbfbf8" />
            <g stroke="#0d0d0d" strokeWidth="2">
              <line x1="6" y1="75" x2="10" y2="85" />
              <line x1="13" y1="75" x2="17" y2="85" />
              <line x1="20" y1="75" x2="24" y2="85" />
            </g>
          </g>
        </svg>
        <Sfx
          size="clamp(34px,6.5vh,64px)"
          rotate={-8}
          style={{ left: '6%', top: '6%' }}
        >
          キィン
        </Sfx>
      </Panel>
      <Panel>
        <Bubble style={{ left: '10%', top: '18%' }}>Que espada?</Bubble>
      </Panel>
      <Panel>
        <SpeedLines />
        <Sfx
          red
          size="clamp(30px,5.5vh,56px)"
          rotate={6}
          style={{ right: '10%', top: '22%' }}
        >
          ドクン
        </Sfx>
        <Narration style={{ left: 6, bottom: 6 }}>
          O coração dele bateu junto com o trovão.
        </Narration>
      </Panel>
    </Page>
  )
}

/** 8 · O confronto. */
export function Page8() {
  return (
    <Page number={8} template="1.5fr 1fr / 1fr 1fr">
      <Panel style={{ gridColumn: '1 / -1' }}>
        <SpeedLines />
        <MioStanding />
        <Bubble style={{ left: '5%', top: '10%' }}>
          A Raikō escolheu você.
          <br />
          Isso é um problema.
        </Bubble>
        <Sfx
          size="clamp(30px,5.5vh,56px)"
          rotate={10}
          style={{ right: '6%', top: '8%' }}
        >
          バッ
        </Sfx>
      </Panel>
      <Panel>
        <Tone up />
        <Bubble style={{ left: '8%', top: '14%' }}>
          Eu só vim
          <br />
          entregar o arroz!
        </Bubble>
      </Panel>
      <Panel dark>
        <SpeedLines light />
        <Narration style={{ left: 6, bottom: 6 }}>
          Mio Kurogane não costuma errar o primeiro golpe.
        </Narration>
      </Panel>
    </Page>
  )
}

/** 9 · Raizō, o ferreiro. */
export function Page9() {
  return (
    <Page number={9} template="1.3fr 1fr / 1fr">
      <Panel dark>
        <Forge />
        <Sfx
          size="clamp(30px,5.5vh,56px)"
          rotate={-8}
          style={{ left: '6%', top: '8%' }}
        >
          カン
        </Sfx>
        <Narration style={{ right: 8, bottom: 8 }}>
          Atrás do santuário, a forja que ninguém acendia havia séculos estava
          acesa.
        </Narration>
      </Panel>
      <Panel>
        <Tone />
        <Bubble style={{ left: '5%', top: '10%' }}>
          Trezentos anos esperando…
          <br />e ela escolhe um entregador.
        </Bubble>
        <Bubble style={{ right: '6%', bottom: '14%' }}>Mestre Raizō?!</Bubble>
      </Panel>
    </Page>
  )
}

/** 10 · A espada responde. */
export function Page10() {
  return (
    <Page number={10} template="1fr / 1fr">
      <Panel dark>
        <SpeedLines light />
        <Grip />
        <Sfx
          red
          size="clamp(56px,11vh,120px)"
          rotate={-6}
          style={{ left: '6%', top: '6%' }}
        >
          ゴゴゴ
        </Sfx>
        <Narration style={{ right: 10, bottom: 10 }}>
          A lâmina respondeu.
        </Narration>
      </Panel>
    </Page>
  )
}

/** 11 · Continua. */
export function Page11() {
  return (
    <Page number={11} template="1fr / 1fr">
      <Panel className="flex flex-col items-center justify-center gap-3.5 p-5 text-center">
        <Tone up />
        <span className="relative text-[13px] font-black tracking-[.14em] text-red">
          CONTINUA
        </span>
        <p className="relative m-0 font-display text-[clamp(28px,5vh,52px)] leading-none">
          Capítulo 2
          <br />A lâmina responde
        </p>
        <a
          href="#mundo"
          className="relative border-[2.5px] border-ink bg-red px-[18px] py-2.5 font-black text-paper no-underline shadow-[4px_4px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
        >
          Conheça o mundo ↓
        </a>
      </Panel>
    </Page>
  )
}
