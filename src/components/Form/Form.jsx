import './Form.scss'
import clsx from 'clsx'
import { propertiesContact, contactForm } from "@/constants/data.js";
import Field from "@/components/Field/index.js";
import Select from "@/components/Select/index.js";
import Icon from "@/components/Icon/index.js";
import Button from "@/components/Button/index.js";

export default (props) => {
  const {
    className,
    page,
  } = props

  if (page === 'Properties') {
    return (
      <form action="/" className={clsx('form', className)} method="POST">
        <div className="form__grid">
          {propertiesContact.textFields.map((field) => (
            <Field
              key={field.id}
              className="form__field"
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              isRequired={field.isRequired}
              inputMode={field.inputMode}
            />
          ))}

          {Object.entries(propertiesContact.selectFields).map(([key, data]) => (
            <div className="form__field custom-select-group" key={key}>
              <span className="custom-select-label">{data.label}</span>
              <Select filterKey={key} filterData={data} />
            </div>
          ))}

          <div className="form__field form__field_double custom-select-group">
            <span className="custom-select-label">{propertiesContact.budget.label}</span>
            <Select filterKey="budget" filterData={propertiesContact.budget} />
          </div>

          <div className="form__field form__field_double form-method">
            <span className="form-method__label">
              {propertiesContact.contactMethod.label}
            </span>
            <div className="form-method__options">
              {propertiesContact.contactMethod.options.map((option) => (
                <label className="form-radio" key={option.value}>
                  <input
                    className="form-radio__input visually-hidden"
                    type="radio"
                    name={propertiesContact.contactMethod.name}
                    value={option.value}
                    defaultChecked={option.defaultChecked}
                  />
                  <span className="form-radio__box">
                    <Icon
                      className="form-radio__icon"
                      name={option.icon}
                      hasFill
                    />
                    <span className="form-radio__text">{option.text}</span>
                    <span className="form-radio__dot"></span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <Field
            className="form__field form__field_full"
            id={propertiesContact.message.id}
            label={propertiesContact.message.label}
            type={propertiesContact.message.type}
            placeholder={propertiesContact.message.placeholder}
          />
        </div>

        <div className="form__footer">
          <label className="form-checkbox">
            <input
              className="form-checkbox__input visually-hidden"
              type="checkbox"
              required
            />
            <span className="form-checkbox__box"></span>
            <span className="form-checkbox__text">
              I agree with <a href="/">Terms of Use</a> and{' '}
              <a href="/">Privacy Policy</a>
            </span>
          </label>

          <Button className="form__submit button_purple" type="submit">
            Send Your Message
          </Button>
        </div>
      </form>
    )
  }

  if (page === 'Contact') {
    return (
      <form action="/" className={clsx('form', className)} method="POST">
        <div className="form__grid form__grid_three-column">
          {contactForm.textFields.map((field) => (
            <Field
              key={field.id}
              className="form__field"
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              isRequired={field.isRequired}
              inputMode={field.inputMode}
            />
          ))}

          {Object.entries(contactForm.selectFields).map(([key, data]) => (
            <div className="form__field custom-select-group" key={key}>
              <span className="custom-select-label">{data.label}</span>
              <Select filterKey={key} filterData={data} />
            </div>
          ))}

          <Field
            className="form__field form__field_full"
            id={contactForm.message.id}
            label={contactForm.message.label}
            type={contactForm.message.type}
            placeholder={contactForm.message.placeholder}
          />
        </div>

        <div className="form__footer">
          <label className="form-checkbox">
            <input
              className="form-checkbox__input visually-hidden"
              type="checkbox"
              required
            />
            <span className="form-checkbox__box"></span>
            <span className="form-checkbox__text">
              I agree with <a href="/">Terms of Use</a> and{' '}
              <a href="/">Privacy Policy</a>
            </span>
          </label>

          <Button className="form__submit button_purple" type="submit">
            Send Your Message
          </Button>
        </div>
      </form>
    )
  }
}
