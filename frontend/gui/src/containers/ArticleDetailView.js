import React, { Component } from 'react';
import CustomForm from "../components/Form"
import axios from "axios";
import { Card, Button } from 'antd';





class ArticleDetailView extends Component {

  state = {

    Article: {}

  };


  componentDidMount () {

    const ArticleID = this.props.match.params.ArticleID;
    axios.get(`http://127.0.0.1:8000/api/${ArticleID}`).then(res => {

    this.setState({
      Article: res.data
    });
    });


  





  }

  handelDelete = (event) => {
    event.preventDefault();
    const ArticleID = this.props.match.params.ArticleID;
    axios.delete(`http://127.0.0.1:8000/api/${ArticleID}/delete/`)


  }  



  render() {
    return (
      <div>
          <Card title = {this.state.Article.title}>

              <p> {this.state.Article.content} </p>
          </Card>
          <CustomForm
          requistType= 'put'
          articleID= {this.props.match.params.ArticleID}
          btnText= 'update'
          
          />
          <form onSubmit={event =>{this.handelDelete(event)}}>
          <Button type="danger" htmlType="submit">Delete</Button>
          </form>


        


      </div>
    );
  }

}

export default ArticleDetailView;
