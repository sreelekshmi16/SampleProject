import React from 'react'
import { Button } from 'reactstrap';
import { Table } from 'reactstrap'

const UserTableModule = ({ renderData,onEditChangeHandler,onEditClickBtn,selectedItem,onSaveClickBtn,rowClicked,rowId,saveBtn}) => {
  console.log(renderData, 'renderData')
  console.log("propssssssssss",rowClicked,rowId)

  const renderRows = renderData.map((data,index) =>
  
    (
    (

    < tr >
      <td>{data.id}</td> 
     <td> {rowClicked && data.id === rowId ?<input defaultValue={data.Name} id="Name" name="name" key={data.id} onChange={(e) => onEditChangeHandler(e,data)}></input>:data.Name} </td>
      {/* <td>{data.Name}</td> */}
    <td>{rowClicked && data.id === rowId ?<input defaultValue={data.street} id="Street" name="street" key={data.id} onChange={(e) => onEditChangeHandler(e,data)}></input>:data.street}  {rowId === data.id ? (
          <Button onClick={event => onSaveClickBtn(event, index, data.id)}>
            Save
          </Button>
        ) : (
          <Button
            color="warning"
            style={{ marginLeft: "30px" }}
            onClick={() => onEditClickBtn(data)}
          >
            Edit
          </Button>
        )} </td>
     
    </tr >
  )))
  return (
    <div style={{ width: '90%', padding: '10px', margin: '20px' }}>
      <Table dark striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Street</th>
          </tr>
        </thead>

        <tbody>{renderRows}</tbody>
      </Table>
    </div>
  )
}

export default UserTableModule