import React from "react";
import styles from "./AboutPage.module.css";
import Sidebar from "../Sidebar/Sidebar";

const AboutPage = () => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.slideInBottom}>
        <Sidebar />
      </div>
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
          ullamcorper dignissim cras. Mi quis hendrerit dolor magna eget est.
          Sit amet nisl suscipit adipiscing bibendum. Vitae purus faucibus
          ornare suspendisse sed. Arcu felis bibendum ut tristique et egestas
          quis ipsum. Volutpat diam ut venenatis tellus in metus. Suspendisse in
          est ante in nibh. Ultrices vitae auctor eu augue ut lectus arcu
          bibendum at. Blandit volutpat maecenas volutpat blandit. Consectetur
          lorem donec massa sapien faucibus et molestie. Purus in massa tempor
          nec feugiat nisl pretium. Curabitur vitae nunc sed velit dignissim
          sodales ut eu sem. Urna id volutpat lacus laoreet non. Senectus et
          netus et malesuada fames ac turpis egestas. Sit amet purus gravida
          quis blandit turpis. In est ante in nibh mauris.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
