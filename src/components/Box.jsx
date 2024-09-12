import {useState} from "react";

function Box({props}) {

  const [amount, setAmount] = useState(0)

  function handleOnClick(e) {
    e.target.name === "minus" && setAmount(amount - 1)
    e.target.name === "plus" && setAmount(amount + 1)
  }

  return (

    <div className="box">
      <span className="icon">🍓</span>Aarbeien
      <button name="minus"
              onClick={handleOnClick}
              className="minus">-</button>
      {amount}
      <button name="plus" o
              onClick={handleOnClick}
              className="plus">+
      </button>
    </div>
  )
}

export default Box;