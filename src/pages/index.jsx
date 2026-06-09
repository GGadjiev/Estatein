import Hero from '@/sections/Hero'
import GridCards from '@/sections/GridCards/index.js'
import Reviews from '@/sections/Reviews/index.js'
import Faq from '@/sections/Faq/index.js'
import { homeGridCards } from '@/constants/data.js'
import HomeProperties from '@/sections/HomeProperties/index.js'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <GridCards items={homeGridCards} />
      <HomeProperties />
      <Reviews />
      <Faq />
    </>
  )
}
