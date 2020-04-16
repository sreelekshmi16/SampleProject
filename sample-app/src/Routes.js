import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserContainer from './App/Containers/User/index.user'
import StudentContainer from './App/Containers/StudentDetails'
import RegistrationContainer from './App/Containers/Registration'


const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact component={StudentContainer}/>
        <Route path="/User" exact component={UserContainer}/>
        <Route path="/Registration" exact component={RegistrationContainer}/>
      </Switch>
    )
  }
  export default Routes;
  