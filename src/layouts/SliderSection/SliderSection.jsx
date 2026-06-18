import './SliderSection.scss'
import clsx from 'clsx'
import Button from '@/components/Button/index.js'
import Section from '@/layouts/Section/index.js'
import Slider from '@/components/Slider/index.js'
import { link } from "@/utils/link.js";

export default (props) => {
  const {
    className,
    title,
    titleId,
    description,
    actionConfig,
    sliderId,
    children,
    sliderProps = {},
    id,
  } = props

  const ActionElement = actionConfig ? (
    <Button
      href={link(actionConfig.href)}
      className={clsx('button_gray', actionConfig.className)}
    >
      {actionConfig.label}
    </Button>
  ) : null

  return (
    <Section
      className={clsx('section', className)}
      title={title}
      titleId={titleId}
      description={description}
      headerActions={ActionElement}
      id={id}
    >
      <Slider actions={ActionElement} id={sliderId} {...sliderProps}>
        {children}
      </Slider>
    </Section>
  )
}
