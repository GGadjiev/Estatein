import './PropertiesContactForm.scss'
import Section from '@/layouts/Section/index.js'
import Form from '@/components/Form/index.js'

export default () => {
  return (
    <Section
      className="properties-contact-form"
      title="Let's Make it Happen"
      titleId="properties-contact-form-title"
      description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
    >
      <Form page="Properties" className="properties-contact-form__form" />
    </Section>
  )
}
