

const Total = ({parts}) => {   
    
    const total = parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)

    return (
        <h4>Total of {total} exercises </h4>
    )
}

const Part = ({part}) => {
    return (
      <p>{part.name} {part.exercises} </p>
    )
}

const Content = ({parts}) => {
    console.log(parts)
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
    )
}

const Header = ({text}) => {
    console.log(text)
    return (
      <h2> {text} </h2>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header text={course.name} Header/>
            <Content parts={course.parts} Content/>
            <Total parts={course.parts} Total/>
        </div>
    )
}

export default Course