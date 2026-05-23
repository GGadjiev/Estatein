import Hero from '@/sections/Hero'
import GridCards from '@/sections/GridCards/index.js'
import { services } from '@/constants/homeData.js'
import Properties from '@/sections/Properties/index.js'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      {/*<div className="container">*/}
      {/*  <h1>Home page</h1>*/}
      {/*  <Button>Button</Button>*/}
      {/*  <Button href="/">Link</Button>*/}

      {/*</div>*/}
      <Hero />
      <GridCards items={services} />
      <Properties />
    </>
  )
}
