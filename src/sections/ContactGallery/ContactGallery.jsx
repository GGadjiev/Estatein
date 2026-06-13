import './ContactGallery.scss'
import Section from '@/layouts/Section/index.js'
import { Image } from 'minista'

export default () => {
  return (
    <Section
      className="contact-gallery section_side-by-side-bottom"
      title="Explore Estatein's World"
      titleId="contact-gallery-title"
      description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
    >
      <div className="contact-gallery__grid">
        <div className="contact-gallery__item contact-gallery__item_office">
          <Image src="/src/assets/images/office.png" />
        </div>
        <div className="contact-gallery__item contact-gallery__item_team">
          <Image src="/src/assets/images/team.png" />
        </div>

        <div className="contact-gallery__item contact-gallery__item_meeting">
          <Image src="/src/assets/images/meeting.png" />
        </div>
        <div className="contact-gallery__item contact-gallery__item_team-small-1">
          <Image src="/src/assets/images/team-small-1.png" />
        </div>
        <div className="contact-gallery__item contact-gallery__item_team-small-2">
          <Image src="/src/assets/images/team-small-2.png" />
        </div>

        <div className="contact-gallery__item contact-gallery__item_handshake">
          <Image src="/src/assets/images/handshake.png" />
        </div>
      </div>
    </Section>
  )
}
