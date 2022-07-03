import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "../components/Item/Item";

const List = () => {
  const { index } = useParams();
  const list = useSelector(state => state.lists.entities[index]);

  return (
    <div>
      {list.items.map(item => <Item name={item.name} />)}
    </div>
  );
};

export default List;