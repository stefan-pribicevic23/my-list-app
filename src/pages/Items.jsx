import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from '../store/items';
import AddItem from "../components/Item/AddItem";
import Item from "../components/Item/Item";

const Items = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (
    <>
      <div className="pt-[50px]">
        {items.map(
          item =>
            <Item
              key={item}
              name={item}
              removeItem={() => dispatch(removeItem({ item }))}
            />
        )}
      </div>
      <AddItem addItem={(item) => dispatch(addItem({ item }))} />
    </>
  );
};

export default Items;