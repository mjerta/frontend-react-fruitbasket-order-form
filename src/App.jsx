import './App.css'
import {useState} from "react";

// Components
import Box from "./components/main-components/Box.jsx";

// Objects
import fruits from "./constants/fruits.js";

// Helper functions
import getTotalValue from "./helper-functions/getTotalValue.js";
import SubForm from "./components/main-components/SubForm.jsx";
import Button from "./components/input-components/Button.jsx";

function App() {

  // reusable initial state
  const initialFruitValue = {
    strawberry: 0, banana: 0, apple: 0, kiwi: 0
  }

  // state
  const [amount, setAmount] = useState(
    initialFruitValue
  )

  // All handles on top level(app.jsx)
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

  function handleOnSubmit(data) {
    console.log(data)
    console.log(amount)
    console.log(getTotalValue(amount))
  }

  return (
    <>
      <div className="wrapper">
        <header>
          <h2>Fruitmand Store</h2>
        </header>
        <main>
          <div className="box-container">
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
            <Button
              className="reset main-button"
              handleOnClick={handleReset}
              buttonText={"Reset"}
            />
          </div>
          <div className="box-container">
            <SubForm
              handleOnSubmit={handleOnSubmit}
            />
          </div>
        </main>
      </div>
    </>
  )
}

export default App