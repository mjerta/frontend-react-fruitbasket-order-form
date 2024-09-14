function SelectBox({name, options, handleOnChange, labelText, className}) {
  return (
    <>
      <label className={className} htmlFor={name}>{labelText}</label>
      <select name={name} id={name} onChange={handleOnChange}>
        {
          options.map((option, index) => (
            <option
              key={index}
              value={option}>
              {option}
            </option>
          ))
        }
      </select>
    </>
  )
}

export default SelectBox;