function RadioButtons({options, className, register}) {
  return (
    <div className={`radio-buttons ${className}`}>
      {options.map((option, index) => (
          <label key={option + index} htmlFor={option}>
            <input
              type="radio"
              id={index}
              name="radioInput"
              value={option}
              {...register("radioInput", {
                required: true
              })}
              // onChange={handleOnChange}
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