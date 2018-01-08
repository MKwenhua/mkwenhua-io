import React from 'react';
import {
  Link
} from 'react-router-dom'
import Landing from 'stylesheet/Landing.css';

class MKwenhuaHome extends React.PureComponent {
  render() {
    console.log('Landing', Landing)
    const {main, dispatch, location} = this.props;
    return (
      <section className={location.pathname === '/' ? 'slide-page-main' :  'slide-page-main out'}>
        <h4 className={Landing.selfIntro}>
          Welcome and stuff
        </h4>
        <div className='row'>
          <div className='col-md-4'>
            <Link to='/projects' className={Landing.landingDirectionLink}>
             <i className="fa fa-file-code-o" aria-hidden="true"></i>
              Projects
            </Link>
          </div>
          <div className='col-md-4'>
            <Link to='/git' className={Landing.landingDirectionLink}>
             <i className="fa fa-github" aria-hidden="true"></i>
              GitHub
            </Link>
          </div>
          <div className='col-md-4'>
            <Link to='/buzzwords' className={Landing.landingDirectionLink}>
              <i className="fa fa-indent" aria-hidden="true"></i>
              Technical Skills
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default MKwenhuaHome;
