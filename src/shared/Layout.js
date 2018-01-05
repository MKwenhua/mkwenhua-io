import React from 'react';

import 'bootstrap-grid';
import 'stylesheet/Main.css';
import { connect } from 'react-redux';
import DashboardContainer from 'container/DashboardContainer'
import SharedLinkContainer from 'container/SharedLinkContainer'

const selectState = (state) => state;

class Layout extends React.PureComponent {
  constructor(props){
    super(props);
  }
  render() {
    console.log('props', this.props)
    return this.props.container === 'dashboard' ? <DashboardContainer {...this.props}/> :  <SharedLinkContainer {...this.props}/>
  }
}

export default connect(selectState)(Layout);
