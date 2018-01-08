import React from 'react';
import 'stylesheet/Global.css';
import {connect} from 'react-redux';
import MKwenhuaHome from 'page/MKwenhuaHome'
import BuzzwordPage from 'page/BuzzwordPage'
import ProjectsPage from 'page/ProjectsPage'
import GitPage from 'page/GitPage'
import TopNav from 'component/TopNav'
import {withRouter} from 'react-router'
import {Route, Link, Switch, Redirect} from 'react-router-dom'



const selectState = (state) => state;

class MainContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {main, dispatch} = this.props;
    console.log('MainContainer', this.props)
    return (
      <section>
        <TopNav/>
        <Switch>
          <Route exact path='/'>
            <MKwenhuaHome location={this.props.location}/>
          </Route>
          <Route exact path='/buzzwords'>
            <BuzzwordPage/>
          </Route>
          <Route exact path='/git'>
            <GitPage/>
          </Route>
          <Route exact path='/projects'>
            <ProjectsPage main={main} dispatch={dispatch}/>
          </Route>
        </Switch>
      </section>
    )
  }
}

export default withRouter(connect(selectState)(MainContainer));
