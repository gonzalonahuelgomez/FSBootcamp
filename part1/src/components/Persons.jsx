import Person from './Person'

const Persons = ({persons, filter}) => { 
    //persons.map(e => e.name.toLowerCase()).filter(i => i.indexOf(filter) !== -1)
    return(
        persons
            .filter((person) => 
                person.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((filteredPerson) => 
                (<Person key={filteredPerson.id} person={filteredPerson} />)
            )
    )
}

export default Persons