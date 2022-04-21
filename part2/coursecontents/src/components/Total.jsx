const Total = ({parts}) => <p>total of {parts.reduce((carry, part) => carry + part.exercises, 0)} exercises</p>

export default Total