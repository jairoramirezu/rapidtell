const PhoneContainerDetailsButtons = ({ details, setList, name }) => (
  <div>
    <a href={details} target="_blank" rel="noreferrer">
      <img
        className="add-button details-icon-button"
        src="/images/details-17.svg"
        alt="details"
      />
    </a>
    <img
      className="add-button"
      src="/images/close_thick.svg"
      alt="close"
      name={name}
      onClick={(e) => {
        setList((prev) => prev.filter((item) => item !== e.target.name))
      }}
    />
  </div>
)

export default PhoneContainerDetailsButtons
