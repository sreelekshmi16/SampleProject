

const initialState ={
    counterArray:[]
}

export const ADD_COMPONENT = "addcomponent";

export function handleAddComponent(){
    return {
        type: ADD_COMPONENT
    }
}

export const Reducer =(state=initialState,action)=>{
    console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", action)


    if (action.type === ADD_COMPONENT) {
        console.log('ADD_COMPONENT')
        const newState= {...state}
        const tempObj = {id:newState.counterArray.length,value:0}
        const tempArray =[...newState.counterArray.concat(tempObj)]
        return{
            ...newState,
            counterArray:tempArray
        }

    }

    return state;
}

export const getCounterArray = (state) => {
    return state.Reducer.counterArray
}