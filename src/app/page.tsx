import { Cover } from '@organisms/Cover'
import { MotionProvider } from '@providers/MotionProvider'
import { SmoothScroll } from '@providers/SmoothScroll'

export default function Home() {
  return (
    <MotionProvider>
      <SmoothScroll>
        <Cover />
      </SmoothScroll>
    </MotionProvider>
  )
}
