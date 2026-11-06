import { ArtDefs } from '@molecules/art/Art'
import { Cast } from '@organisms/Cast'
import { Chapter } from '@organisms/Chapter'
import { Cover } from '@organisms/Cover'
import { Footer } from '@organisms/Footer'
import { Release } from '@organisms/Release'
import { Synopsis } from '@organisms/Synopsis'
import { World } from '@organisms/World'
import { MotionProvider } from '@providers/MotionProvider'
import { SmoothScroll } from '@providers/SmoothScroll'

export default function Home() {
  return (
    <MotionProvider>
      <SmoothScroll>
        <ArtDefs />
        <Cover />
        <Synopsis />
        <Chapter />
        <World />
        <Cast />
        <Release />
        <Footer />
      </SmoothScroll>
    </MotionProvider>
  )
}
