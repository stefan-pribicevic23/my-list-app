import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddListItem from "../components/Item/AddListItem";
import Item from "../components/Item/Item";
import { addListItem, removeListItem, toggleListItem } from "../store/lists";

const List = () => {
  const dispatch = useDispatch();
  const { index } = useParams();
  const list = useSelector(state => state.lists.entities[index]);
  const items = useSelector(state => state.items);

  return (
    <div>
      <div className="max-h-[calc(100vh-450px)] overflow-scroll">
        {list.items.map(({ name, count, measure, checked }) =>
          <Item
            key={`${name}${count}${measure}${index}}`}
            name={name}
            count={count}
            measure={measure}
            removeItem={() => dispatch(removeListItem({ listIndex: index, listItemName: name }))}
            onItemClick={() => { dispatch(toggleListItem({ listIndex: index, listItemName: name })) }}
            checked={checked}
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