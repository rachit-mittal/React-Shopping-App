import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './containers/homepage/homepage';
import ShopPage from './containers/shoppage/shoppage';


const Router = () => (

    <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' exact component={ShopPage} />
    </Switch>
)

export default Router;