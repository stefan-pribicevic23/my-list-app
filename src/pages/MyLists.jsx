import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import addButton from '../assets/add-button.png';
import AddItem from '../components/Item/AddItem';
import Item from '../components/Item/Item';
import { addList, removeList } from '../store/lists';

const MyLists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lists = useSelector((state) => state.lists.entities);
  const [showAddItem, setShowAddItem] = useState(false);


  const listsItems = [];

  for (const [key, value] of Object.entries(lists).reverse()) {
    console.log(key, value);
    listsItems.push(
      <Item
        key={key}
        name={value.name}
        removeItem={() => { dispatch(removeList({ index: key })) }}
        onClick={() => { navigate(`/list/${key}`) }}
      />
    );
  }

  return (
    <div>
      {!showAddItem && <img
        className="w-[60px] h-[60px] fixed left-[50%] bottom-[30px] translate-x-[-50%]"
        src={addButton}
        alt='addButton'
        onClick={() => {
          setShowAddItem(true);
        }}
      />}
      {showAddItem &&
        <AddItem
          addItem={(name) => {
            dispatch(addList({ name }));
            setShowAddItem(false);
          }}
        />
      }
      <div className="pt-[50px]">
        {
          listsItems.length > 0 && listsItems
        }
      </div>
    </div>
  );
};

export default MyLists;