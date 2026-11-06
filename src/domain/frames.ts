// Sequência da capa: 72 quadros desenhados a partir do progresso do scroll.
export const FRAME_COUNT = 72

export type Pt = [number, number]

/** Gerador pseudoaleatório com semente (mulberry32): a mesma cena em todo navegador. */
export function prng(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export interface SpeedLine {
  angle: number
  inner: number
  width: number
  /** em que momento a linha aparece (0 a 1) */
  appear: number
}

export interface Scene {
  width: number
  height: number
  center: Pt
  lines: SpeedLine[]
  bolt: Pt[]
  branches: { from: number; pts: Pt[] }[]
}

/** Monta a cena para um tamanho de tela: linhas de velocidade, o raio e os galhos. */
export function buildScene(width: number, height: number): Scene {
  const r = prng(7)
  const lines = Array.from({ length: 220 }, () => ({
    angle: r() * Math.PI * 2,
    inner: 0.2 + r() * 0.32,
    width: 0.6 + r() * 3.4,
    appear: r(),
  }))
  const r2 = prng(23)
  const center: Pt = [width * 0.56, height * 0.46]
  const [cx, cy] = center
  const bolt: Pt[] = [[cx + width * 0.18, -20]]
  const segments = 9
  for (let k = 1; k <= segments; k++) {
    const t = k / segments
    bolt.push([
      cx + width * 0.18 * (1 - t) + (r2() - 0.5) * width * 0.12 * (1 - t * 0.6),
      -20 + (cy + 20) * t,
    ])
  }
  bolt[bolt.length - 1] = center
  const branches = [2, 4, 6].map((from) => {
    const [bx, by] = bolt[from]
    const dir = r2() > 0.5 ? 1 : -1
    const pts: Pt[] = [[bx, by]]
    for (let j = 1; j < 4; j++)
      pts.push([
        bx + dir * j * width * 0.035 + (r2() - 0.5) * 20,
        by + j * height * 0.045,
      ])
    return { from, pts }
  })
  return { width, height, center, lines, bolt, branches }
}

const clamp01 = (v: number) => Math.max(0, Math.min(1, v))
const easeOut = (t: number) => 1 - (1 - t) ** 3

/** Quadro (0 a 71) para um progresso de scroll de 0 a 1. */
export const frameAt = (progress: number) =>
  Math.round(clamp01(progress) * (FRAME_COUNT - 1))

/** Quanto de cada elemento já entrou no quadro t (0 a 1). */
export function timing(t: number) {
  const bolt = easeOut(clamp01((t - 0.05) / 0.5))
  return {
    linesVisible: 0.2 + 0.8 * easeOut(t),
    linesPull: 1 - t * 0.35,
    linesWiden: 1 + t * 1.5,
    sun: 0.1 + 0.2 * easeOut(clamp01((t - 0.15) / 0.6)),
    bolt,
    branch: (from: number, segments: number) =>
      bolt * segments > from ? clamp01((t - 0.25 - from * 0.03) / 0.3) : 0,
    slash: easeOut(clamp01((t - 0.78) / 0.2)),
  }
}

export const frameLabel = (index: number) =>
  `QUADRO ${String(index + 1).padStart(2, '0')} / ${FRAME_COUNT}`
