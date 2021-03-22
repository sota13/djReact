import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';



class Signup extends Component {
    state = {  }



    onFinish = (values) => {
        console.log('Received values of form: ', values);
        this.props.onAuth(
          values.username,
          values.email,
          values.password,
          values.confirm
        );
        this.props.history.push('/');
      };


    render() { 
        return (
            <div>
                <Form
      name="register"
      onFinish={this.onFinish}
      
      scrollToFirstError
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
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item >
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
        <span style={{marginLeft: '5px'}}>Or</span>
        <NavLink style={{marginLeft: '7px'}} to='/login'>
            login
        </NavLink>
      </Form.Item>










    </Form>

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
      onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);