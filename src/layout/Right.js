import React, { Component } from 'react';
 import Header from './Header';

class Right extends Component {

  render() {
    return (
      <div className="right-box">
        <Header />
        <div className="content-box">
          {this.props.children}
        </div>
      </div>
    );

       
  }
}

export default Right;