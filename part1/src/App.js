import './App.css';
import { useState } from 'react';
import Display from './Display';
// import Content from './Content';
// import Header from './Header.jsx';
// import Total from './Total';
const Hello = ({ name, age = 30 }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={ handleClick }>{ text }</button>
  )
}

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

  console.log(useState());

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
      {/* <h1>{contador}</h1> */}
      <Display contador={contador}/>
      <Button onClick={ handleClickIncrement } text="Incrementar" />
      <Button onClick={ handleClickDecrement } text="Decrementar" />
      <Button onClick={ handleClickReset } text="Reset" />
      <p>{click.length}</p>
      <Hello name="Ort"/>
    </>
  )

}

export default App;
