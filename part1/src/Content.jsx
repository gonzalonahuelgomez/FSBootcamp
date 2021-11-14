const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) =>  
<>
    <p>
        {part1} {exercises1}
    </p>
    <p>
        {part2} {exercises2}
    </p>
    <p>
        {part3} {exercises3}
    </p>
</>

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
