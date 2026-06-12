import './ContactLocations.scss'
import Section from '@/layouts/Section/index.js'
import { contactLocations } from "@/constants/data.js";
import LocationCard from "@/components/LocationCard/index.js";
import Button from "@/components/Button/index.js";
import Slider from "@/components/Slider/index.js";

export default () => {
  return (
    <Section
      className="contact-locations"
      title="Discover Our Office Locations"
      titleId="contact-locations-title"
      description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
    >
      <div className="contact-locations__inner">
        <div className="contact-locations__tab-container">
          <Button className='contact-locations__tab is-active'>All</Button>
          <Button className='contact-locations__tab'>Regional</Button>
          <Button className='contact-locations__tab'>International</Button>
        </div>

        <Slider
          className="contact-locations__slider"
          id='contact-locations'
          slidesPerViewDesktop='2'
          slidesPerViewTablet='1'
          padding='1'
        >
          {contactLocations.map((item) => (
            <LocationCard {...item} className="contact-locations__slide" />
          ))}
        </Slider>
      </div>
    </Section>
  )
}
