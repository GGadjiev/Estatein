import './AboutStats.scss'
import clsx from 'clsx'
import { stats } from '@/constants/data.js'

export default (props) => {
  const { className } = props

  return (
    <div className={clsx('about-stats', className)}>
      <ul className="about-stats__list">
        {stats.map((item) => (
          <li className="about-stats__item">
            <span className="about-stats__item-value">{item.value}</span>
            <span className="about-stats__item-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
