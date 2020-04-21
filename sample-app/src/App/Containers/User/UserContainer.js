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
    list: EmployeeList,
    FetchedUserData: [],
    selectedItem: {},
    rowClicked: false,
    rowId: '',
    // isEdited: false,
    // street: '',
    saveBtn:false
  }
  componentDidMount() {
       const {list} = this.state
      this.props.getEmployeeList({
        list
      })
      
  }

  onEditChangeHandler = (e, data) => {
    const { list, isEdited } = this.state
    const { selectedItem } = this.state;
    let value = event.target.value
    console.log("checkkkkkk value", value)
    let fieldName = event.target.name

    selectedItem.street = value ;
    console.log("seeeeeeeeeeee",selectedItem)


    console.log("haiiiiiiiiiiiiiiiiiiii", selectedItem)
    this.setState({
      selectedItem: selectedItem,
      [fieldName]: value,
      isEdited: !isEdited,

    })
  }
  onEditClickBtn = (data, id) => {
    const street = data.street;
    console.log("ccurrent streett", street)

    const { selectedItem, isEdited,saveBtn } = this.state
    console.log("is change in edit", isEdited)
  
    this.setState({
      rowClicked: true,
      rowId: data.id,
      street: street,
      saveBtn:true,
      selectedItem:{...data}
      // isEdited:!isEdited

    })
    this.props.onEditHandler({
      selectedRow:selectedItem
    })
  }
  onSaveClickBtn = (event, index, id) => {
    console.log("vannuuuuuuuuuuuuuu",this.state.selectedItem)
    const { rowId, rowClicked, isEdited, street } = this.state
   
    console.log("is change in edit", isEdited)
    const { list, selectedItem } = this.state;
    const{EmpList}=this.props
    let templist = [...list]
    // let templist = [...EmpList]
    const tempArray = [selectedItem]
    const selectedlist = { ...selectedItem }
    console.log("selectedddddddd list", selectedlist)

    console.log("temp spliced list", templist)

    this.props.onSaveHandler({
      rowId:rowId,
      rowClicked:rowClicked,
      item:selectedItem,
      updatedStreet:selectedItem.street,
      itemId:selectedItem.id,
      selectedEmpList:selectedlist,

      id:id,
      index:index,
      emplist:list
    })
    this.setState({
      list: templist,
      rowClicked: false,
      rowId: '',
      selectedItem: {}
      // isEdited:!isEdited
    })
   
  }

  render() {
    console.log("state...........", this.state)
    const { list, rowClicked, rowId, selectedItem } = this.state;
    const{EmpList}=this.props;
   
    console.log("propppppppppppp",this.props)
    // const temp =[...EmpList]
    
    
    console.log("hoooooooooooooooooooo",EmpList)
    return (
      <Fragment>
        <Button style={{ float: 'left', marginTop: '80px' }} color="danger">User component works!!!!!!!!!!</Button>
        <div>
          <UserTableModule
            // slicedData={list}
            slicedData={EmpList}
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
      getEmployeeList:(params)=>dispatch(getEmployeeList(params)),
      onEditHandler:(params)=>dispatch(onEditHandler(params)),
      onSaveHandler:(params)=>dispatch(onSaveHandler(params))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(UserDetails);
// export default UserDetails;