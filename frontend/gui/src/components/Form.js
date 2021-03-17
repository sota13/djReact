import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';


class CustomForm extends Component {
    HandelFormSubmit = (event) => {


        const postObject = {
        title: event.target.elements.title.value,
        content: event.target.elements.content.value
        };
        console.log(postObject);
        
    }
    render() { 
        return ( 
            <div>
                <Form onSubmit={this.HandelFormSubmit}>
                    <Form.Item label="Title">
                    <Input name='title' placeholder="put a title here" />
                    </Form.Item>
                    <Form.Item label="Content">
                    <Input name="content" placeholder="type the content here ... " />
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>




            </div>
         );
    }
}
 
export default CustomForm;