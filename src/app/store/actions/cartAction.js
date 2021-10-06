import { commerce } from "../../../config/commerce";
import {NotificationManager} from 'react-notifications';

export const CART_TOKEN_UPDATE="CART_TOKEN_UPDATE";
export const CART_PRODUCT_QTY_INC="CART_PRODUCT_QTY_INC";
export const CART_PRODUCT_QTY_DEC="CART_PRODUCT_QTY_DEC";
export const ITEM_ALLREADY_IN_CART="ITEM_ALLREADY_IN_CART";
export const CART_DATA_INFO="CART_DATA_INFO";

export const getCartTokenID=()=>(dispatch)=>{
    commerce.cart.retrieve().then(cart => {
        if(cart.id){
            localStorage.setItem('carttokenid',cart.id);
            dispatch({type:CART_TOKEN_UPDATE,data:cart.id})
        }
    });
}

export const fechCartData=()=>(dispatch)=>{
    
    const cartId = localStorage.getItem("carttokenid")||0;
    commerce.cart.retrieve(cartId).then(cart_data => {
        if(cart_data){
            localStorage.setItem('cartdata_info',JSON.stringify(cart_data));
            dispatch({type:CART_DATA_INFO,data:cart_data})
        }
    });
}

export const decrementQuntity=()=>(dispatch,getState)=>{
    let { cart_item_quntity }=getState().cart;
    if(cart_item_quntity>1){
        cart_item_quntity-=1;
    }else{
        cart_item_quntity=1;
    }
    dispatch({type:CART_PRODUCT_QTY_DEC,data:cart_item_quntity})
}

export const incrementQuntity=()=>(dispatch,getState)=>{
    let { cart_item_quntity }=getState().cart;
    if(cart_item_quntity>0){
        cart_item_quntity+=1;
    }else{
        cart_item_quntity=1;
    }
    dispatch({type:CART_PRODUCT_QTY_INC,data:cart_item_quntity});
}

export const addItemToCart=(data)=>(dispatch)=>{
    commerce.cart.add(data.productId, data.quantity).then(addtocart_res => {
        if(addtocart_res.success){
            NotificationManager.success('Item has been added to your cart.');
            dispatch(fechCartData());
        }
    });
}

export const removeItemFromCart=(data)=>(dispatch)=>{
    commerce.cart.remove(data).then(removetocart_res => {
        if(removetocart_res.success){
            NotificationManager.error('Item has been removed from your cart.');
            dispatch(fechCartData());
        }
    });
}

const COMMERCE_API_KEY="pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec";

export const updateItemQtyFromCart=(data)=>(dispatch)=>{
    const cartId = localStorage.getItem("carttokenid")||0;

    let body = JSON.stringify({
        "quantity": parseInt(data.quantity)
    });

    console.log('update qty abcdd',data);
    let headers = {
        "X-Authorization": COMMERCE_API_KEY,
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    const url = new URL(
        "https://api.chec.io/v1/carts/"+cartId+"/items/"+data.cartItemID
    );

    fetch(url, {
        method: "PUT",
        headers: headers,
        body: body
    })
    .then(response => response.json())
    .then(upt_res =>{
        console.log(upt_res);
        if(upt_res.success){
            const cart_data=upt_res.cart;
            localStorage.setItem('cartdata_info',JSON.stringify(cart_data));
            dispatch({type:CART_DATA_INFO,data:cart_data});
        }
    })
    .catch((error) => {
        console.log('There was an error in  update qty the products', error);
    });
}