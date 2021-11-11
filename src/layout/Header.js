/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
 


class Header extends Component {



  render() {
    console.log(this.props)
    return(
      <div className="header-box">
        <div className="user-info-item avator">
          
          <Avatar size={50}>头像</Avatar  >
        </div>
        <div className="user-info-item">
          <div className="info">
            用户名：{this.props.userInfo.name}
          </div>
          <div className="info">
          level: {this.props.userInfo.level}
          </div>
        </div>
        </div>
    )

    
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user
  }
}

Header = connect(mapStateToProps)(Header);


export default Header;