import stripe from "stripe"

// eslint-disable-next-line no-undef
const stripeInstance = stripe(process.env.REACT_APP_STRIPE_KEY)

export const fetchProducts = async () => {
  let products = []
  let prices = []
  try {
    const res = await Promise.all([
      stripeInstance.products.list({
        limit: 100
      }),
      stripeInstance.prices.list({
        limit: 100
      })
    ])
    products = res[0].data
    prices = res[1].data
    while (products.length === 100) {
      const lastId = products[products.length - 1].id
      const lastIdPrices = prices[prices.length - 1].id
      const res = await Promise.all([
        stripeInstance.products.list({
          limit: 100,
          starting_after: lastId
        }),
        stripeInstance.prices.list({
          limit: 100,
          starting_after: lastIdPrices
        })
      ])
      products = products.concat(res[0].data)
      prices = prices.concat(res[1].data)
    }
    return { products, prices }
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export const updateProduct = async (
  id,
  active,
  available,
  price,
  colors,
  ram,
  url,
  rom,
  screenSize,
  camera,
  batery,
  weight,
  sim,
  os,
  chip
) => {
  try {
    if (active && available)
      await stripeInstance.products.update(id, { active: false })
    if (!active && available)
      await stripeInstance.products.update(id, { active: true })
    if (price) {
      const newPrice = await stripeInstance.prices.create({
        currency: "usd",
        product: id,
        unit_amount: price * 100
      })
      await stripeInstance.products.update(id, { default_price: newPrice.id })
    }
    await stripeInstance.products.update(id, {
      features: [
        { name: colors },
        { name: ram },
        { name: rom },
        { name: screenSize },
        { name: camera },
        { name: batery },
        { name: weight },
        { name: sim },
        { name: os },
        { name: chip },
        { name: url }
      ]
    })
    return true
  } catch (error) {
    console.error(error)
    throw error
  }
}
