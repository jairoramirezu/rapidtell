const AvailableInput = ({ ele, unit, setNumber, number, available }) => (
  <div className="ava-container">
    <label>{ele?.active ? "✅" : "❌"}</label>
    <input
      className="form-check-input-ind"
      type="checkbox"
      onChange={(e) => unit(e)}
      onClick={() => setNumber(ele.id)}
      checked={number === ele.id ? available : ""}
      id="available"
    />
  </div>
)

export default AvailableInput
