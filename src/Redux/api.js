import axios from "axios";

// inicial state
const defaultValue = {
    products: []    
};

// Action types
const GET_PRODUCTS = 'GET_PRODUCTS';

// reducer
export default function productsReducer( state = defaultValue, {type, payload}){
    switch (type) {
        case GET_PRODUCTS:
            return {...state, products: payload.products};
            default:
                return defaultValue;
    }
}

//actions
export const getProduts = () => async dispatch => {
    try {

        const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')

        const data = response.data
        console.log(response.data);
        console.log(response.data[2].name);

        dispatch({
            type: GET_PRODUCTS,
            payload: {products: data}
        });
        
    } catch (error) {
        alert(error);
    }
}