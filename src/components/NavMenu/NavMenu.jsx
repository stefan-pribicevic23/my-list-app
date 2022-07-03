import NavMenuItem from "./NavMenuItem";

const NavMenu = ({ isOpen, items, onItemClick }) => (
  isOpen &&
  <nav className="min-w-full ">
    <ul>
      {
        items.map(({ path, name, showInNavMenu }, index) =>
          showInNavMenu && (
            <NavMenuItem
              path={path}
              name={name}
              key={index}
              onClick={onItemClick}
            />
          ))
      }
    </ul>
  </nav>
)

export default NavMenu;