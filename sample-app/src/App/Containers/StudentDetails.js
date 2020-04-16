import React, { Component } from 'react';

import { Button } from 'reactstrap';



const EmployeeList = [{ id: 1, Name: "anu", Age: "20", Address: "jdjj,male",Ischecked: "false"},
{ id: 2, Name: "Banu", Age: "22", Address: "ddhgg,dfgyd", Ischecked: "false" },
{ id: 3, Name: "chinnu",  Age: "24", Address: "ddvd,hhdgyw", Ischecked: "false" },

{ id: 10, Name: "Midhila",  Age: "29", Address: "feffff,wwf", Ischecked: "false" },
{ id: 11, Name: "Nima",  Age: "28", Address: "effff,emale", Ischecked: "false" },
{ id: 12, Name: "Prithvi",  Age: "26", Address: "wdfw,wfle", Ischecked: "false" },
{ id: 13, Name:"Rohan",  Age: "22", Address: "vgr,eale", Ischecked: "false" }]
class StudentDetails extends Component {
  render() {
      console.log("renderrrrrrrrrrrrr student")
    return (
      <Button  style={{ float: 'left', marginTop: '80px' }} color="danger">Student component works!!!!!!!!!!</Button>
    );
  }
}

export default StudentDetails;