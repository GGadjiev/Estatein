import './Field.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import clsx from 'clsx'
import Icon from '@/components/Icon/index.js'
import Button from '@/components/Button/index.js'

export default (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    /**
     * undefined (default) | 'email' | 'textarea'
     */
    type,
    placeholder,
    isRequired,
    inputMode,
    mask,
    isLabelHidden,
    iconName,
    buttonIconName,
    buttonIconHasFill,
    buttonText,
    buttonClassName,
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input'

  const extraAttrs = {}

  if (mask) {
    extraAttrs['data-js-input-mask'] = mask
  }

  return (
    <div className={clsx('field', className)}>
      <label
        className={clsx('field__label', isLabelHidden && 'visually-hidden')}
        htmlFor={id}
      >
        {label}
        {isRequired && (
          <span className="field__required-star" aria-hidden="true">
            &nbsp;*
          </span>
        )}
      </label>
      <div className="field__body">
        {iconName && <Icon hasFill className="field__icon" name={iconName} />}

        <Component
          className={clsx(
            'field__control',
            iconName && 'field__control_has-icon',
            buttonIconName && 'field__control_has-button'
          )}
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          inputMode={inputMode}
          {...extraAttrs}
        />

        {buttonIconName && (
          <Button className={clsx("field__button", buttonClassName)} type="submit">
            <Icon
              hasFill={buttonIconHasFill ? true : false}
              className="field__button-icon"
              name={buttonIconName}
            />
            <span className='field__button-text hidden-tablet'>{buttonText}</span>
          </Button>
        )}
      </div>
    </div>
  )
}
