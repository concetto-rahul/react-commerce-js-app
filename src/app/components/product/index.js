import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProductDetail } from '../../store/actions/homeAction';
import { getCartTokenID,decrementQuntity,incrementQuntity,addItemToCart } from "../../store/actions/cartAction";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
const Product=(props)=>{
    const { slug } = useParams();
    const { product_detail,getProductDetail,getCartTokenID,decrementQuntity,incrementQuntity,cart_token_id,product_item_quntity,addItemToCart }=props;

    useEffect(()=>{
        getProductDetail(slug);
        getCartTokenID();
    },[slug]);

    const item_cart_data={
        cartId:cart_token_id,
        quantity:product_item_quntity,
        productId:product_detail.id
    }
    
    return(
        <>
            <section className="product-detail-page mb-10">
                <div className="container">
                    {
                        product_detail.name?
                        <>
                        <div className="row">
                            <div className="col-xl-12">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    {
                                        product_detail.categories?
                                        <li className="breadcrumb-item"><Link to={"/category/"+product_detail.categories[0]['slug']}>{product_detail.categories[0]['name']}</Link></li>
                                        :""
                                    }
                                    <li className="breadcrumb-item active" aria-current="page">{product_detail.name}</li>
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-detail-slider">
                                    <div className="product-detail-slider-thumb">
                                        <div>
                                            <img src={product_detail.image.url} alt="" />
                                        </div>
                                        <div>
                                            <img src="/images/product-detail-slider-img-3.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/images/product-detail-slider-img-4.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/images/product-detail-slider-img-5.jpg" alt="" />								
                                        </div>
                                        <div>
                                            <img src="/images/product-detail-slider-img-1.jpg" alt="" />	
                                        </div>
                                    </div>
                                    <div className="product-detail-slider-main">
                                        <div>
                                            <img src={product_detail.image.url} alt="" />
                                        </div>
                                        <div>
                                            <img src="/images/product-detail-slider-img-3.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/images/product-detail-slider-img-4.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img src="/images/product-detail-slider-img-5.jpg" alt="" />
                                        </div>
                                        <div>
                                            <iframe title="productIframe" src="https://player.vimeo.com/video/178051337" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
                                        </div>
                                    </div>						
                                </div>					
                            </div>
                            <div className="col-lg-6">
                                <div className="product-detail-text">
                                    <h2>{product_detail.name}</h2>
                                    <h5>{product_detail.price.formatted_with_symbol}</h5>
                                    <div className="p-ratings">
                                        <a href="#productStarReview"><img src="/images/star1.svg" alt="Star" /></a>
                                        <a href="#productStarReview"><img src="/images/star1.svg" alt="Star" /></a>
                                        <a href="#productStarReview"><img src="/images/star1.svg" alt="Star" /></a>
                                        <a href="#productStarReview"><img src="/images/star2.svg" alt="Star" /></a>
                                        <a href="#productStarReview"><img src="/images/star2.svg" alt="Star" /></a>
                                        <span>3/5</span>
                                    </div>
                                    {/* <div className="p-color-size">
                                        <div className="p-color">
                                            <label>Colors</label>
                                            <div className="form-group mb-0">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio1" name="example1" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio1">White</label>
                                                </div>
                                                <div className="custom-control custom-radio out-of-stock">
                                                    <input type="radio" className="custom-control-input" id="customRadio2" name="example1" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio2">Yellow</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio3" name="example1" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio3">Red</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio4" name="example1" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio4">Blue</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-size">
                                            <label>Size</label>
                                            <div className="form-group mb-0">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio5" name="example2" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio5">28(4)</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio6" name="example2" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio6">32(10)</label>
                                                </div>
                                                <div className="custom-control custom-radio out-of-stock">
                                                    <input type="radio" className="custom-control-input" id="customRadio7" name="example2" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio7">34(4)</label>
                                                </div>
                                                <div className="custom-control custom-radio out-of-stock">
                                                    <input type="radio" className="custom-control-input" id="customRadio8" name="example2" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio8">36(6)</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio9" name="example2" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio9">38(8)</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio10" name="example2" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio10">40(10)</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio11" name="example2" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio11">42(12)</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio5" name="example2" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio5">28(4)</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio6" name="example2" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio6">32(10)</label>
                                                </div>
                                                <div className="custom-control custom-radio out-of-stock">
                                                    <input type="radio" className="custom-control-input" id="customRadio7" name="example2" value="" />
                                                    <label className="custom-control-label" htmlFor="customRadio7">34(4)</label>
                                                </div>
                                            </div>
                                            <a href="#">Size Guide</a>
                                        </div>
                                    </div> */}
                                    <div className="p-qty-del">
                                        <div className="p-qty">
                                            <div className="form-group mb-0">
                                                <label>Qty</label>
                                                <div className="qty-select">
                                                    <a href="#decrementQuntity" onClick={decrementQuntity}><img src="/images/minus-icon2.svg" alt="Minus" /></a>
                                                    <input type="text" name="" value={product_item_quntity||1} className="form-control" readOnly/>
                                                    <a href="#incrementQuntity" onClick={incrementQuntity}><img src="/images/plus-icon2.svg" alt="Plus" /></a>
                                                </div>
                                            </div>								
                                        </div>
                                        <div className="p-del">
                                            <div className="form-group mb-0">
                                                <label>Delivery Options </label>
                                                <div className="input-group">
                                                    <input type="text" name="" readOnly placeholder="Enter a Pin Code" className="form-control" />
                                                    <span className="input-group-btn">
                                                        <button className="btn" type="submit">Verify</button>
                                                    </span>										
                                                </div>
                                            </div>
                                            <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                                        </div>
                                    </div>
                                    <div className="p-addcart-wishlist">
                                        <button className="btn btn-secondary" onClick={()=>addItemToCart(item_cart_data)}>
                                            <img src="/images/add-cart.svg" alt="Cart" /> Add to Cart
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            <img src="/images/wishlist.svg" alt="Wishlist" /> Wishlist
                                        </button>
                                    </div>
                                    <div className="panel-group mt-4" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <a className="panel-title accordion-toggle collapsed" role="button" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Product details
                                                </a>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse show" role="tabpanel" aria-labelledby="headingTwo">
                                                
                                                <div className="panel-body"><div dangerouslySetInnerHTML={{ __html: product_detail.description }} /></div>
                                            </div>
                                        </div>		                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                        :""
                    }
                </div>
            </section>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        product_detail:state.home.product_detail,
        cart_token_id:state.cart.cart_token_id,
        product_item_quntity:state.cart.cart_item_quntity,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductDetail: (slug) => dispatch(getProductDetail(slug)),
        getCartTokenID: () => dispatch(getCartTokenID()),
        decrementQuntity: () => dispatch(decrementQuntity()),
        incrementQuntity: () => dispatch(incrementQuntity()),
        addItemToCart: (data) => dispatch(addItemToCart(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)
