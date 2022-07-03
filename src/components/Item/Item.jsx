const Item = ({ name, removeItem }) => (
  <div className="text-center font-nanum-brush-scipt text-[30px] relative">
    <span>
      {name}
    </span>
    <span className="absolute right-[20px]" onClick={() => { removeItem() }}>✕</span>
  </div>
);

export default Item;