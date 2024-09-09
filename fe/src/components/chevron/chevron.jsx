import ChevronHomeMostSold from "../chevron-home-most-sold/chevron-home-most-sold"

const Chevron = ({ phoneIndex, setPhoneIndex, phoneList }) => (
  <>
    <ChevronHomeMostSold
      direction="left"
      phoneIndex={phoneIndex}
      setPhoneIndex={setPhoneIndex}
      phoneListLength={phoneList.length}
    />
    <ChevronHomeMostSold
      direction="right"
      phoneIndex={phoneIndex}
      setPhoneIndex={setPhoneIndex}
      phoneListLength={phoneList.length}
    />
  </>
)

export default Chevron
