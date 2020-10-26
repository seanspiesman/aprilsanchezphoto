import React from "react";
import styles from "./AboutPage.module.css";
import Sidebar from "../Sidebar/Sidebar";

const AboutPage = () => {
  return (
    <div className={styles.flexContainer}>
      <Sidebar style={styles.slideInBottom} />
      <div className={styles.flexItemRight}>
        <h3 className={styles.slideIn}> Behind the Lense</h3>
        <p className={styles.slideInBottom}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi
          tincidunt augue interdum velit euismod in pellentesque. Turpis egestas
          pretium aenean pharetra magna ac. Lacus viverra vitae congue eu
          consequat ac felis donec et. Tellus pellentesque eu tincidunt tortor
          aliquam nulla facilisi cras. Ac tincidunt vitae semper quis lectus
          nulla. Velit scelerisque in dictum non. Felis bibendum ut tristique et
          egestas. Pretium lectus quam id leo. Diam in arcu cursus euismod quis
          viverra.
        </p>
        <img
          className={styles.aboutImage}
          src="https://images.unsplash.com/photo-1596213340296-240f81dde687?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />

        <p className={styles.slideInBottom}>
          Placerat in egestas erat imperdiet sed. Tincidunt lobortis feugiat
          vivamus at augue. Condimentum vitae sapien pellentesque habitant morbi
          tristique senectus et. Sodales ut eu sem integer. Sapien pellentesque
          habitant morbi tristique senectus. Phasellus faucibus scelerisque
          eleifend donec. Ullamcorper a lacus vestibulum sed arcu. Dolor sed
          viverra ipsum nunc aliquet bibendum enim facilisis. Donec adipiscing
          tristique risus nec feugiat in fermentum. Pulvinar neque laoreet
          suspendisse interdum consectetur. Duis ultricies lacus sed turpis
          tincidunt. Platea dictumst vestibulum rhoncus est pellentesque elit
          ullamcorper dignissim cras.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
