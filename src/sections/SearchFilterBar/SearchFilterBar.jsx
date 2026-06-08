import './SearchFilterBar.scss'
import Field from "@/components/Field/index.js";
import Select from "@/components/Select/index.js";
import { filters } from "@/constants/data.js";

export default () => {
  return (
    <section className="search-filter-bar">
      <div className='search-filter-bar__container container'>
        <form action="">
          <Field
            className='search-filter-bar__search-input'
            label="Search"
            type="search"
            placeholder='Search For A Property'
            isLabelHidden
            buttonIconName='search'
            buttonText='Find Property'
            buttonClassName='search-filter-bar__search-input-button'
          />

          <div className="search-filter-bar__filters">
            {Object.entries(filters).map(([key, data]) => (
              <Select className='search-filter-bar__filters-item' key={key} filterKey={key} filterData={data} />
            ))}
          </div>
        </form>
      </div>
    </section>
  )
}
