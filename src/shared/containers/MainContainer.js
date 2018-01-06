import React from 'react';
import 'bootstrap-grid';
import 'stylesheet/Main.css';
import { connect } from 'react-redux';
import MKwenhuaHome from 'page/MKwenhuaHome'
import { withRouter } from 'react-router'
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


const selectState = (state) => state;

class MainContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { main, dispatch} = this.props;
    return (
      <Switch>
          <Route exact path='/' component={(props) => (
            <MKwenhuaHome main={main} dispatch={dispatch}/>
          )}/>
      </Switch>
    )
  }
}

export default withRouter(connect(selectState)(MainContainer));
