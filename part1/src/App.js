import './App.css';
import { useState } from 'react';
// import Display from './Display';
// import Content from './Content';
// import Header from './Header.jsx';
// import Total from './Total';
const Hello = ({ first, second = 30 }) => {
  const bornYear = () => new Date().getFullYear() - second

  return (
    <div>
      <p>
        Hello {first}, you are {second} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={ handleClick }>{ text }</button>

const Display = ({contador}) => <h1>{contador}</h1>

const App = () => {
  // const contador = useState(0)
  // const contadorValue = contador[0]
  // const updateContador = contador[1]
  const [contador, updateContador] = useState(0)
  const [click, setClick] = useState([])
  const [clicks, setClicks] = useState({left: 0, right: 0})

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

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
      {/* <h1>{contador}</h1> */}
      <Display contador={contador}/>
      <Button handleClick={ handleClickIncrement } text="Incrementar" />
      <Button handleClick={ handleClickDecrement } text="Decrementar" />
      <Button handleClick={ handleClickReset } text="Reset" />
      <p>{click.length}</p>
      <Hello name="Ort"/>
      {clicks.left}
      <Button handleClick={ handleLeftClick } text="Left" />
      <Button handleClick={ handleRightClick } text="Right" />
      {clicks.right}
    </>
  )

}

export default App;
