import './Properties.scss'
import Section from "@/layouts/Section/index.js";
import Button from "@/components/Button/index.js";
import { properties } from "@/constants/homeData.js";
import Property from "@/components/Property/index.js";

export default () => {
  return (
    <Section
      className="properties"
      title='Featured Properties'
      titleId="properties-title"
      description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
      headerActions={
        <Button href='/'>
          View All Properties
        </Button>
      }
    >
      {/*разметка до добавления свайпера*/}
      {/*<div className="properties__inner">*/}
      {/*  {properties.map((item) => (*/}
      {/*    <Property {...item} className='properties__item'/>*/}
      {/*  ))}*/}
      {/*</div>*/}

      <div className="properties__slider-wrapper">
        <swiper-container
          class="properties__inner"
          init="false"
          navigation="true"
        >
          {properties.map((item) => (
            <swiper-slide class="properties__slide">
              <Property {...item} className='properties__item'/>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </Section>
  )
}