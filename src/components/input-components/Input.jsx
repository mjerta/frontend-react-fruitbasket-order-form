function Input({name, type, text, state, handleOnChange, className, spanClass, inputClassName}) {

  return (
    <label className={className} htmlFor={name}>
      <span className={`${spanClass} text-before-input `}>{text}</span>
      <input
        id={name}
        className={inputClassName}
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