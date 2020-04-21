const intialState = {
 users:[],
 isFetching:false,
 error:''
}

export const GET_USER_START = 'GET_USER_START'
export const GET_USER = 'GET_USER'
export const GET_USER_FAIL ='GET_USER_FAIL'





export function getUser(params){
    return{
        type:GET_USER,
        params

    }
}


export const StudentReducer =(state= intialState,action)=>{
 console.log('studentttttttttttttttttttttt',action)
if(action.type === GET_USER){
    console.log('get user working!!!!!!!!!!!!!!!!!!!!')
    console.log("paramsss",action.params.data)
    const {newState} ={...state}
    return{
        ...newState,
        users:action.params.data,
        isFetching:true
    }
}


return state;

}
export const getLoader = (state) => {
    return state.StudentReducer.isFetching
}
export const getListUser = (state) => {
    return state.StudentReducer.users
}
