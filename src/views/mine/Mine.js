/* eslint-disable */
import React, { Component } from 'react';
import './Mine.scss';
import MainWrapper from '../../layout/Main';
import {
  Button, Modal, Form, Input, Checkbox,message
} from 'antd';
import { loadApplyInfoWithOutLogin } from '../../api/request/apply';
import PropTypes from 'prop-types'; 



const notEmpty = (val) =>{
  return {
    required: true,
    message: `${val || '该项'}不能为空`
  }
}

class Mine extends Component {

  formRef = React.createRef();
  
   
  state = {
    isShowModal: false,
    checkOptions: [
      { label: '番剧', value: 'anime' },
      { label: '游戏', value: 'game' },
      { label: '原创', value: 'yuanchuang' },
    ],
    formInitialValues: {
      habit:['game']
    }
  }

  loadApplyInfo=() =>{
    const uuid = '3d314c7811e444e594f981b477c4ca95';
    loadApplyInfoWithOutLogin(uuid)
      .then(res => {
        console.log('res', res)
      }).catch(err => {
        console.error('err', err)
      })
  }

  openModal=() =>{
    this.setState({
      isShowModal: true
    })
  }

  closeModal=()=> {
    this.setState({
      isShowModal: false
    });
    setTimeout(() => {
      message.success('信息提交成功！~')
    },500)
  }

  /* 表单确认按钮 */
  handleConfirm=() =>{
    console.log('弹窗确认');
    this.closeModal();
  }

  /* 表单通过校验 */
  formConfirm=(values)=> {
    console.log('this is form values', values);
    this.openModal();
  }

  /* 表单校验失败 */
  formConfirmfail=(errInfo) =>{
    console.log('this is form confirm fails err msg', errInfo)
    message.error('请完善表单信息后提交！~')
  }

  /* 复选框变化 */
  checkboxChange=(val) =>{
    console.log('checkboxChange', this.formRef)
    this.formRef.current.setFieldsValue({
      str: val
    })
  }



  componentDidMount() {
     
  }

  render() {

    return (
      <div>
        <MainWrapper>
          <div>
             
            <p>请设置您的个人信息！</p>
            <div className="content-wrapper">
              <Form
              ref={this.formRef}
                labelCol={{ span: 4, offset: 3 }}
                wrapperCol={{ span: 14 }}
                onFinish={this.formConfirm}
                onFinishFailed={this.formConfirmfail}
                initialValues={this.state.formInitialValues}
              >
                <Form.Item
                  label="姓名"
                  name="idName"
                  rules={[
                    notEmpty('姓名'),
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="密码"
                  name="password"
                  rules={[
                    notEmpty('密码')
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="兴趣"
                  name="habit"
                  rules={[
                    notEmpty()
                  ]}
                >
                  <Checkbox.Group
                    onChange={this.checkboxChange}
                    options={this.state.checkOptions}
                  ></Checkbox.Group>
                </Form.Item>

                <Form.Item
                  label="测试"
                  name="str"
                >
                  <Input />
                </Form.Item>

                <Form.Item labelCol={{ span: 0, }} wrapperCol={{ span: 8, offset:7 }}>
                  <div className="form-btns-group">
                    <Button type="primary" htmlType="submit">提交</Button>
                    <Button type="primary" danger htmlType="reset">重置</Button>
                  </div>
                </Form.Item>
              </Form>
            </div>


            <Button onClick={this.openModal} >测试</Button>
            <Modal ref={this.props.ref} title="测试弹窗" visible={this.state.isShowModal} onOk={this.handleConfirm} onCancel={this.closeModal} >
              <div className="modal-wrapper">
               这里是弹窗中的内容:{this.props.name}
              </div>
            </Modal>
          </div>
        </MainWrapper>
      </div>
    )
  }
}


Mine.propTypes = {
  name: PropTypes.string, // props.name必须为string类型，其他请参考https://react.docschina.org/docs/typechecking-with-proptypes.html

}

 
Mine.defaultProps = {
  name: '欢迎回来'
}

export default Mine;