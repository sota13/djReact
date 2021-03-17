import React from 'react';
import { Route } from 'react-router-dom';
import ArticleListView from './containers/ArticleListView'
import ArticleDetailView from './containers/ArticleDetailView'


const BaseRouter = () => (

    <div>

        <Route exact path="/" component ={ArticleListView} />
        <Route exact path="/:ArticleID" component ={ArticleDetailView} />



    </div>
);


export default BaseRouter;