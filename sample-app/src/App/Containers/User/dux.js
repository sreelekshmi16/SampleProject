const GET_ALL_USERS_START = 'USER/GET_ALL_USERS_START'
const GET_ALL_USERS_SUCCESS = 'USER/GET_ALL_USERS_SUCCESS'
const GET_ALL_USERS_FAIL = 'USER/POSTS/GET_ALL_USES_FAIL'


export const fetchUserData = async (dispatch) => {
    dispatch({ type: GET_ALL_USERS_START })
    try {


        let url = 'https://jsonplaceholder.typicode.com/users'

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        const userData = await response.json()
        dispatch({ type:GET_ALL_USERS_SUCCESS })

        return {
            payload: userData
        };
    }
    catch (error) {
        dispatch({ type: GET_ALL_USERS_FAIL })
    }
}
const initialState = {
    userData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS_START:
            return { ...state, error: false, areFetching: true }
        case GET_ALL_USERS_SUCCESS:
            return { ...state, userData: action.payload, areFetching: false }
        case GET_ALL_USERS_FAIL:
            return { ...state, error: true, areFetching: false }

        default:
            return state
    }
}
