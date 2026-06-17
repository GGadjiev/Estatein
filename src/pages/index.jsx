import HomeHero from '@/sections/HomeHero'
import GridCards from '@/sections/GridCards/index.js'
import Reviews from '@/sections/Reviews/index.js'
import Faq from '@/sections/Faq/index.js'
import { homeGridCards } from '@/constants/data.js'
import Properties from '@/sections/Properties/index.js'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <HomeHero id="home-hero" />
      <GridCards items={homeGridCards} id="home-grid-cards" />
      <Properties
        id="home-properties"
        title="Featured Properties"
        titleId="home-properties-title"
        description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
        sliderId="home-properties"
      />
      <Reviews id="home-reviews" />
      <Faq id="home-faq" />
    </>
  )
}
