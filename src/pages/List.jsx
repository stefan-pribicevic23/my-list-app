import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddListItem from "../components/Item/AddListItem";
import Item from "../components/Item/Item";
import { removeListItem } from "../store/lists";

const List = () => {
  const dispatch = useDispatch();
  const { index } = useParams();
  const list = useSelector(state => state.lists.entities[index]);
  const items = useSelector(state => state.items);

  return (
    <div>
      <div>
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
      <AddListItem items={items} />
    </div>
  );
};

export default List;