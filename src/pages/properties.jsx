import PageIntro from '@/sections/PageIntro/index.js'
import SearchFilterBar from '@/sections/SearchFilterBar/index.js'
import PropertiesContactForm from '@/sections/PropertiesContactForm/index.js'
import Properties from '@/sections/Properties/index.js'

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
      <Properties
        id="properties-properties"
        title="Discover a World of Possibilities"
        titleId="properties-title"
        description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
        sliderId="properties"
      />
      <PropertiesContactForm id="properties-form" />
    </>
  )
}
