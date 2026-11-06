import { FRAME_COUNT, timing, type Pt, type Scene } from '@domain/frames'

const PAPER = '#fbfbf8'
const INK = '#0d0d0d'
const RED = '#e3262e'

/** Traça uma fração de uma linha quebrada (o raio "caindo"). */
function partial(
  ctx: CanvasRenderingContext2D,
  pts: Pt[],
  fraction: number,
  width: number,
  color: string,
) {
  const upto = fraction * (pts.length - 1)
  ctx.beginPath()
  ctx.moveTo(pts[0][0], pts[0][1])
  for (let k = 1; k <= Math.ceil(upto); k++) {
    const f = Math.min(1, upto - (k - 1))
    const [ax, ay] = pts[k - 1]
    const [bx, by] = pts[k]
    ctx.lineTo(ax + (bx - ax) * f, ay + (by - ay) * f)
  }
  ctx.lineWidth = width
  ctx.strokeStyle = color
  ctx.lineJoin = 'miter'
  ctx.stroke()
}

/** Desenha o quadro `index` da capa: linhas de velocidade, sol, raio e o corte da lâmina. */
export function drawFrame(
  ctx: CanvasRenderingContext2D,
  scene: Scene,
  index: number,
) {
  const { width: W, height: H, center, lines, bolt, branches } = scene
  const [cx, cy] = center
  const M = Math.max(W, H)
  const tm = timing(index / (FRAME_COUNT - 1))

  ctx.fillStyle = PAPER
  ctx.fillRect(0, 0, W, H)

  ctx.fillStyle = INK
  for (const l of lines) {
    if (l.appear > tm.linesVisible) continue
    const inner = M * l.inner * tm.linesPull
    const outer = M * 1.2
    const ca = Math.cos(l.angle)
    const sa = Math.sin(l.angle)
    const w = l.width * tm.linesWiden
    ctx.beginPath()
    ctx.moveTo(cx + ca * inner, cy + sa * inner)
    ctx.lineTo(cx + ca * outer - sa * w, cy + sa * outer + ca * w)
    ctx.lineTo(cx + ca * outer + sa * w, cy + sa * outer - ca * w)
    ctx.fill()
  }

  ctx.fillStyle = RED
  ctx.beginPath()
  ctx.arc(cx, cy, Math.min(W, H) * tm.sun, 0, Math.PI * 2)
  ctx.fill()

  if (tm.bolt > 0) {
    partial(ctx, bolt, tm.bolt, Math.max(10, W * 0.014), INK)
    partial(ctx, bolt, tm.bolt, Math.max(3.5, W * 0.005), PAPER)
  }
  for (const b of branches) {
    const f = tm.branch(b.from, bolt.length - 1)
    if (f <= 0) continue
    partial(ctx, b.pts, f, 7, INK)
    partial(ctx, b.pts, f, 2.2, PAPER)
  }

  if (tm.slash > 0) {
    const w = 6 + tm.slash * Math.min(W, H) * 0.05
    ctx.save()
    ctx.translate(W * 0.5, H * 0.5)
    ctx.rotate(-0.42)
    ctx.fillStyle = INK
    ctx.fillRect(-M, -w / 2 - 5, M * 2 * tm.slash, w + 10)
    ctx.fillStyle = PAPER
    ctx.fillRect(-M, -w / 2, M * 2 * tm.slash, w)
    ctx.restore()
  }
}
