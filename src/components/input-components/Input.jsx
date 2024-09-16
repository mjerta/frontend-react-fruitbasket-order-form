function Input({
                 name,
                 type,
                 text,
                 className,
                 spanClass,
                 inputClassName,
                 register,
                 required,
                 minAge,
                 maxAge,
                 errors,
                 maxLength,
                 errorMessage,
                 pattern
               }) {
  return (
    <>
      <label className={className ? className : ""} htmlFor={name}>
        <span className={`${spanClass ? spanClass: ""} text-before-input `}>{text}</span>
        <input
          id={name}
          className={inputClassName}
          {...register(name, {
            required:
              {
                value: required,
                message: errorMessage ? errorMessage : `${text} moet ingevuld zijn.`
              },
            maxLength: {
              value: maxLength,
              message: `De lengte van ${text} is te lang`
            },
            min: {
              value: minAge,
              message: `Leeftijd moet groter zijn dan ${minAge}`
            },
            max: {
              value: maxAge,
              message: `Leeftijd mag niet groter zijn dan ${maxAge}`
            },
            pattern: {
              value: pattern,
              message: "invalide postcode"
            }

          })}
          type={type}
        />
      </label>
      <p className="error-message">{errors[name] && errors[name].message}</p>
    </>
  )
}

export default Input;