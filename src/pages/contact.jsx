import PageIntro from '@/sections/PageIntro/index.js'
import { contactGridCards } from '@/constants/data.js'
import GridCards from '@/sections/GridCards/index.js'
import ContactForm from '@/sections/ContactForm/index.js'
import ContactLocations from '@/sections/ContactLocations/index.js'
import ContactGallery from '@/sections/ContactGallery/index.js'

export const metadata = {
  title: 'Contact',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">Contact page</h1>
      <PageIntro
        title="Get in Touch with Estatein"
        description="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
      />
      <GridCards items={contactGridCards} />
      <ContactForm id="contact-form" />
      <ContactLocations id="contact-locations" />
      <ContactGallery />
    </>
  )
}
