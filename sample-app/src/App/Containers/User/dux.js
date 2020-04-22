const EmployeeList = [{ id: 1, Name: "anu", Age: "20", street: "jdjj,male", Ischecked: "false" },
{ id: 2, Name: "Banu", Age: "22", street: "ddhgg,dfgyd", Ischecked: "false" },
{ id: 3, Name: "chinnu", Age: "24", street: "ddvd,hhdgyw", Ischecked: "false" },

{ id: 4, Name: "Midhila", Age: "29", street: "feffff,wwf", Ischecked: "false" },
{ id: 5, Name: "Nima", Age: "28", street: "effff,emale", Ischecked: "false" },
{ id: 6, Name: "Prithvi", Age: "26", street: "wdfw,wfle", Ischecked: "false" },
{ id: 7, Name: "Rohan", Age: "22", street: "vgr,eale", Ischecked: "false" }]

const EMPLOYEE_LIST = 'GET_EMPLOYEE_LIST'
const EDIT = 'EDIT_ENTRY'
const SAVE = 'SAVE_ENTRY'

// export function getEmployeeList(params) {
//     console.log("check list params reducer", params)
//     return {
//         type: EMPLOYEE_LIST,
//         ...params

//     }
// }
export function onEditHandler(params) {
    console.log("check edit parameter", params.selectedRow)
    return {
        type: EDIT,
        params
    }
}
export function onSaveHandler(params) {
    return {
        type: SAVE,
        params
    }
}
const initialState = {
    dataList:EmployeeList,
    selectedItem: {}
}

export const UserReducer = (state = initialState, action) => {
  
    switch (action.type) {
        // case EMPLOYEE_LIST:
        //     const tempArry = [...action.list]
        //     console.log("temp arrayyyy", tempArry)
        //     return { ...state, dataList: [...tempArry] }

        case EDIT:
            const { selectedRow } = action.params

            console.log("check", selectedRow)
            return { ...state, selectedItem: selectedRow }
        case SAVE:
            const newState = { ...state }
           
            const myList = newState.dataList
          
            const { rowId, rowClicked, selectedEmpList,itemId } = action.params
            console.log("check saveeeeeeee", selectedEmpList.Name,selectedEmpList.street)

            let templistt = [...myList]
           const newList = templistt.map(item=>{ 
                
                if(rowClicked && item.id === itemId){
                
                    
                return {
                    id: item.id,
                    Name:selectedEmpList.Name,
                    Age: item.Age,
                    street:selectedEmpList.street,
                    Ischecked: item.Ischecked
                }
            }
             else return item
        }
        
            )
            console.log("mmmmhhhoo",newList)
           
            // if (rowClicked && selectedEmpList !== '' && rowId === id) {
            //     templistt.splice(index, 1, selectedEmpList)
            // }
            return { ...state, dataList: [...newList] }

        default:
            return state
    }

}
export const getList = (state) => {
    return state.UserReducer.dataList
}
