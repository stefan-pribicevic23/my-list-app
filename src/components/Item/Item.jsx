const Item = ({
  name,
  count = "",
  measure = "",
  removeItem,
  toggleItem,
  checked = false,
}) => (
  <div className="text-center font-nanum-brush-scipt text-[30px] relative">
    <span className={`${checked ? 'line-through' : ''}`} onClick={toggleItem}>
      <span>{name}</span>
      {count && <span>{` `}{count}</span>}
      {measure && <span>{` `}{measure}</span>}
    </span>
    <span className="absolute right-[20px]" onClick={removeItem}>✕</span>
  </div>
);

export default Item;