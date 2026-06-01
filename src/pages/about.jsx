import AboutJourney from '@/sections/AboutJournay/index.js'
import AboutValues from '@/sections/AboutValues/index.js'
import AboutAchievements from "@/sections/AboutAchievements/index.js";
import AboutExperience from "@/sections/AboutExperience/index.js";
import AboutTeam from "@/sections/AboutTeam/index.js";

export const metadata = {
  title: 'About',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">About Us page</h1>
      <AboutJourney />
      <AboutValues />
      <AboutAchievements />
      <AboutExperience />
      <AboutTeam />
    </>
  )
}
