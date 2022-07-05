import { useState } from "react";
import Number from "../Inputs/Number";
import Select from "../Inputs/Select";

const AddListItem = ({ addListItem, items }) => {
  const ARTICLE_MEASURES = [
    'g',
    'kg',
    'l',
    'dl',
    'kom',
  ];

  const [name, setName] = useState('');
  const [count, setCount] = useState();
  const [measure, setMeasure] = useState('');

  return (
    <div className="fixed bottom-0 w-[100%] border flex flex-col items-center p-[15px]">
      <Select
        id="items"
        title="Izaberi artikl"
        placeholder="Naziv artikla"
        options={items}
        value={name}
        setValue={setName}
      />
      <Number
        id="count"
        title="Unesi kolicinu"
        placeholder="Kolicina artikla"
        value={count}
        setValue={setCount}
      />
      <Select
        id="measure"
        title="Izaberi meru"
        placeholder="Mera artikla"
        options={ARTICLE_MEASURES}
        value={measure}
        setValue={setMeasure}
      />
      <button
        className="border p-[10px]"
        onClick={() => {
          addListItem({
            name,
            count,
            measure,
          });
          setName('');
          setCount('');
          setMeasure('');
        }}
      >
        Dodaj
      </button>
    </div>
  );
};

export default AddListItem;