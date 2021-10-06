import { useCallback } from "react";
import { commerce } from "../../../config/commerce";

export const CATEGORIES_LIST="CATEGORIES_LIST";
export const CATEGORIES_DETAIL="CATEGORIES_DETAIL";
export const CATEGORIES_LIST_SUCCESS="CATEGORIES_LIST_SUCCESS";
export const CATEGORIES_LIST_ERROR="CATEGORIES_LIST_ERROR";
export const PRODUCTS_LIST="PRODUCTS_LIST";
export const PRODUCT_LOADING="PRODUCT_LOADING";
export const LOAD_PRODUCT_NEW_DATA="LOAD_PRODUCT_NEW_DATA";
export const PRODUCT_DETAIL="PRODUCT_DETAIL";


const COMMERCE_API_KEY="pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec";

export const fechCategoriesList=()=>(dispatch)=>{
    commerce.categories.list().then((category) => {
        if(category.data){
            localStorage.setItem('appcategorieslist', JSON.stringify(category.data));
            dispatch({ type: CATEGORIES_LIST, data: category.data });
        }
    }).catch((error) => {
        console.log('There was an error fetching the categories', error);
    });
}

export const getCategoryData=(slug)=>(dispatch)=>{

    commerce.categories.retrieve(slug, { type: 'slug' }).then((category) => {
        dispatch({ type: CATEGORIES_DETAIL, data: category });
    }).catch((error) => {
        console.log('There was an error fetching the categories detail', error);
    });
}

export const fechProductsList=(data)=>(dispatch)=>{
    dispatch({ type: LOAD_PRODUCT_NEW_DATA, data: "" });
    dispatch({ type: PRODUCT_LOADING, data: "" });
    const params={
        limit: 2,
        category_slug: data.slug,
        page:data.page?data.page:1,
    }

    let headers = {
        "X-Authorization": COMMERCE_API_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    const url = new URL(
        "https://api.chec.io/v1/products"
    );
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
    fetch(url, {
        method: "GET",
        headers: headers,
    })
    .then(response => response.json())
    .then(products =>{
        dispatch({ type: PRODUCTS_LIST, data: products });
    })
    .catch((error) => {
        console.log('There was an error fetching the products', error);
    });
}

export const handlePageClick=(data)=>(dispatch,getState)=>{
    const { category_detail }=getState().home;
    const filter_params={
        slug:category_detail.slug,
        page:Math.ceil(data.selected+1)
    }
    dispatch(fechProductsList(filter_params));
}

export const getProductDetail=(slug)=>(dispatch)=>{
    
    const params={
        type: "permalink"
    }

    let headers = {
        "X-Authorization": COMMERCE_API_KEY,
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    const url = new URL(
        "https://api.chec.io/v1/products/"+slug
    );
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    // console.log(url);
    fetch(url, {
        method: "GET",
        headers: headers,
    })
    .then(response => response.json())
    .then(product_data =>{
        dispatch({ type: PRODUCT_DETAIL, data: product_data });
    })
    .catch((error) => {
        console.log('There was an error fetching the products', error);
    });
}