const Person = ({name, number, delPerson}) => {
    return (
      <div>
        <p>
        {name} {number}
        <button onClick={delPerson}> delete </button>
        </p>
      </div>
    )
}

const Persons = ({persons, delPerson}) => {
    return (
        persons.map(person =>
            <Person key={person.id}
                    name={person.name} 
                    number={person.number} 
                    delPerson={() => delPerson(person.id)}/>
        )
    )
}

export default Persons