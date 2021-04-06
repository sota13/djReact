import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import Articles from "../components/Articles"
import CustomForm from "../components/Form"





class ArticleListView extends Component {

  state = {

    Articles: []

  };

  fetchArticles = () => {
    axios.get("http://127.0.0.1:8000/api/").then(res => {

      this.setState({
        Articles: res.data
      });
      console.log(res.data)
      });
  

  }


  componentDidMount () {
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }
  render() {
    return (
      <div>

        <Articles data={this.state.Articles} />
        <h2>Create A New Article</h2>
        <CustomForm
        requistType= 'post'
        articleID= {null}
        btnText= 'create'
        />


      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    token: state.token 
  }
}

export default connect(mapStateToProps) (ArticleListView);
