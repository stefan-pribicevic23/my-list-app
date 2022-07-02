import { useState } from 'react';
import { useDispatch } from 'react-redux';
import addButton from '../assets/add-button.png';
import AddItem from '../components/Item/AddItem';
import { addList } from '../store/lists';

const MyLists = () => {
  const dispatch = useDispatch();
  const [showAddItem, setShowAddItem] = useState(false);

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
            console.log(name);
            dispatch(addList({ name }));
            setShowAddItem(false);
          }}
        />
      }
    </div>
  );
};

export default MyLists;