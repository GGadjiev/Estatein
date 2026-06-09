import PageIntro from '@/sections/PageIntro/index.js'
import SearchFilterBar from '@/sections/SearchFilterBar/index.js'
import Properties from '@/sections/Properties/index.js'
import Contact from '@/sections/Contact/index.js'

export const metadata = {
  title: 'Properties',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">Properties page</h1>
      <PageIntro
        title="Find Your Dream Property"
        description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
      />
      <SearchFilterBar />
      <Properties />
      <Contact />
    </>
  )
}
