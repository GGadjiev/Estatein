import './Hero.scss'
import Button from "@/components/Button/index.js";

export default () => {
  const stats = [
    { value: '200+', label: 'Happy Customers' },
    { value: '10k+', label: 'Properties For Clients' },
    { value: '16+', label: 'Years of Experience' },
  ]

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__text">
          <h1 className="hero__title">Discover Your Dream Property with Estatein</h1>
          <p className="hero__description">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
        </div>

        <div className="hero__buttons">
          <Button className='hero__button-about' href='/'>Learn More</Button>
          <Button className='hero__button-properties button_purple' href='/'>Browse Properties</Button>
        </div>

        <div className="hero__about">
          <ul className='hero__about-list'>
            {stats.map((item) => (
              <li className="hero__about-item">
                <span className="hero__about-item-value">{item.value}</span>
                <span className="hero__about-item-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
