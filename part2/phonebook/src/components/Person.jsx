import DeleteButton from "./DeleteButton";

const Person = ({person, handleDelete}) => <li>{person.name} {person.number}<DeleteButton text={"delete"} handleClick={handleDelete}/></li>

export default Person