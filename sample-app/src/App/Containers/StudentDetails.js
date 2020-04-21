import React, { Component,Fragment } from 'react';
import StudentTableModule from '../Containers/Student'

import { Button } from 'reactstrap';

import {connect} from 'react-redux';
import {getUser, getLoader,getListUser} from './studentReducer'


const EmployeeList = [{ id: 1, Name: "anu", Age: "20", Address: "jdjj,male",Ischecked: "false"},
{ id: 2, Name: "Banu", Age: "22", Address: "ddhgg,dfgyd", Ischecked: "false" },
{ id: 3, Name: "chinnu",  Age: "24", Address: "ddvd,hhdgyw", Ischecked: "false" },

{ id: 10, Name: "Midhila",  Age: "29", Address: "feffff,wwf", Ischecked: "false" },
{ id: 11, Name: "Nima",  Age: "28", Address: "effff,emale", Ischecked: "false" },
{ id: 12, Name: "Prithvi",  Age: "26", Address: "wdfw,wfle", Ischecked: "false" },
{ id: 13, Name:"Rohan",  Age: "22", Address: "vgr,eale", Ischecked: "false" }]
class StudentDetails extends Component {
  state={
    users:[],
    isLoading:false
  }

  componentDidMount(){
   this.fetchUsers();
   
  }
  fetchUsers() {
   
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        },()=>{this.getUserData()}))
      // ).then(this.getUserData())
      .catch(error => this.setState({ error, isLoading: false }));
  }
  getUserData(){
    console.log("------------state",this.state)
    const {users} = this.state
    this.props.getUser({
      id:1,
      data:users
    })
  }
  
  render() {
    console.log("iiii stateeeeeeee", this.state)
    console.log("propsssssssssssss", this.props)
    const{users}=this.state
      console.log("renderrrrrrrrrrrrr student")
      const{isLoading}=this.props
    return (
      <Fragment>
        {isLoading?(<StudentTableModule slicedData={users}></StudentTableModule>):<div style={{ width: '90%', padding: '10px', marginTop: '50px' }}><b>LOADING..........</b></div>}
       {/* <StudentTableModule slicedData={users}></StudentTableModule> */}
      <Button  style={{ float: 'left', marginTop: '80px' }} color="danger">Student component works!!!!!!!!!!</Button>
      </Fragment>
    );
  }
}

const mapStateToProps=state=>{
  return{
    users: getListUser(state),
    isLoading:getLoader(state)
  }
 }
 
 const mapDispatchToProps=dispatch=>{
       return{
           getUser:(params)=>dispatch(getUser(params))
         
       }
   }
   
  export default connect(mapStateToProps,mapDispatchToProps)(StudentDetails);
 

// export default StudentDetails;