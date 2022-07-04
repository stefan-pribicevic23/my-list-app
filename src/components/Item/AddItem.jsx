import { useState } from "react";

const AddItem = ({ addItem }) => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="fixed bottom-0 w-[100%] border flex flex-col items-center p-[15px]">
      <input
        className="border mb-[10px] w-[80%] px-[5px]"
        type="text"
        placeholder="Naziv artikla"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
      />
      <button
        className="border p-[10px]"
        onClick={() => {
          addItem(inputText);
          setInputText('');
        }}
      >
        Dodaj
      </button>
    </div>
  );
}

export default AddItem;