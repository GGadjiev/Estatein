import Hero from '@/sections/Hero'
import GridCards from '@/sections/GridCards/index.js'
import Properties from '@/sections/Properties/index.js'
import Reviews from '@/sections/Reviews/index.js'
import Faq from '@/sections/Faq/index.js'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <GridCards />
      <Properties />
      <Reviews />
      <Faq />
    </>
  )
}
