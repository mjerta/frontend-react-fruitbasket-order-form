import './App.css'
import {useState} from "react";
import Box from "./components/Box.jsx";
// Objects
import fruits from "./constants/fruits.js";

// Helper functions
import getTotalValue from "./helper-functions/getTotalValue.js";

function App() {
  // reusable initial state
  const initialFruitValue = {
    strawberry: 0, banana: 0, apple: 0, kiwi: 0
  }

  // state
  const [amount, setAmount] = useState(
    initialFruitValue
  )
  // Reset state
  function handleReset() {
    setAmount(initialFruitValue)
  }

  function handleOnClick(e) {
    const fruitName = e.target.getAttribute("data-fruits");
    e.target.name === "minus" && setAmount({
      ...amount,
      [fruitName]: amount[fruitName] > 0 ? amount[fruitName] - 1 : 0
    })
    e.target.name === "plus" && setAmount({
      ...amount,
      [fruitName]: amount[fruitName] + 1
    })
  }

  return (
    <div className="wrapper">
      <h1>Fruitmand bezorgservice</h1>
      {
        fruits.map((fruit) => (
            <Box key={fruit.name}
                 icon={fruit.icon}
                 fruitName={fruit.name}
                 handleOnClick={handleOnClick}
                 printedName={fruit.printedName}
                 state={amount[fruit.name]}
            />
          )
        )
      }
      <button onClick={handleReset} className="reset">
        Reset
      </button>
    </div>
  )
}

export default App