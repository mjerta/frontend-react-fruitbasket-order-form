import isAmountAboveNull from "../../helper-functions/isAmountAboveNull.js";

function Box({handleOnClick, icon, printedName, state, fruitName}) {

  const className = isAmountAboveNull(state) && "box-positive";
  return (

    <div
      className=
        {`box 
          ${className}
        `}
    >
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