
// const Total = ({exercises1, exercises2, exercises3}) =>  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>  Forma Corta

const Total = (props) => {
    console.log(props)
    return (
        <div>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}

export default Total
