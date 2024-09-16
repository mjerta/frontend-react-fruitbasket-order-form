function TextArea({name, state, rows, handleOnChange,textLabel,register}) {
  return (
    <>
      <label htmlFor={name}>{textLabel}</label>
      <textarea
        id={name}
        {...register(name)}
        rows={rows}
        onChange={handleOnChange}
        defaultValue={state}
      >
    </textarea>
    </>
  )
}

export default TextArea;