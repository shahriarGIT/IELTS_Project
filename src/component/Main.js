import React from 'react'
import Header from './Header/Header'
import Home from './Home/Home'

import { Route, Redirect, Switch } from 'react-router-dom'

const Main = () => {

    return (
        <div>
            <Header />
            <div>
                <Switch>
                    <Route path='/Home'>{Home}</Route>
                </Switch>
            </div>

        </div>
    )

}

export default Main;