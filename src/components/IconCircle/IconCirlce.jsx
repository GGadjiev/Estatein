import './IconCircle.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon/index.js'

export default (props) => {
  const { className, icon } = props

  return (
    <div className={clsx('icon-circle', className)}>
      <Icon className="icon-circle__icon" name={icon} hasFill />
    </div>
  )
}
