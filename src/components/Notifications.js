import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <h2>Notifications:</h2>
      <ul>
        {notifications.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Notifications;
