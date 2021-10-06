import { CART_DATA_INFO, CART_PRODUCT_QTY_DEC, CART_PRODUCT_QTY_INC, CART_TOKEN_UPDATE, ITEM_ALLREADY_IN_CART } from "../actions/cartAction";

const initialState={
    cart_token_id:localStorage.getItem("carttokenid") || "",
    cart_items:JSON.parse(localStorage.getItem('cartdata_info')) || [],
    cart_item_quntity:1,
    item_alreadyin_cart:false,
}

const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CART_TOKEN_UPDATE:
            return{
                ...state,
                cart_token_id:action.data
            }
        case CART_PRODUCT_QTY_INC:
            return{
                ...state,
                cart_item_quntity:action.data
            }
        case CART_PRODUCT_QTY_DEC:
            return{
                ...state,
                cart_item_quntity:action.data
            }
        case ITEM_ALLREADY_IN_CART:
            return{
                ...state,
                item_alreadyin_cart:true
            }
        case CART_DATA_INFO:
            return{
                ...state,
                cart_items:action.data
            }    
        default:
            return state;
    }
}

export default cartReducer;