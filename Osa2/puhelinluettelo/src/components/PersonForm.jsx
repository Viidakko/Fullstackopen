const PersonForm = ({submit, name, number, handleText, handleNumber}) => {
    return (
        <form onSubmit={submit}>
        <div >
          name: <input 
            value={name}
            onChange={handleText}
          />
        </div>
        <div>
          number: <input
            value={number}
            onChange={handleNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}


export default PersonForm