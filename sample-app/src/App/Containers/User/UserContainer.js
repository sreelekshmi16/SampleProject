import React, { Component,Fragment } from 'react';
import UserTableModule from '../User/user'

import { Button } from 'reactstrap';


class UserDetails extends Component {
    state={
        userDataa:[],
        FetchedUserData:[]
    }
    componentDidMount() {
        const {fetchUserData,userData} = this.props
        fetchUserData()
        this.setState({
            userDataa:userData
        })
    }

    render() {
        const {userDataa} =this.state;
        console.log("renderrrrrrrrrrrrr student")
      return (
        <Fragment>
        <Button  style={{ float: 'left', marginTop: '80px' }} color="danger">User component works!!!!!!!!!!</Button>
        <div>
             <UserTableModule slicedData={userDataa}></UserTableModule>
        </div>
        </Fragment>
      );
    }
  }
  
  export default UserDetails;