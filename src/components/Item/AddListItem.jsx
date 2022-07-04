import Select from "../Select";

const AddListItem = ({ addListItem, items }) => {
  return (
    <div className="fixed bottom-0 w-[100%] border flex flex-col items-center p-[15px]">
      <Select id="items" title="Izaberi artikl" placeholder="Naziv artikla" options={items} />
    </div>
  );
};

export default AddListItem;