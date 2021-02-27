import { API } from './env/API'
import useFetch from "./services/useFetch";
import postData from "./services/postData";
import deleteData from "./services/deleteData"
import Vessel from "./components/Vessel";
import AddVessel from "./components/AddVessel";
import { useState } from "react";
import Vesseltype from './models/Vessel'


const Home = ({ handleAlert }) => {
  const [reload, setReload] = useState(false);
  const [showAddVessel, setShowAddVessel] = useState(false);
  const { data, isLoading, error } = useFetch(API.GET.vesselList, Vesseltype, reload)


  const handleClick = () => {
    setShowAddVessel(true)
  }

  const handleDelete = (id) => {
    // setData(data.filter(vessel => vessel.id !== id))
    deleteData(API.DELETE.vessel(id)).then((status) => {
      handleAlert(status)
      setReload(!reload)
    })

  }

  const handleSubmit = (e, data, handleLoading) => {

    e.preventDefault()
    postData(API.POST.vessel, data).then((status) => {
      handleLoading();
      handleAlert(status)
      setShowAddVessel(false)
      setReload(!reload)
    })
  }


  return (
    <div className="home">
      { error && <div style={{ textAlign: "center", color: 'red' }}>{error}</div>}
      { isLoading && <div>Loading ...</div>}
      {!showAddVessel && <button onClick={handleClick}>Add Vessel</button>}
      {showAddVessel && <AddVessel handleSubmit={handleSubmit} />}
      { data && data.map((vessel) => (
        <Vessel key={vessel.id} data={vessel} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Home;