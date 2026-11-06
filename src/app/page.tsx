import { Cast } from '@organisms/Cast'
import { Chapter } from '@organisms/Chapter'
import { Cover } from '@organisms/Cover'
import { Footer } from '@organisms/Footer'
import { Release } from '@organisms/Release'
import { MotionProvider } from '@providers/MotionProvider'
import { SmoothScroll } from '@providers/SmoothScroll'

export default function Home() {
  return (
    <MotionProvider>
      <SmoothScroll>
        <Cover />
        <Chapter />
        <Cast />
        <Release />
        <Footer />
      </SmoothScroll>
    </MotionProvider>
  )
}
