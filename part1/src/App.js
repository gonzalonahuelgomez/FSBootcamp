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
  const [click, setClick] = useState([])

  const handleClickIncrement = () => {
    updateContador(contador + 1)
    setClick(click + 1)
  }
  const handleClickDecrement = () => {
    updateContador(contador - 1)
    setClick(click + 1)
  }
  const handleClickReset = () => {
    // updateContador(contador - contador)
    updateContador(0)
    setClick(click + 1)
  }

  // setInterval(() => {
  //   updateContador(contadorValue+1)
  // }, 2000)
  // const course = {
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14
  //     }
  //   ]
  // }


  // return (
  //   <>
  //   <Header course={course} />
  //   <Content course={course}/>
  //   <Total course={course}/>
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
        <p>{click.length}</p>
    </>
  )

}

export default App;
