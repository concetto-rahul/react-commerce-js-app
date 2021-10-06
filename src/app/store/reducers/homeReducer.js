import { CATEGORIES_DETAIL, CATEGORIES_LIST, CATEGORIES_LIST_ERROR, CATEGORIES_LIST_SUCCESS, PRODUCTS_LIST, PRODUCT_LOADING,LOAD_PRODUCT_NEW_DATA, PRODUCT_DETAIL } from "../actions/homeAction";

const initialState={
    categories: JSON.parse(localStorage.getItem("appcategorieslist")) || [],
    category_detail:[],
    categories_success:"",
    categories_error:"",
    products:[],
    loading_products:false,
    product_detail:[],
}

const homeReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CATEGORIES_LIST:
            return {
                ...state,
                categories:action.data
            };
        case CATEGORIES_DETAIL:
            return {
                ...state,
                category_detail:action.data
            };
        case CATEGORIES_LIST_SUCCESS:
            return {
                ...state,
                categories_success:action.data
            };
        case CATEGORIES_LIST_ERROR:
            return {
                ...state,
                categories_error:action.data
            };
        case PRODUCTS_LIST:
            return {
                ...state,
                products:action.data,
                loading_products:false
            };
        case PRODUCT_LOADING:
            return {
                ...state,
                loading_products:true
            };
        case LOAD_PRODUCT_NEW_DATA:
            state.products.data=[];
            return {
                ...state,
                loading_products:state.products
            };
        case PRODUCT_DETAIL:
            return {
                ...state,
                product_detail:action.data
            };    
        default:
            return state;
    }
}

export default homeReducer;