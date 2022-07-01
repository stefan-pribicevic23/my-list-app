import { Link } from "react-router-dom";

const NavMenuItem = ({ path, name, onClick }) => (
  <li className="text-center my-[10px] text-[18px]" onClick={onClick}>
    <Link to={path}>{name}</Link>
  </li>
);

export default NavMenuItem;