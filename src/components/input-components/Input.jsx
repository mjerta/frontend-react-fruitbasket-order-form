function Input({name, type, text, state, handleOnChange, className, spanClass}) {

  return (
    <label className={className} htmlFor={name}>
      <span className={`text-before-input ${spanClass}`}>{text}</span>
      <input
        id={name}
        name={name}
        type={type}
        value={state}
        checked={state}
        onChange={handleOnChange}
      />
    </label>
  )
}

export default Input;