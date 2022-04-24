import DeleteButton from "./DeleteButton";
import personServices from "../services/persons"

const deletePerson = (person) => {
    if(window.confirm(`Delete ${person.name}`)) {
        personServices.deletePerson(person.id)
        window.location.reload()
    }
}
const Person = ({person}) => <li>{person.name} {person.number}<DeleteButton text={"delete"} handleClick={()=>deletePerson(person)}/></li>

export default Person