import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddListItem from "../components/Item/AddListItem";
import Item from "../components/Item/Item";
import { addListItem, removeListItem } from "../store/lists";

const List = () => {
  const dispatch = useDispatch();
  const { index } = useParams();
  const list = useSelector(state => state.lists.entities[index]);
  const items = useSelector(state => state.items);

  return (
    <div>
      <div className="max-h-[calc(100vh-400px)] overflow-scroll">
        {list.items.map(({ name, count, measure }) =>
          <Item
            key={name}
            name={name}
            count={count}
            measure={measure}
            removeItem={() => dispatch(removeListItem({ listIndex: index, name }))}
          />
        )}
      </div>
      <AddListItem
        items={items}
        addListItem={(params) => dispatch(addListItem({ listIndex: index, ...params }))}
      />
    </div>
  );
};

export default List;