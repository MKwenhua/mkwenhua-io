import React from 'react';
import {
  Link
} from 'react-router-dom'

class BuzzwordPage extends React.PureComponent {
  render() {
    const {main, dispatch} = this.props;
    return (
      <section className='container'>
        <h4 className='self-intro'>
          Buzzwords!
        </h4>
        <Link to='/'>Go Back</Link>
      </section>
    )
  }
}

export default BuzzwordPage;
