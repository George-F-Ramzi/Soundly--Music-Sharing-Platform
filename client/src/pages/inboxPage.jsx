import React from "react";
import NavBar from "../elements/navBar";
import "../css/inbox.css";
import NotificationCard from "../elements/notificationCard";

const InboxPage = () => {
  return (
    <div>
      <NavBar />
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
