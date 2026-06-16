import './PropertyDetails.scss'
import Section from '@/layouts/Section/index.js'
import { propertyDetails } from '@/constants/data.js'
import Button from '@/components/Button/index.js'

export default () => {
  const { listingPrice } = propertyDetails

  const details = [
    propertyDetails.additionalFees,
    propertyDetails.monthlyCosts,
    propertyDetails.totalInitialCosts,
    propertyDetails.monthlyExpenses,
  ]

  return (
    <Section
      className="property-details"
      title="Comprehensive Pricing Details"
      titleId="property-details-title"
      description="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
    >
      <div className="property-details__container">
        <div className="property-details__note-inner">
          <span className="h3">Note</span>
          <span className="property-details__note">
            The figures provided above are estimates and may vary depending on
            the property, location, and individual circumstances.
          </span>
        </div>

        <div className="property-details__main">
          <div className="property-details__price-inner">
            <span className="property-details__price-label h4">
              {listingPrice.label}
            </span>
            <span className="property-details__price-value">
              {listingPrice.value}
            </span>
          </div>

          <div className="property-details__features">
            {details.map(({ title, fields }) => (
              <div className="property-details__features-item">
                <div className="property-details__features-header">
                  <h3 className="property-details__features-title">{title}</h3>
                  <Button
                    className="property-details__features-button button_gray"
                    href="/"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="property-details__features-grid">
                  {fields.map(({ label, value, note, fullWidth }) => (
                    <div
                      className={`property-details__features-card ${fullWidth ? 'property-details__features-card_full property-details__features-card_border-reset' : ''}`}
                    >
                      <span className="property-details__features-label">
                        {label}
                      </span>
                      <div className="property-details__features-value-row">
                        <span className="property-details__features-value h3">
                          {value}
                        </span>
                        {note && (
                          <p className="property-details__features-note">
                            {note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
