function TextArea({name, state, rows, handleOnChange,textLabel}) {
  return (
    <>
      <label htmlFor={name}>{textLabel}</label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        onChange={handleOnChange}
        defaultValue={state}
      >
    </textarea>
    </>
  )
}

export default TextArea;