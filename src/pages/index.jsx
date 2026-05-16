import Hero from '@/sections/Hero'
import Button from '@/components/Button'
import Field from '@/components/Field'
import GridCards from '@/sections/GridCards/index.js'
import { services } from '@/constants/homeData.js'

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
    </>
  )
}
