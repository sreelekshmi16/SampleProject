const EMPLOYEE_LIST = 'GET_EMPLOYEE_LIST'
const EDIT = 'EDIT_ENTRY'
const SAVE = 'SAVE_ENTRY'

export function getEmployeeList(params) {
    console.log("check list params reducer", params)
    return {
        type: EMPLOYEE_LIST,
        ...params

    }
}
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
    dataList: [],
    selectedItem: {}
}

export const UserReducer = (state = initialState, action) => {
    console.log("REDUCERRRRRRRRRRRRRRRRR")
    switch (action.type) {
        case EMPLOYEE_LIST:
            const tempArry = [...action.list]
            console.log("temp arrayyyy", tempArry)
            return { ...state, dataList: [...tempArry] }

        case EDIT:
            const { selectedRow } = action.params

            console.log("check", selectedRow)
            return { ...state, selectedItem: selectedRow }
        case SAVE:
            const newState = { ...state }
            console.log("newState", newState)
            const myList = newState.dataList
            console.log("my liste here ", myList)
            const { rowId, rowClicked, selectedEmpList, id, index, emplist,updatedStreet,itemId } = action.params
            console.log("check saveeeeeeee", updatedStreet,itemId)

            let templistt = [...myList]
           const newList = templistt.map(item=>{ 
                
                if(rowClicked && item.id === itemId){
                
                    console.log("itemmmmmmm",item)
                return {
                    id: item.id,
                    Name:item.Name,
                    Age: item.Age,
                    street:updatedStreet,
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
