import './ContactForm.scss'
import Section from '@/layouts/Section/index.js'
import Form from "@/components/Form/index.js";

export default () => {
  return (
    <Section
      className="contact-form"
      title="Let's Connect"
      titleId="contact-form-title"
      description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
    >
      <Form page='Contact' className='contact-form__form' />
    </Section>
  )
}
