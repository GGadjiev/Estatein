import GridCards from '@/sections/GridCards/index.js'
import {
  servicesGridCards,
  servicesGridManagement,
  servicesGridValue,
  servicesWideCards,
} from '@/constants/data.js'
import PageIntro from '@/sections/PageIntro/index.js'
import ServicesGrid from '@/sections/ServicesGrid/index.js'
import ServicesInvestment from '@/sections/ServicesInvestment/index.js'

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
      <ServicesGrid
        title="Unlock Property Value"
        description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
        cards={servicesGridManagement}
        wideCard={servicesWideCards.value}
      />
      <ServicesGrid
        title="Effortless Property Management"
        description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
        cards={servicesGridValue}
        wideCard={servicesWideCards.management}
      />
      <ServicesInvestment />
    </>
  )
}
