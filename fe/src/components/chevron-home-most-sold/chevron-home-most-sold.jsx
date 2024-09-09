const ChevronHomeMostSold = ({
  direction,
  phoneIndex,
  setPhoneIndex,
  phoneListLength
}) => {
  const handleClick = () => {
    if (direction === "left") {
      setPhoneIndex(phoneIndex !== 0 ? phoneIndex - 1 : phoneListLength - 1)
    } else {
      setPhoneIndex(phoneIndex <= phoneListLength - 2 ? phoneIndex + 1 : 0)
    }
  }

  return (
    <img
      onClick={handleClick}
      className={`chevron chevron-${direction}`}
      src={`/images/chevron_${direction}.svg`}
      alt={`chevron-${direction}`}
    />
  )
}

export default ChevronHomeMostSold
