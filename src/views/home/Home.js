/* eslint-disable */
import React, { Component } from 'react';
import './Home.scss';
import MainWrapper from '../../layout/Main';
import { connect } from 'react-redux'
import axios from 'axios';
 
class Home extends Component {
state={
  words:''}
  componentDidMount(){
    this.shuaxin()
  }

shuaxin=()=>{axios.get('https://api.uixsj.cn/hitokoto/get').then(
  sus=>{ this.setState({
    words:sus.data
  })})}


  render() {

    return (
      <div>
        <MainWrapper>
          <div>
             
            <p>欢迎访问本网站！~</p>
            <p>一言:</p>
            <div>{this.state.words} </div>
        <button onClick={this.shuaxin}>刷新</button>

            <div className="redux-data-wrapper">
              <div className="reduxWrapper">
                {
                  this.props.todos.map(item => (
                    <div key={item.id}>
                      id:<span>{item.id}</span> == text: <span>{item.text}</span> == completed<span>{item.completed}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </MainWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};


Home = connect(
  mapStateToProps
)(Home);
export default Home;