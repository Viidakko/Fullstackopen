import Part from "./Part"

const Total = ({parts}) => {
    let total = 0
    parts.forEach(part => {
        total += part.exercises
    });
    return (
        <h4>Total of {total} exercises</h4>
    )
}

export default Total