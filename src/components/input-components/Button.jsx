function Button({handleOnClick, className, type, buttonText}) {
  return (
    <button type={type} onClick={handleOnClick} className={className}>
      {buttonText}
    </button>
  )
}

export default Button