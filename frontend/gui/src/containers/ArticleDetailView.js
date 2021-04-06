import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization:`Token ${this.props.token}`
    };
    axios.delete(`http://127.0.0.1:8000/api/${ArticleID}/delete/`)
    .then(res =>{
      if (res.status === 204) {
        this.props.history.push('/');
      }
    })


  };  



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



const mapStateToProps = state => {
  return {
    token: state.token 
  }
}
export default connect(mapStateToProps) (ArticleDetailView);
