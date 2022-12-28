import React from "react";
import { useLoaderData } from "react-router-dom";
import "../css/inbox.css";
import NotificationCard from "../elements/notificationCard";

const InboxPage = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="inbox">
        <h4 className="inbox__title">Notifications</h4>
        <div className="scroll">
          {data.map((card, index) => (
            <NotificationCard key={index} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
