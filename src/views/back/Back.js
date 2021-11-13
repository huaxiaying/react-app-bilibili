import React, { Component } from 'react';
import MainWrapper from '../../layout/Main';
import '../back/Back.scss'

class Users extends Component {

  render() {
    const UsersElement = (
       <div className="bilibili">
       <MainWrapper>
         <div>
            <a  href='https://www.bilibili.com/'>返回</a>
         </div>
       </MainWrapper>
     </div>
    )

    return UsersElement;
  }
}

export default Users;





