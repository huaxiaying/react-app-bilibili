import React, { Component } from 'react';
import Left from './Left';
import Right from './Right';
 import './Main.scss';
import { appRoutes } from '@router/routes';

class MainWrapper extends Component {

  
  state = {
    appRouets: appRoutes,
  }
  render() {

    return(
      <div className="wrapper-box">
        <Left routesList={this.state.appRouets} />
        <Right>
          {this.props.children}
        </Right>
      </div>  
    )

    
  }
}

export default MainWrapper;