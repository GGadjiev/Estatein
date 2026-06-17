import AboutJourney from '@/sections/AboutJournay/index.js'
import AboutValues from '@/sections/AboutValues/index.js'
import AboutAchievements from '@/sections/AboutAchievements/index.js'
import AboutExperience from '@/sections/AboutExperience/index.js'
import AboutTeam from '@/sections/AboutTeam/index.js'
import AboutClients from '@/sections/AboutClients/index.js'

export const metadata = {
  title: 'About',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">About Us page</h1>
      <AboutJourney id="about-journey" />
      <AboutValues id="about-values" />
      <AboutAchievements />
      <AboutExperience id="about-experience" />
      <AboutTeam id="about-team" />
      <AboutClients id="about-clients" />
    </>
  )
}
