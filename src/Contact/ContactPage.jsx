import React from "react";
import styles from "./ContactPage.module.css";
import Sidebar from "../Sidebar/Sidebar";

const ContactPage = () => {
  return (
    <div className={styles.flexContainer}>
      <Sidebar />
    </div>
  );
};

export default ContactPage;
