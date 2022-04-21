import Person from './Person'

const Persons = ({persons, filter}) => { 
    return(
        persons
            .filter((person) => 
                person.name.toLowerCase().includes(filter.toLowerCase()) //person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            )
            .map((filteredPerson) => 
                (<Person key={filteredPerson.id} person={filteredPerson} />)
            )
    )
}

export default Persons