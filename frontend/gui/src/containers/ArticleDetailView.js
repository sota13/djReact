import React, { Component } from 'react';
import axios from "axios";
import { Card } from 'antd';





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
  render() {
    return (
      <div>
          <Card title = {this.state.Article.title}>

              <p> {this.state.Article.content} </p>
          </Card>


        


      </div>
    );
  }

}

export default ArticleDetailView;
