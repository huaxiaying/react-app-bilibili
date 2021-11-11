/* eslint-disable */
import React, { Component } from 'react';
import { Form, Input, Button, Checkbox ,message} from 'antd';
import './Login.scss'
const notEmpty = (val) =>{
  return {
    required: true,
    message: `${val || '该项'}不能为空`
  }
}
class Login extends Component {

  
  state = {
    formInitialValues: {
      remember: true,
    }
  }   
log=(e)=>{
  message.success('3.2.1.返回去了')
  setTimeout(() => {window.history.back(-1)
    
  }, 3000);
 



}

  render() {

     return (
      <div className="login-wrapper">
        <Form
          name="login_form"
          className="login-form"
          initialValues={this.state.formInitialValues}
          onFinish={this.formFinish}
        >
          <Form.Item
            name="username"
            rules={[
              notEmpty('用户名')
            ]}
          >
            <Input  placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              notEmpty('密码')
            ]}
          >
            <Input.Password placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <p className="login-form-forgot" >
            <Checkbox>Forgot password</Checkbox>
        </p>
          </Form.Item>

          <Form.Item>
            <Button onClick={this.log}
            type="primary" htmlType="submit" block className="login-form-button">
              登录
        </Button>
        Or <a href="">注册!</a>
          </Form.Item>
        </Form>

      </div>
    );
     
  }
}



export default Login;