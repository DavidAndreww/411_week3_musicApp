import React from "react";

const Notifications = ({ alerts }) => {
  return (
    <div className="notifications">
      <h2>Notifications:</h2>
      <ul>
        {alerts.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Notifications;
