import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'
import { link } from "@/utils/link.js";

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'Properties',
      href: '/properties',
    },
    {
      label: 'Services',
      href: '/services',
    },
  ]

  return (
    <header className="header" data-js-overlay-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />

        <nav className="header__menu header__menu_desktop">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href }, index) => (
              <li className="header__menu-item" key={index}>
                <a
                  className={clsx(
                    'header__menu-link',
                    href === url && 'is-active'
                  )}
                  href={link(href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__overlay-menu" data-js-overlay-menu-panel="">
          <div
            className="header__overlay-menu-backdrop"
            data-js-overlay-menu-backdrop=""
          />
          <nav className="header__menu header__menu_mobile">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    className={clsx(
                      'header__menu-link',
                      href === url && 'is-active'
                    )}
                    href={link(href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="header__menu-item">
                <a
                  className="header__menu-link header__menu-link_button"
                  href={link('/contact')}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <Button
          className="header__button hidden-mobile button_purple-hover"
          href={link('/contact')}
        >
          Contact Us
        </Button>
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}
