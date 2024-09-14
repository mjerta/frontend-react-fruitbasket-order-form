function RadioButtons({options,handleOnChange, state, className}) {
  return (
    <div className={`radio-buttons ${className}`}>
      {options.map((option, index) => (
          <label key={option + index} htmlFor={option}>
            <input
              type="radio"
              id={index}
              name="radioInput"
              value={option}
              checked={state === option}
              onChange={handleOnChange}
            />
            {option}
          </label>
        )
      )
      }
    </div>
  )
}

export default RadioButtons;