import type { Metadata, Viewport } from 'next'
import { Dela_Gothic_One, Zen_Kaku_Gothic_New } from 'next/font/google'

import './globals.css'

const display = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dela',
})
const body = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-zen',
})

export const metadata: Metadata = {
  title: 'Raikō 雷光',
  description:
    'Raikō: o relâmpago escolheu um herdeiro. Ele não queria ser escolhido. Leia o capítulo 1 da direita para a esquerda.',
}

export const viewport: Viewport = {
  themeColor: '#fbfbf8',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
