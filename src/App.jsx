import './App.css'
import {useState} from "react";
import Box from "./components/Box.jsx";

function App() {
  const initialFruitValue = {
    aardbei: 0, banaan: 0, appel: 0, kiwi: 0
  }
  const [amount, setAmount] = useState(
    initialFruitValue
  )

  function handleOnClick(e, value) {
    e.target.name === "minus" && setAmount({
      ...amount,
      [value]: amount[value] > 0 ? amount[value] - 1 : 0
    })
    e.target.name === "plus" && setAmount({
      ...amount,
      [value]: amount[value] + 1
    })
  }

  function handleReset() {
    setAmount(initialFruitValue)
  }

  return (
    <div className="wrapper">
      {console.log(amount.aardbei < 0)}
      <h1>Fruitmand bezorgservice</h1>
      <Box
      />
      <div className="box">
        <span className="icon">🍓</span>Aarbeien
        <button name="minus" onClick={(e) => handleOnClick(e, "aardbei")}
                className="minus">-</button>
        {amount.aardbei}
        <button name="plus" onClick={(e) => handleOnClick(e, "aardbei")}
                className="plus">+
        </button>
      </div>
      <div className="box">
        <span className="icon">🍌</span>Aarbeien
        <button name="minus" onClick={(e) => handleOnClick(e, "banaan")}
                className="minus">-</button>
        {amount.banaan}
        <button name="plus" onClick={(e) => handleOnClick(e, "banaan")}
                className="plus">+
        </button>
      </div>
      <div className="box">
        <span className="icon">🍏</span>Aarbeien
        <button name="minus" onClick={(e) => handleOnClick(e, "appel")}
                className="minus">-</button>
        {amount.appel}
        <button name="plus" onClick={(e) => handleOnClick(e, "appel")}
                className="plus">+
        </button>
      </div>
      <div className="box">
        <span className="icon">🥝</span>Aarbeien
        <button name="minus" onClick={(e) => handleOnClick(e, "kiwi")}
                className="minus">-</button>
        {amount.kiwi}
        <button name="plus" onClick={(e) => handleOnClick(e, "kiwi")}
                className="plus">+
        </button>
      </div>
      <button onClick={handleReset} className="reset">
        Reset
      </button>
    </div>
  )
}

export default App