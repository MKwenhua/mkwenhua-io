import React from 'react';
import styles from 'stylesheet/TopNav.css';

class TopNav extends React.PureComponent {
  render() {
    return (
      <nav className={styles.topNav}>
        <div className={styles.rightButton}>
          <img
            className={styles.buttonFace}
            height="60"
            src='https://dq8llwxgkllay.cloudfront.net/site_icon_cube.png'/>
        </div>
      </nav>
    )
  }
}

export default TopNav;
