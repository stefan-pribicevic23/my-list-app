const Select = ({ id, title, placeholder, options = [], value = "", setValue = () => { } }) => (
  <div className="flex items-center m-[10px]">
    <label htmlFor={id}>{title}</label>
    <input
      className="ml-[10px] border p-[10px]"
      id={id}
      list={`${id}-suggestions`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
    {options && <datalist id={`${id}-suggestions`}>
      {
        options.map(option => <option className="w-[100px]" key={option} value={option} />)
      }
    </datalist>}
  </div>
);

export default Select;