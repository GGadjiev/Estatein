import PropertyOverview from '@/sections/PropertyOverview/index.js'

export const metadata = {
  title: 'Property',
}

export default () => {
  return (
    <>
      <h1 className="visually-hidden">Property page</h1>
      <PropertyOverview />
    </>
  )
}
