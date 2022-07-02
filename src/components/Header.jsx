import { Link } from "react-router-dom";
import NavMenu from "./NavMenu/NavMenu";

const Header = ({ isOpen, setIsOpen, navMenuItems }) => (
  <header className="fixed z-50 top-0 w-[100%] border-b-2 border-b-['#e6e6e6'] bg-white flex flex-wrap  p-[20px] items-center">
    <div
      className={`w-[30px] text-[30px] mr-[30%] ${isOpen ? `before:content-['✕']` : `before:content-['☰']`}`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    />
    <div className="font-nanum-brush-scipt text-[35px] font-bold uppercase">
      <Link to='/'>spisak</Link>
    </div>
    <NavMenu isOpen={isOpen} items={navMenuItems} onItemClick={() => { setIsOpen(false) }} />
  </header>
)

export default Header;