import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  const [counter, setCounter] = useState(0)
  const [data, setData] = useState('')

  useEffect(() => {
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then((data) => console.log({data}))
  }, {})

  const handleDecrease = () => {
    setCounter(() => counter - 1)
  }

  const handleIncrease = () => {
    setCounter(() => counter + 1)
  }

  return (
    <div className="App">
      <button onClick={handleDecrease}>-</button>
      <h1> {counter} </h1>
      <button onClick={handleIncrease}>+</button>
      <p>Hello</p>
    </div>
  );
}

export default App;
