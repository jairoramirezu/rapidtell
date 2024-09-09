const InfoOfProduct = ({ ele }) => (
  <p className="mx-3 info-container">
    {ele.name}
    <span className="mx-3">
      {ele?.features[1]?.name}GB / RAM - {ele?.features[2]?.name}
      GB / ROM
    </span>
  </p>
)

export default InfoOfProduct
