import NavMenuItem from "./NavMenuItem";

const NavMenu = ({ isOpen, items, }) => (
  isOpen && <nav className="min-w-full">
    <ul>
      {
        items.map(({ path, name }, index) => (<NavMenuItem path={path} name={name} key={index} />))
      }
    </ul>
  </nav>
)

export default NavMenu;