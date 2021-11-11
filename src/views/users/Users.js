import React, { Component } from 'react';
 import MainWrapper from '../../layout/Main';
 import {Image, Button, Space } from 'antd';
import headpic from '../../assets/pic/head.jpg'


class  Collection extends Component {
   
  state={
    show:true,
    random:'',
    setRandom:''
  }
addd=()=>{
 const {show}=this.state
  this.setState({
    show:!show,
  })

}
  render() {
     return (
       <div>
       <MainWrapper>
         <div>
          
            <p style={{display:this.state.show?'flex':'none'}}>什么也没有哦</p>
           < button  onClick={this.addd}> 去看看/返回</button>
           <p style={{display:this.state.show?'none':''}}>海贼王</p>
            <p style={{display:this.state.show?'none':'flex'}}>火影忍者</p>
            <p style={{display:this.state.show?'none':'flex'}}>死神</p>
           <Space  style={{display:this.state.show?'none':'flex'}} size={12}>
      <Image
        width={200}
        src={headpic}
        placeholder={
          <Image
            preview={false}
            src="headpic"
            width={200}
          />
        }
      />
      <Button
        type="primary"
        onClick={() => {
          
        }}
      >
        添加收藏
      </Button>
    </Space>
            
         </div>
       </MainWrapper>
     </div>
    )

     
  }
}

export default Collection;











