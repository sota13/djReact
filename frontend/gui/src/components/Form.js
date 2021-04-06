import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import axios from "axios";


class CustomForm extends Component {
    handelFormSubmit = async (event, requistType, articleID ) => {

        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization:`Token ${this.props.token}`
          };

        console.log(title, content);

        switch (requistType ) {

            case 'post':
               return await axios.post("http://127.0.0.1:8000/api/create/" , {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));







            case 'put':
               return await axios.put(`http://127.0.0.1:8000/api/${articleID}/update/` , {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.error(error));










        }
        
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={event => {this.handelFormSubmit(event,
                    this.props.requistType,
                    this.props.articleID
                    )}}>
                    <Form.Item label="Title">
                    <Input name='title' placeholder="put a title here" />
                    </Form.Item>
                    <Form.Item label="Content">
                    <Input name="content" placeholder="type the content here ... " />
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </Form.Item>
                </form>




            </div>
         );
    }
}


const mapStateToProps = state => {
    return {
      token: state.token 
    }
  }
 
export default connect(mapStateToProps) (CustomForm);