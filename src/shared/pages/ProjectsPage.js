import React from 'react';
import style from 'stylesheet/ProjectsPage.css';
import {
  Link
} from 'react-router-dom'

class ProjectsPage extends React.PureComponent {
  render() {
    console.log('ProjectsPage this.props', this.props);
    const {main, dispatch} = this.props;
    return (
      <section className='container'>
        <h4 className='self-intro'>
          Projects!
        </h4>
        <Link to='/'>Go Back</Link>
      </section>
    )
  }
}

export default ProjectsPage;
