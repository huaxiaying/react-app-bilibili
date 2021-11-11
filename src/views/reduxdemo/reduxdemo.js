import React, { Component } from 'react';
import MainWrapper from '../../layout/Main';
import { Button } from 'antd';
import { addTodo, setUserInfo, fetchPosts } from '../../redux/action';
import { connect } from 'react-redux'
import { message } from 'antd';

class ReduxDemo extends Component {

 state = {
    index: 12345678
  }
  componentDidMount() {
     
    this.props.loadInfos();
  }

  handleClick=() =>{
    let nowIndex = this.state.index;
    nowIndex++;
    this.setState({
      index: nowIndex
    })
    const params = `uid${nowIndex}`
    this.props.onAddClick(params);
   
  }

   
  handleSetUserinfo=()=> {
    const actionInfo = {
      name: '画下影',
      level: '6'
    }
    this.props.setInfo(actionInfo);
    message.success('登录账户信息已变更')
  }

  render() {

    return  (
      <MainWrapper>
        <div>试试redux：</div>
        <div className="reduxWrapper">
          {
            this.props.todos.map(item => (
              <div key={item.id}>
                id:<span>{item.id}</span> == text: <span>{item.text}</span> == completed<span>{item.completed}</span>
              </div>
            ))
          }
        </div>
        <div className="addTodoItemWrapper">
          <Button onClick={this.handleClick}>添加</Button>
        </div>

        <div className="btn-item">
          <Button onClick={this.handleSetUserinfo}>设置用户信息</Button>
        </div>
        <div className="applyInfo">
          
          <div>
            
          
          
          </div>

        </div>
      </MainWrapper>
    )

   
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    applyInfo: state.postsBySubreddit.applicationInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (val) => {
      dispatch(addTodo(val))
    },
    setInfo: (val) => {
      dispatch(setUserInfo(val))
    },
    loadInfos: () => {
      dispatch(fetchPosts('applicationInfo'))
    }
  }
}

ReduxDemo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxDemo);

export default ReduxDemo;