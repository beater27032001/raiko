// Gera os prints do README: npm run build && npm run screenshots
import { spawn } from 'node:child_process'

import { chromium, type Page } from 'playwright'

interface Shot {
  name: string
  width: number
  height: number
  /** Posição de rolagem, calculada na página. */
  scroll?: (page: Page) => Promise<void>
}

const to = (expr: string) => async (page: Page) => {
  await page.evaluate(
    (e) => window.scrollTo(0, Function(`return ${e}`)()),
    expr,
  )
  await page.waitForTimeout(1800)
}
const COVER_END = 'document.querySelector("section").offsetHeight - innerHeight'
const CHAPTER = (f: number) =>
  `document.querySelector("#capitulo").offsetTop + (document.querySelector("#capitulo").offsetHeight - innerHeight) * ${f}`

const SHOTS: Shot[] = [
  { name: 'desktop', width: 1440, height: 900, scroll: to(COVER_END) },
  {
    name: 'desktop-capitulo',
    width: 1440,
    height: 900,
    scroll: to(CHAPTER(0.62)),
  },
  {
    name: 'desktop-elenco',
    width: 1440,
    height: 900,
    scroll: to('document.querySelector("#elenco").offsetTop - 40'),
  },
  {
    name: 'tablet',
    width: 820,
    height: 1180,
    scroll: to(`(${COVER_END}) * 0.6`),
  },
  { name: 'mobile', width: 390, height: 844, scroll: to(COVER_END) },
  {
    name: 'mobile-capitulo',
    width: 390,
    height: 844,
    scroll: to(CHAPTER(0.1)),
  },
]

const server = spawn('node_modules/.bin/next', ['start', '-p', '4173'])
await new Promise((resolve, reject) => {
  server.stdout.on('data', (d) => String(d).includes('Ready') && resolve(null))
  server.on('exit', (code) => reject(new Error(`next start saiu com ${code}`)))
})
const browser = await chromium.launch()
const errors: string[] = []

for (const shot of SHOTS) {
  const page = await browser.newPage({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: 2,
  })
  page.on('pageerror', (e) => errors.push(`${shot.name}: ${e.message}`))
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1800)
  if (shot.scroll) await shot.scroll(page)
  await page.screenshot({ path: `docs/${shot.name}.png` })
  await page.close()
}

await browser.close()
server.kill()
if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log('prints salvos em docs/')
