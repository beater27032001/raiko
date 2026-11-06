import {
  Bubble,
  Narration,
  Page,
  Panel,
  Sfx,
  SpeedLines,
  Tone,
} from '@molecules/manga'

export function Page1() {
  return (
    <Page number={1} template="1fr / 1fr">
      <Panel>
        <SpeedLines />
        <Tone style={{ opacity: 0.5 }} />
        <Sfx
          size="clamp(40px,8vh,84px)"
          rotate={-6}
          style={{ right: '6%', top: '6%' }}
        >
          ゴロゴロ
        </Sfx>
        <Narration style={{ left: 12, top: '34%' }}>
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

export function Page2() {
  return (
    <Page number={2} template="1fr 1.1fr 1.3fr / 1fr">
      <Panel>
        <Tone />
        <Narration style={{ right: 10, bottom: 10 }}>Kaito olhou.</Narration>
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

export function Page3() {
  return (
    <Page number={3} template="1fr / 1fr">
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

export function Page4() {
  return (
    <Page number={4} template="1fr 1.25fr 1fr / 1fr 1fr">
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

export function Page5() {
  return (
    <Page number={5} template="1fr / 1fr">
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
          href="#elenco"
          className="relative border-[2.5px] border-ink bg-red px-[18px] py-2.5 font-black text-paper no-underline shadow-[4px_4px_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
        >
          Conheça o elenco ↓
        </a>
      </Panel>
    </Page>
  )
}
