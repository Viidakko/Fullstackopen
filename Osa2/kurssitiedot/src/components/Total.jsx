import Part from "./Part"

const Total = ({parts}) => {   
    
    const total = parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)

    return (
        <h4>Total of {total} exercises </h4>
    )
}

export default Total