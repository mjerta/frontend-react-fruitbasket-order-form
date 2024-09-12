function Box({handleOnClick, icon, printedName, state, fruitName}) {

  // const [amount, setAmount] = useState(0)

  // function handleOnClick(e) {
  //   e.target.name === "minus" && setAmount(amount > 0 ?  amount - 1  : 0)
  //   e.target.name === "plus" && setAmount(amount + 1)
  // }
  return (

    <div className="box">
      <span className="icon">{icon}</span>{printedName}
      <button
        name="minus"
        data-fruits={fruitName}
        onClick={handleOnClick}
        className="minus">-
      </button>
      {state}
      <button
        name="plus"
        data-fruits={fruitName}
        onClick={handleOnClick}
        className="plus">+
      </button>
    </div>
  )
}

export default Box;