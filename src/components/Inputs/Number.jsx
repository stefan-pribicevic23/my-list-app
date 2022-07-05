const Number = ({ id, title, placeholder, step = 0.5, value, setValue }) => (
  <div className="flex items-center m-[10px]">
    <label forhtml={id}>{title}</label>
    <input
      className="ml-[10px] border p-[10px]"
      type="number"
      id={id}
      name={id}
      step={step}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  </div>
);

export default Number;