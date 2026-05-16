import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import manifest from '@/assets/favicons/site.webmanifest'
import PromoBar from '@/layouts/PromoBar/PromoBar.jsx'

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Friendly Frontend Starter | {title}</title>
        <script src="/src/main.js" type="module" />
        <link rel="manifest" href={manifest} />
      </Head>
      <PromoBar />
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
