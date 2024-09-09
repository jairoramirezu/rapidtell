const InputsToAct = ({
  ele,
  prices,
  number,
  price,
  unit,
  setNumber,
  colors
}) => {
  return (
    <>
      <div className="input-container">
        <label className="mt-2">Precio</label>
        <input
          placeholder={(
            prices.find((el) => el.id === ele?.default_price)?.unit_amount / 100
          ).toLocaleString("de-DE")}
          onChange={(e) => unit(e)}
          onClick={() => setNumber(ele.id)}
          value={number === ele.id ? price : ""}
          type="text"
          id="price"
          min="0"
        />
      </div>
      <div className="input-container">
        <label className="mt-2">Colores - Ej.: (Negro, Azul, Rojo)</label>
        <input
          placeholder={ele?.features[0]?.name}
          onChange={(e) => unit(e)}
          onClick={() => setNumber(ele.id)}
          value={number === ele.id ? colors : ""}
          id="colors"
          type="text"
        />
      </div>
    </>
  )
}

export default InputsToAct
