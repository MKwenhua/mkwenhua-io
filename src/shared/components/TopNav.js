import React from 'react';
import 'stylesheet/TopNav.css';


class TopNav extends React.PureComponent {
  render() {
    return (
      <nav className='top-nav'>
        <div className='right-button'>
          <img
            className='button-face'
            height="60"
            src='https://res.cloudinary.com/dho6ptry6/image/upload/v1515200566/orangutan_face_afvtwf.png'/>
        </div>
      </nav>
    )
  }
}

export default TopNav;
