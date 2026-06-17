import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import manifest from '@/assets/favicons/site.webmanifest'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import PromoBar from '@/layouts/PromoBar/PromoBar.jsx'
import PreFooterCta from '@/layouts/PreFooterCta/index.js'

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Estatein | {title}</title>
        <script src="/src/main.js" type="module" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={manifest} />
      </Head>
      <PromoBar />
      <Header url={url} />
      <Content>{children}</Content>
      <PreFooterCta />
      <Footer />
    </>
  )
}
