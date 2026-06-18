import './PreFooterCta.scss'
import Button from '@/components/Button/index.js'
import { link } from "@/utils/link.js";

export default () => {
  return (
    <section className="pre-footer-cta" aria-labelledby="pre-footer-cta-title">
      <div className="pre-footer-cta__inner container">
        <div className="pre-footer-cta__text-container">
          <h2 className="pre-footer-cta__title">
            Start Your Real Estate Journey Today
          </h2>
          <p className="pre-footer-cta__description">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <Button
          className="pre-footer-cta__button button_purple"
          href={link('/properties')}
        >
          Explore Properties
        </Button>
      </div>
    </section>
  )
}
