const Content = ({course}) => {
    let {parts} = course
      return (
        <>
            <p>
                {parts[0].name} {parts[0].exercises}
            </p>
            <p>
                {parts[1].name} {parts[1].exercises}
            </p>
            <p>
                {parts[2].name} {parts[2].exercises}
            </p>
        </>
    )
}

// const Content = (props) => {
//     return (
//         <>
//             <p>
//                 {props.part1} {props.exercises1}
//             </p>
//             <p>
//                 {props.part2} {props.exercises2}
//             </p>
//             <p>
//                 {props.part3} {props.exercises3}
//             </p>
//         </>
//     )
// }

export default Content
