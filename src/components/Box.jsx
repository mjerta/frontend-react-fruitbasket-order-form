function Box({handleOnClick, icon, printedName, state, fruitName}) {
  return (

    <div className="box">
      <span className="icon">{icon}</span><span
      className="printed-name">{printedName}</span>
      <button
        name="minus"
        data-fruits={fruitName}
        onClick={handleOnClick}
        className="minus fruit-btn">-
      </button>
      {state}
      <button
        name="plus"
        data-fruits={fruitName}
        onClick={handleOnClick}
        className="plus fruit-btn">+
      </button>
    </div>
  )
}

export default Box;