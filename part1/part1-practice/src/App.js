const App = () =>{
  console.log ("Hello from component!")

  const now = new Date()

  return (
    <div>
      <h1> Hello World </h1>
      <Hello name = "Henirq"/>
      <p> It is now {now.toString()} </p>
    </div>
  )
}

const Hello = (props) => {
  return (
    <>
      <p> Hello, {props.name} </p>
      <div> Test </div>
    </>
  )
}

export default App
