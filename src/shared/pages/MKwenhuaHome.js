import React from 'react';
import 'stylesheet/Landing.css';
import TopNav from 'component/TopNav'

class MKwenhuaHome extends React.PureComponent {
  render() {
    const {main, dispatch} = this.props;
    return (
      <section className='container'>
        <TopNav />
        <h4 className='self-intro'>
          Welcome and stuff
        </h4>
        <div className='row'>
          <div className='col-md-4'>
            <div className='landing-direction-link'>
              Projects
            </div>
          </div>
          <div className='col-md-4'>
            <div className='landing-direction-link'>
              GitHub
            </div>
          </div>
          <div className='col-md-4'>
            <div className='landing-direction-link'>
              Technical Skills
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MKwenhuaHome;
