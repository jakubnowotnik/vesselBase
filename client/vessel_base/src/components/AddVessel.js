import { useState } from "react";
import Vessel from '../models/Vessel'

const AddVessel = ({ handleSubmit }) => {

  const veselTypes = [
    "Bulk Carriers",
    "General Cargo",
    "Crude Carriers",
    "Reefer Vessels"]
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [type, setType] = useState(0);
  const [grossTonnage, setGrossTonnage] = useState('');

  const newVessel = new Vessel({ name, origin, destination, type: veselTypes[type], grossTonnage })

  const submitHandle = (e) => {
    setIsSending(true);
    handleSubmit(e, newVessel, () => { setIsSending(false) })
  }

  return (
    <div className="addVessel">
      <h2>Add new vessel to the data base</h2>
      <form onSubmit={submitHandle}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required />

        <label>Origin:</label>
        <textarea
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required />

        <label>Destination:</label>
        <textarea
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required />

        <label>Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value={0}>{veselTypes[0]}</option>
          <option value={1}>{veselTypes[1]}</option>
          <option value={2}>{veselTypes[2]}</option>
          <option value={3}>{veselTypes[3]}</option>
        </select>

        <label>GrossTonnage:</label>
        <input
          type="text"
          value={grossTonnage}
          onChange={(e) => setGrossTonnage(e.target.value)}
          required />
        <button type='submit'>{isSending ? 'Adding vessel ...' : 'Add Vessel'}</button>

      </form>
    </div>
  );
}

export default AddVessel;