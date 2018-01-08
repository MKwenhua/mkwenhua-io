import React from 'react';
import {
  Link
} from 'react-router-dom'

class GitPage extends React.PureComponent {
  render() {
    console.log('GitPage this.props', this.props);
    const {main, dispatch} = this.props;
    return (
      <section className='slide-page'>
        <h4 className='self-intro'>
          GIT!
        </h4>
        <Link to='/'>Go Back</Link>
      </section>
    )
  }
}

export default GitPage;
