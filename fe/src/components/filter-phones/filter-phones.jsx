import PhoneDetail from "../phone-details/phone-details"
import formatPrice from "../../utils/format-price"

const FilterPhones = ({ filteredPhones, phones, dollarPrice, currency }) => (
  <>
    {filteredPhones?.map(({ name, images, features, id, default_price }) => {
      const price = phones?.pricesData.find(
        ({ id }) => id === default_price
      )?.unit_amount
      return (
        <PhoneDetail
          key={`${name}-${features[1]?.name}-${features[2]?.name}`}
          name={name}
          img={images[0]}
          detail={features[0]?.name}
          ram={features[1]?.name}
          rom={features[2]?.name}
          size={features[3]?.name}
          cam={features[4]?.name}
          bat={features[5]?.name}
          pes={features[6]?.name}
          sim={features[7]?.name}
          os={features[8]?.name}
          chip={features[9]?.name}
          details={features[10]?.name}
          id={id}
          price={formatPrice(currency, price, dollarPrice)}
        />
      )
    })}
  </>
)

export default FilterPhones
