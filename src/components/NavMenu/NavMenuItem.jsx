const NavMenuItem = ({ path, name }) => (
  <li className="text-center my-[10px] text-[18px]">
    <a href={path}>{name}</a>
  </li>
);

export default NavMenuItem;