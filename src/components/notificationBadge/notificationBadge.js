import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import Styles from "./notificationBadge.module.css";

const NotificationBadge = () => {
  const tweets = useSelector((state) => state.tweets);
  return (
    <div className={Styles.container}>
      <IoIosNotificationsOutline className={Styles.icon} />
      <p className={Styles.count}>{tweets.length}</p>
    </div>
  );
};

export default NotificationBadge;
