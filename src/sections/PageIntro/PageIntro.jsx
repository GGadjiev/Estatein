import './PageIntro.scss'

export default (props) => {
  const {
    title,
    description,
  } = props;

  return (
    <section className="page-intro" aria-labelledby="page-intro-title">
      <div className="page-intro__inner container">
        <h2 className="page-intro__title">{title}</h2>
        <p className="page-intro__description">{description}</p>
      </div>
    </section>
  )
}
