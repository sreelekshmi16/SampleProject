import React from 'react'

import { Table } from 'reactstrap'

const StudentTableModule = ({ slicedData }) => {
  console.log(slicedData, 'slicedData')

  const renderRows = slicedData.map((user) => (

    < tr >
      <td>{user.id}</td>
      <td>{user.name}</td>
      {/* <td>{todo.completed.toString()}</td> */}
    </tr >
  ))
  return (
    <div style={{ width: '90%', padding: '10px', margin: '20px' }}>
      <Table dark striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* <th>Completed</th> */}
          </tr>
        </thead>

        <tbody>{renderRows}</tbody>
      </Table>
    </div>
  )
}

export default StudentTableModule