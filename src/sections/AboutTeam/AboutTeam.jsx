import './AboutTeam.scss'
import Section from '@/layouts/Section/index.js'
import { employees } from '@/constants/data.js'
import Card from "@/components/Card/index.js";
import EmployeeCard from "@/components/EmployeeCard/index.js";

export default () => {
  return (
    <Section
      className="about-team"
      title="Meet the Estatein Team"
      description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
    >
      <div className='about-team__container'>
        {employees.map((item) => (
          <EmployeeCard {...item} className="about-team__item" />
        ))}
      </div>
    </Section>
  )
}
