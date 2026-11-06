// Rode com: npm run check
import assert from 'node:assert/strict'

import {
  buildScene,
  FRAME_COUNT,
  frameAt,
  frameLabel,
  prng,
  timing,
} from './frames.ts'

const a = prng(7)
const b = prng(7)
assert.equal(a(), b(), 'mesma semente, mesma sequência')

const scene = buildScene(1440, 900)
assert.equal(scene.lines.length, 220)
assert.deepEqual(
  scene.bolt.at(-1),
  scene.center,
  'o raio termina no centro do sol',
)
assert.equal(scene.bolt[0][1], -20, 'o raio nasce acima da tela')
assert.deepEqual(buildScene(1440, 900).bolt, scene.bolt, 'cena determinística')

assert.equal(frameAt(0), 0)
assert.equal(frameAt(1), FRAME_COUNT - 1)
assert.equal(
  frameAt(2),
  FRAME_COUNT - 1,
  'progresso acima de 1 fica no último quadro',
)

const start = timing(0)
const end = timing(1)
assert.equal(start.bolt, 0, 'no primeiro quadro o raio ainda não caiu')
assert.equal(start.slash, 0)
assert.equal(end.bolt, 1)
assert.equal(end.slash, 1, 'no último quadro a lâmina já cortou a tela')
assert.ok(end.sun > start.sun, 'o sol cresce')
assert.equal(
  timing(0.1).branch(6, 9),
  0,
  'galho só nasce depois que o raio passa por ele',
)
assert.equal(frameLabel(0), 'QUADRO 01 / 72')
console.log('frames ok')
