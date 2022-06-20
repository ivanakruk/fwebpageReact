

// inicial state
const defaultValue = {
    token: null
}

// Action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// reducer

export default function AuthReducer ( state = defaultValue, { type, payload}) {
    switch(type){
        case LOGIN: return {...state, token: payload};
        case LOGOUT: return defaultValue;
        default: return state;
    }
}
//actions

export const CheckToken = () => dispatch => {
    const token = localStorage.getItem('token');
    if(token){
        dispatch({
            type: LOGIN,
            payload: token
        })
    }else {
        dispatch({
            type: LOGOUT
        })
    }
}

export const loginAction = ({ email, password }) => async dispatch => {
    try {
        const response = await fetch('http://back-sandbox.herokuapp.com/api/auth/login' , {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password})
        })

        const {token} = await response.json();
        localStorage.setItem('token', token);
        
        dispatch({
            type: LOGIN,
            payload: token
        })

    } catch (error) {
        alert(error)
    }
}

export const LogoutAction = (navigate) => dispatch => {
    localStorage.clear();
    navigate('/login')
    dispatch({
        type: LOGOUT
    })
}

