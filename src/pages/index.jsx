import Hero from '@/sections/Hero'
import GridCards from '@/sections/GridCards/index.js'
import { services } from '@/constants/homeData.js'
import Properties from '@/sections/Properties/index.js'
import Reviews from "@/sections/Reviews/index.js";
import Faq from "@/sections/Faq/index.js";

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <GridCards items={services} />
      <Properties />
      <Reviews />
      <Faq />
    </>
  )
}
