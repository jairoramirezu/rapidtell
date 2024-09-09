const MenuNavbarIcon = ({ menuDisplay, white, setMenuDisplay }) => (
  <div>
    {menuDisplay ? (
      <img
        src={`/images/menu_${white ? "000" : "dad"}.svg`}
        alt="menu"
        onClick={() => setMenuDisplay((prev) => !prev)}
      />
    ) : (
      <img
        src={`/images/close_${white ? "000" : "dad"}.svg`}
        alt="close"
        onClick={() => setMenuDisplay((prev) => !prev)}
      />
    )}
  </div>
)

export default MenuNavbarIcon
