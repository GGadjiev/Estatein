import './Contact.scss'
import Section from '@/layouts/Section/index.js'
import Field from '@/components/Field/index.js'
import Select from '@/components/Select/index.js'
import Icon from '@/components/Icon/index.js'
import { contact } from '@/constants/data.js'
import Button from '@/components/Button/index.js'

export default () => {
  return (
    <Section
      className="contact"
      title="Let's Make it Happen"
      titleId="contact-title"
      description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
    >
      <form action="/" className="contact__form" method="POST">
        <div className="contact__grid">
          {/* 1. Рендеринг текстовых полей */}
          {contact.textFields.map((field) => (
            <Field
              key={field.id}
              className="contact__field"
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              isRequired={field.isRequired}
              inputMode={field.inputMode}
            />
          ))}

          {/* 2. Рендеринг основных селектов параметров */}
          {Object.entries(contact.selectFields).map(([key, data]) => (
            <div className="contact__field custom-select-group" key={key}>
              <span className="custom-select-label">{data.label}</span>
              <Select filterKey={key} filterData={data} />
            </div>
          ))}

          {/* 3. Селект бюджета (2 колонки) */}
          <div className="contact__field contact__field_double custom-select-group">
            <span className="custom-select-label">{contact.budget.label}</span>
            <Select filterKey="budget" filterData={contact.budget} />
          </div>

          {/* 4. Выбор метода связи (2 колонки) */}
          <div className="contact__field contact__field_double contact-method">
            <span className="contact-method__label">
              {contact.contactMethod.label}
            </span>
            <div className="contact-method__options">
              {contact.contactMethod.options.map((option) => (
                <label className="contact-radio" key={option.value}>
                  <input
                    className="contact-radio__input visually-hidden"
                    type="radio"
                    name={contact.contactMethod.name}
                    value={option.value}
                    defaultChecked={option.defaultChecked}
                  />
                  <span className="contact-radio__box">
                    <Icon
                      className="contact-radio__icon"
                      name={option.icon}
                      hasFill
                    />
                    <span className="contact-radio__text">{option.text}</span>
                    <span className="contact-radio__dot"></span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 5. Поле сообщения */}
          <Field
            className="contact__field contact__field_full"
            id={contact.message.id}
            label={contact.message.label}
            type={contact.message.type}
            placeholder={contact.message.placeholder}
          />
        </div>

        {/* Подвал формы */}
        <div className="contact__footer">
          <label className="contact-checkbox">
            <input
              className="contact-checkbox__input visually-hidden"
              type="checkbox"
              required
            />
            <span className="contact-checkbox__box"></span>
            <span className="contact-checkbox__text">
              I agree with <a href="/">Terms of Use</a> and{' '}
              <a href="/">Privacy Policy</a>
            </span>
          </label>

          <Button className="contact__submit button_purple" type="submit">
            Send Your Message
          </Button>
        </div>
      </form>
    </Section>
  )
}
