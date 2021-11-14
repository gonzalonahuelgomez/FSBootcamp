// const Header = ({course}) =>  <h1>{course}</h1>  Forma Corta

const Header = (props) => {
    return (
        <div>
           <h1>{props.course}</h1> 
        </div>
    )
}

export default Header
