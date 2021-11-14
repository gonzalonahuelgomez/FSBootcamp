import './App.css';
// import Content from './Content';
// import Header from './Header.jsx';
// import Total from './Total';

// function App() {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <>
//     <Header course={course} />
//     <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
//     <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
//     </>
//   );
// }

const course = 'Half Stack application development'
const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

const App = () => {
  
  return (
    <div>
      <h1>{course}</h1>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

export default App;
