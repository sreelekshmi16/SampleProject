import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserContainer from './App/Containers/User/UserContainer'
import StudentContainer from './App/Containers/StudentDetails'
import RegistrationContainer from './App/Containers/Registration'
import Counter from  './App/Containers/Counter/Counter'

const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact component={StudentContainer}/>
        <Route path="/User" exact component={UserContainer}/>
        <Route path="/Registration" exact component={RegistrationContainer}/>
        <Route path="/Profile" exact component={Counter}/>
      </Switch>
    )
  }
  export default Routes;
  