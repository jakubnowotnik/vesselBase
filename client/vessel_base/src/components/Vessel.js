const Vessel = ({ data, handleDelete }) => {

  const id = data.id;
  const name = data.name;
  const origin = data.origin;
  const destination = data.destination;
  const type = data.type;
  const grossTonnage = data.grossTonnage;


  return (
    <div className="vessel">
      <h2>Name: {name}</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          <p><span>origin: </span> {origin}</p>
          <p><span>destination:</span>  {destination}</p>
        </div>
        <div style={{ flexGrow: 1 }}>
          <p><span> type: </span>{type}</p>
          <p><span> grossTonnage: </span>{grossTonnage}</p>
        </div>
        <button onClick={() => handleDelete(id)}>X</button>
      </div>
    </div>
  );
}

export default Vessel;