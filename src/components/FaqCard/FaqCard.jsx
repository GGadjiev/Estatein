import './FaqCard.scss'
import clsx from 'clsx'
import Button from "@/components/Button/index.js";

export default (props) => {
  const { className, question, answer } = props

  return (
    <div className={clsx('faq-card', className)}>
      <h3 className='faq-card__question'>{question}</h3>
      <p className='faq-card__answer'>{answer}</p>
      <Button className='faq-card__button' href='/'>Read More</Button>
    </div>
  )
}
