import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => 
  <button style = {{display:'inline-block'}} onClick = {onClick}>
    {text}
  </button>

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter (counter + 1)
  const decreaseByOne = () => setCounter (counter - 1)
  const setToZero = () => setCounter (0)
  
  return (
    <div style={{ padding:10  }}>
      <Button onClick = {decreaseByOne} text = "-"/>
      <Button onClick = {setToZero} text = {counter}/>
      <Button onClick = {increaseByOne} text = "+"/>
    </div>
  )
}

export default App
