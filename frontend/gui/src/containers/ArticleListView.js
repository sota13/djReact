import React, { Component } from 'react';
import axios from "axios";
import Articles from "../components/Articles"
import CustomForm from "../components/Form"




class ArticleListView extends Component {

  state = {

    Articles: []

  };


  componentDidMount () {

    axios.get("http://127.0.0.1:8000/api/").then(res => {

    this.setState({
      Articles: res.data
    });
    console.log(res.data)
    });

  }
  render() {
    return (
      <div>

        <Articles data={this.state.Articles} />
        <h2>Create A New Article</h2>
        <CustomForm/>


      </div>
    );
  }

}

export default ArticleListView;
