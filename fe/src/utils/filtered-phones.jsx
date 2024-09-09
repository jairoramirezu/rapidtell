import { useEffect, useState } from "react"

const useFilteredPhones = (phones, location, sort) => {
  const [filteredPhones, setFilteredPhones] = useState([])

  useEffect(() => {
    if (!phones?.productsData || !Array.isArray(phones.productsData)) {
      setFilteredPhones([])
      return
    }

    let filtered = phones.productsData.filter((phone) =>
      location !== "todos" ? phone?.metadata?.brand === location : true
    )

    filtered = filtered.filter((phone) => phone.active)

    const parseRAM = (ramString) => {
      const match = ramString.match(/\d+/)
      return match ? Number(match[0]) : 0
    }

    const compareNames = (a, b) => {
      const nameComparison = a.name.localeCompare(b.name)
      if (nameComparison !== 0) return nameComparison

      const firstDigitA = parseInt(
        a.features[1]?.name.toString().match(/\d/)[0] || 0
      )
      const firstDigitB = parseInt(
        b.features[1]?.name.toString().match(/\d/)[0] || 0
      )
      if (firstDigitA !== firstDigitB) return firstDigitA - firstDigitB

      const feature2A = Number(a.features[2]?.name || 0)
      const feature2B = Number(b.features[2]?.name || 0)
      return feature2A - feature2B
    }

    switch (sort) {
      case "Mayor precio":
        filtered.sort((a, b) => {
          const priceA =
            phones.pricesData.find((price) => price.id === a.default_price)
              ?.unit_amount || 0
          const priceB =
            phones.pricesData.find((price) => price.id === b.default_price)
              ?.unit_amount || 0
          return priceB - priceA
        })
        break
      case "Menor precio":
        filtered.sort((a, b) => {
          const priceA =
            phones.pricesData.find((price) => price.id === a.default_price)
              ?.unit_amount || 0
          const priceB =
            phones.pricesData.find((price) => price.id === b.default_price)
              ?.unit_amount || 0
          return priceA - priceB
        })
        break
      case "- RAM":
        filtered.sort(
          (a, b) =>
            parseRAM(a.features[1]?.name) - parseRAM(b.features[1]?.name)
        )
        break
      case "+ RAM":
        filtered.sort(
          (a, b) =>
            parseRAM(b.features[1]?.name) - parseRAM(a.features[1]?.name)
        )
        break
      case "- ROM":
        filtered.sort(
          (a, b) =>
            Number(a.features[2]?.name || 0) - Number(b.features[2]?.name || 0)
        )
        break
      case "+ ROM":
        filtered.sort(
          (a, b) =>
            Number(b.features[2]?.name || 0) - Number(a.features[2]?.name || 0)
        )
        break
      case "A - Z":
        filtered.sort(compareNames)
        break
      case "Z - A":
        filtered.sort((a, b) => compareNames(b, a))
        break
      default:
        filtered.sort(compareNames)
    }

    setFilteredPhones(filtered)
  }, [phones, location, sort])

  return filteredPhones
}

export default useFilteredPhones
