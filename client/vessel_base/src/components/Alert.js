import React, { useEffect, useRef, useState } from "react";


const Alert = (props) => {

  const id = props.name;
  const numberAlert = props.numberAlert;
  const prevNumberAlert = useRef();


  const [display, setdisplay] = useState('none');

  useEffect(() => {

    if (numberAlert !== prevNumberAlert.current && numberAlert > -1) {
      prevNumberAlert.current = numberAlert;
      setdisplay('flex');

      setTimeout(() => {
        setdisplay('none');
      }, 2500);
    }


  }, [numberAlert]);


  const alerts = ["Failed", "Success!"]


  const alertsStyles = [
    { backgroundColor: '#db9f94' },
    { backgroundColor: '#bddb94' }
  ]



  return (
    <div className="alert" style={{ ...alertsStyles[id], display: display }}>
      <h2>{alerts[id]}</h2>
    </div >
  );
}

export default Alert;