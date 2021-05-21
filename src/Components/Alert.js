import React, { useContext } from "react";
import AlertContext from "../Context/alert/alertContext";

function Alert() {
  const context = useContext(AlertContext);
  return (
    context.alerts.length > 0 &&
    context.alerts.map((alert) => (
      <div key={alert.id}>
        <p style={{ color: alert.type }}>{alert.msg}</p>
      </div>
    ))
  );
}

export default Alert;
