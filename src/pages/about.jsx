import AboutJourney from '@/sections/AboutJournay/index.js'
import AboutValues from '@/sections/AboutValues/index.js'

export const metadata = {
  title: 'About',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">About Us page</h1>
      <AboutJourney />
      <AboutValues />
    </>
  )
}
