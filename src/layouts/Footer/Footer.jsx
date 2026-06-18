import './Footer.scss'
import Logo from '@/components/Logo/index.js'
import Field from '@/components/Field/index.js'
import Icon from '@/components/Icon/index.js'
import Button from '@/components/Button/index.js'
import { footerNavigation, footerSocials } from '@/constants/data.js'
import { link } from "@/utils/link.js";

export default () => {
  return (
    <footer className="footer">
      <div className="footer__top-wrapper container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo className="footer__logo" loading="eager" />
            <Field
              className="footer__field"
              label="Email"
              type="email"
              placeholder="Enter Your Email"
              isRequired
              isLabelHidden
              iconName="email"
              buttonIconName="field-submit"
              buttonIconHasFill={true}
            />
          </div>

          <div className="footer__nav">
            {footerNavigation.map((column) => (
              <div className="footer__nav-column">
                <h3 className="footer__nav-title h4">{column.title}</h3>
                <ul className="footer__nav-list">
                  {column.links.map((link) => (
                    <li className="footer__nav-item">
                      <a href={link.href} className="footer__nav-link">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom-wrapper">
        <div className="footer__bottom container">
          <div className="footer__legal">
            <p className="footer__copyright">
              &copy;2023 Estatein. All Rights Reserved.
            </p>
            <a href={link('/')} className="footer__legal-link">
              Terms & Conditions
            </a>
          </div>

          <ul className="footer__socials">
            {footerSocials.map((social) => (
              <li className="footer__socials-item">
                <Button className="footer__socials-button" href={social.href}>
                  <Icon
                    className="footer__socials-icon"
                    name={social.icon}
                    hasFill
                  />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
