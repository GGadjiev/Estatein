import './AboutClients.scss'
import { clients } from '@/constants/data.js'
import SliderSection from '@/layouts/SliderSection/index.js'
import ClientCard from '@/components/ClientCard/index.js'

export default () => {
  return (
    <SliderSection
      className="about-clients"
      title="Our Valued Clients"
      titleId="about-clients-title"
      description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
      sliderId="about-clients"
      sliderProps={{
        slidesPerViewDesktop: 2,
        slidesPerViewTablet: 1,
        padding: 10,
      }}
    >
      {clients.map((item) => (
        <ClientCard {...item} className="about-clients__item" />
      ))}
    </SliderSection>
  )
}
