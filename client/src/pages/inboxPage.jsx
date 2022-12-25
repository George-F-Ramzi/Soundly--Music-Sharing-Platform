import React from "react";
import "../css/inbox.css";
import NotificationCard from "../elements/notificationCard";

const InboxPage = () => {
  return (
    <div>
      <div className="inbox">
        <h4 className="inbox__title">Notifications</h4>
        <div className="scroll">
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
