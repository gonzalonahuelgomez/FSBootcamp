import './App.css';
import { useState } from 'react';
// import Content from './Content';
// import Header from './Header.jsx';
// import Total from './Total';

const App = () => {
  // const contador = useState(0)
  // const contadorValue = contador[0]
  // const updateContador = contador[1]
  const [contador, updateContador] = useState(0)
  const handleClickIncrement = () => {
    updateContador(contador + 1)
  }
  const handleClickDecrement = () => {
    updateContador(contador - 1)
  }
  const handleClickReset = () => {
    // updateContador(contador - contador)
    updateContador(0)
  }
  // setInterval(() => {
  //   updateContador(contadorValue+1)
  // }, 2000)
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // return (
  //   <>
  //   <Header course={course} />
  //   <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
  //   <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
  //   </>
  // );
  return (
    <>
      <h1>{contador}</h1>
      <button onClick={ handleClickIncrement
        // () => { 
        // updateContador(contador + 1)
        // updateContador(prevContador => {
        //   return prevContador + 1
        // })
        // }
        }>Incrementar</button>
        <button onClick={ handleClickDecrement }>Decrementar</button>
        <button onClick={ handleClickReset }>Reset</button>

    </>
  )

}

export default App;
