const findProductSearchBar = (setList, products, name) => {
  setList([])
  const sortedProducts = products.sort((a, b) => {
    const nameComparison = a.name.localeCompare(b.name)
    if (nameComparison !== 0) {
      return nameComparison
    }
    const firstDigitA = parseInt(a.features[1].name.toString().match(/\d/)[0])
    const firstDigitB = parseInt(b.features[1].name.toString().match(/\d/)[0])
    if (Number(firstDigitA) < Number(firstDigitB)) return -1
    if (Number(firstDigitA) > Number(firstDigitB)) return 1
    if (Number(a.features[2].name) < Number(b.features[2].name)) return -1
    if (Number(a.features[2].name) > Number(b.features[2].name)) return 1
    return 0
  })
  const filter = sortedProducts.filter((ele) => ele.active)
  name.length &&
    filter.map(
      (ele) =>
        ele.name.toLowerCase().includes(name.toLowerCase()) &&
        setList((prev) => [...prev, ele])
    )
}

export default findProductSearchBar
