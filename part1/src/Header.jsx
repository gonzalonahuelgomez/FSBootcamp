// const Header = ({course}) =>  <h1>{course}</h1>  Forma Corta

const Header = ({course}) => {
    let {name} = course
    return (
        <div>
           <h1>{name}</h1> 
        </div>
    )
}

export default Header
