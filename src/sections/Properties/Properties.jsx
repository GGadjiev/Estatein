import './Properties.scss'
import Section from "@/layouts/Section/index.js";
import Button from "@/components/Button/index.js";

export default (props) => {
  const { items = [] } = props

  return (
    <Section
      className="properties"
      title='Featured Properties'
      titleId="properties-title"
      description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
      headerActions={
        <Button type='a'>
          View All Properties
        </Button>
      }
    >

    </Section>
  )
}