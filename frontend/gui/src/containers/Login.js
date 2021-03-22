import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';






const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
class LoginForm extends Component {
    state = {  }


  

 

       onFinish = (values) => {
        console.log('Success:', values);
        this.props.onAuth(values.username, values.password);
        this.props.history.push('/');
      };

       onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };



    render() { 

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return ( 
            <div>
                {errorMessage}
                {
                    this.props.loading ?
                    <Spin indicator={antIcon} />

                    :
                <Form
  
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={ this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <span style={{marginLeft: '5px'}}>Or</span>
        <NavLink style={{marginLeft: '7px'}} to='/signup'>
            Signup
        </NavLink>
      </Form.Item>
    </Form>



    }

            </div>
         );
    }
}
 

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);