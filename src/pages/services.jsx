import GridCards from '@/sections/GridCards/index.js'
import { servicesGridCards } from '@/constants/data.js'
import PageIntro from '@/sections/PageIntro/index.js'
import ServicesValue from '@/sections/ServicesValue/index.js'

export const metadata = {
  title: 'Services',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">Services page</h1>
      <PageIntro
        title="Elevate Your Real Estate Experience"
        description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
      />
      <GridCards items={servicesGridCards} />
      <ServicesValue />
    </>
  )
}
