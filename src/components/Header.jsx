const Header = () => (
  <header className="fixed z-50 top-0 w-[100%] border-b-2 border-b-['#e6e6e6'] bg-white flex h-[80px] p-[20px] items-center">
    <div className="text-[30px] mr-[30%] before:content-['☰']" />
    <div className="font-nanum-brush-scipt text-[35px] font-bold text-blue-500 uppercase">
      <a href='/'>spisak</a>
    </div>
  </header>
)

export default Header;