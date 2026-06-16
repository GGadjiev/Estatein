import './PropertyForm.scss'
import Section from '@/layouts/Section/index.js'
import Form from '@/components/Form/index.js'

export default () => {
  return (
    <Section
      className="property-form section_side-by-side"
      title="Inquire About Seaside Serenity Villa"
      titleId="property-form-title"
      description="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
    >
      <div className="property-form__container">
        <Form page="Property" className="property-form__form" />
      </div>
    </Section>
  )
}
