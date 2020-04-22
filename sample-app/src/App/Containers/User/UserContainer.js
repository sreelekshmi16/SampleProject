import React, { Component, Fragment } from 'react';
import UserTableModule from '../User/user'
import { connect } from 'react-redux';
import { getEmployeeList,onEditHandler, getList,onSaveHandler} from './dux'

import { Button } from 'reactstrap';
const EmployeeList = [{ id: 1, Name: "anu", Age: "20", street: "jdjj,male", Ischecked: "false" },
{ id: 2, Name: "Banu", Age: "22", street: "ddhgg,dfgyd", Ischecked: "false" },
{ id: 3, Name: "chinnu", Age: "24", street: "ddvd,hhdgyw", Ischecked: "false" },

{ id: 4, Name: "Midhila", Age: "29", street: "feffff,wwf", Ischecked: "false" },
{ id: 5, Name: "Nima", Age: "28", street: "effff,emale", Ischecked: "false" },
{ id: 6, Name: "Prithvi", Age: "26", street: "wdfw,wfle", Ischecked: "false" },
{ id: 7, Name: "Rohan", Age: "22", street: "vgr,eale", Ischecked: "false" }]

class UserDetails extends Component {
  state = {
    // list: EmployeeList,
    FetchedUserData: [],
    selectedItem: {},
    rowClicked: false,
    rowId: '',
    saveBtn:false
  }
  componentDidMount() {
       const {list} = this.state
      
  }

  onEditChangeHandler = (e, data) => {
    const { list, isEdited } = this.state
    const { selectedItem } = this.state;
    const {name,value} = e.target
    console.log("checkkkkkk value", value)
    // selectedItem.street = value ;
    console.log("seeeeeeeeeeee",selectedItem)


    console.log("haiiiiiiiiiiiiiiiiiiii", selectedItem)
    this.setState({
      selectedItem: selectedItem,
      [name]: value,
     

     },()=>{
      console.log("state!!!!!!!!!!!",this.state)
      selectedItem.Name =this.state.name?this.state.name:selectedItem.Name,
      selectedItem.street=this.state.street?this.state.street:selectedItem.street
    //   this.setState({
    //     selectedItem: selectedItem,
    //   })
     }
    )
  }
  onEditClickBtn = (data, id) => {
  
    const { selectedItem} = this.state
    
  
    this.setState({
      rowClicked: true,
      rowId: data.id,
      saveBtn:true,
      selectedItem:{...data}
      // isEdited:!isEdited

    },()=>{console.log("888888888",this.state.selectedItem)})
    this.props.onEditHandler({
      selectedRow:selectedItem
    })
  }
  onSaveClickBtn = (event, index, id) => {
    console.log("current state",this.state)
   
    const { rowId, rowClicked} = this.state
    const { selectedItem,name,street} = this.state;
    console.log("current street",street)
  
    // console.log("editeddddddddd",selectedItem)
    const selectedlist = { ...selectedItem }
    console.log("selectedddddddd list", selectedlist)

    this.props.onSaveHandler({
      rowId:rowId,
      rowClicked:rowClicked,
      
      itemId:selectedItem.id,
      selectedEmpList:selectedlist,

    })
    this.setState({
    
      rowClicked: false,
      rowId: '',
      selectedItem: {},
      name:'',
      street:''
     
    })
   
  }

  render() {
    console.log("state...........", this.state)
    const { list, rowClicked, rowId, selectedItem } = this.state;
    const{EmpList}=this.props;
   
    console.log("propppppppppppp",this.props)
   
    
  
    return (
      <Fragment>
        <Button style={{ float: 'left', marginTop: '80px' }} color="danger">User component works!!!!!!!!!!</Button>
        <div>
          <UserTableModule
            // slicedData={list}
            renderData={EmpList}
            onEditChangeHandler={this.onEditChangeHandler}
            onEditClickBtn={this.onEditClickBtn}
            selectedItem={selectedItem}
            onSaveClickBtn={this.onSaveClickBtn}
            rowClicked={rowClicked}
            rowId={rowId}
          >

          </UserTableModule>
        </div>
      </Fragment>
    );
  }
}

  const mapStateToProps = (state) => ({
    EmpList: getList(state)

  })

   const mapDispatchToProps=dispatch=>{
    return{
      // getEmployeeList:(params)=>dispatch(getEmployeeList(params)),
      onEditHandler:(params)=>dispatch(onEditHandler(params)),
      onSaveHandler:(params)=>dispatch(onSaveHandler(params))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(UserDetails);
// export default UserDetails;