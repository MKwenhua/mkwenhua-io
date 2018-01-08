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
            src='https://res.cloudinary.com/dho6ptry6/image/upload/v1515200566/orangutan_face_afvtwf.png'/>
        </div>
      </nav>
    )
  }
}

export default TopNav;
