const sortAlphabetical = (array, setFilteredPhones, isActive, name) => {
  setFilteredPhones([])
  let sortedArray = array.sort((a, b) => {
    const nameComparison = a.name.localeCompare(b.name)
    if (nameComparison !== 0) {
      return nameComparison
    }

    const firstDigitA = parseInt(a.features[1].name.match(/\d/)[0])
    const firstDigitB = parseInt(b.features[1].name.match(/\d/)[0])
    if (firstDigitA < firstDigitB) return -1
    if (firstDigitA > firstDigitB) return 1

    const feature2A = Number(a.features[2].name)
    const feature2B = Number(b.features[2].name)
    if (feature2A < feature2B) return -1
    if (feature2A > feature2B) return 1

    return 0
  })

  if (isActive) {
    sortedArray = sortedArray.filter(({ active }) => active)
  }

  if (name && name.length) {
    sortedArray.filter(
      (ele) =>
        ele.name.toLowerCase().includes(name.toLowerCase()) &&
        setFilteredPhones((prev) => [...prev, ele])
    )
    return
  }

  setFilteredPhones(sortedArray)
}

export default sortAlphabetical
