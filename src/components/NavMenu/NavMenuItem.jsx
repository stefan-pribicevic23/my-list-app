import { Link } from "react-router-dom";

const NavMenuItem = ({ path, name }) => (
  <li className="text-center my-[10px] text-[18px]">
    <Link to={path}>{name}</Link>
  </li>
);

export default NavMenuItem;