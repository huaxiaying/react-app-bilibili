/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 import headpic from '../assets/pic/head.jpg'
 
class Left extends Component {

   
  state = {
    userRole: '',
    uid: '',
    Level: ''
  }
  componentDidMount() {
    this.setState({
      userRole: 'system',
      uid: '12345678',
      Level: '6'
    })
  }

  render() {
    return(
      <div className="left-box">
        <p className="left-title">个人空间</p>
        <div className="info-box">
          <div className="head-img-box">
           <img src= {headpic} alt=''></img>
          </div>
          <div className="info-text">
            <span>uid：</span>{this.state.uid}
          </div>
          <div className="info-text">
            <span>level:</span>{this.state.Level}
          </div>
        </div>
        <div className="nav-list">
          {
            this.props.routesList.map((item,index) => {
              const userRole = this.state.userRole;
              if(item.meta.role.indexOf(userRole) >= 0){
                return (
                  <div className="nav-item" key={index + new Date().toString()}>
                    <Link to={{pathname: `${item.path}`}} className="nav-title">
                      <span>{item.name}</span>
                    </Link>
                  </div>
                )
              } else {
                return null
              }
              
            })
          }
        </div>
      </div>
    );

    
  }
}

export default Left;