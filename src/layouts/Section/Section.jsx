import './Section.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, title, titleId, description, headerActions, children } =
    props
  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <h2 className="section__title h2" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
        {headerActions && (
          <div className="section__header-actions hidden-tablet">
            {headerActions}
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
