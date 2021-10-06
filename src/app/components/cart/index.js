import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { removeItemFromCart,updateItemQtyFromCart } from "../../store/actions/cartAction";

const Cart=(props)=>{
    const { cart_items,removeItemFromCart,updateItemQtyFromCart }=props;

    console.log(cart_items);

    function cartQtyUpdate(e){
        updateItemQtyFromCart({
            cartItemID:e.target.name,
            quantity:e.target.value
        })
    }

    return(
        <>
            <section className="checkout-page mb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>					    
                                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        {
                            cart_items.line_items.length?
                            <>
                            <div className="col-xl-8">
                                <div className="checkout-table">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th className="text-center" width="60">#</th>
                                                    <th className="text-center" width="150">Products Image</th>
                                                    <th>Products</th>
                                                    <th>Price</th>
                                                    <th width="120">Quantity</th>
                                                    <th>Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cart_items.line_items.map((cart_item,i)=>{
                                                        return(
                                                            <tr key={cart_item.id}>
                                                                <td className="text-center v-align-middle">
                                                                    <a href="#removeCartItem" onClick={()=>removeItemFromCart(cart_item.id)} className="remove-product"><img src="/images/close.svg" alt="" /></a>
                                                                </td>
                                                                <td className="text-center">
                                                                    <img src={cart_item.image.url} alt="" className="product-img" />
                                                                </td>
                                                                <td>
                                                                    <strong>{cart_item.product_name}</strong>
                                                                </td>
                                                                <td>{cart_item.price.formatted_with_symbol}</td>
                                                                <td>
                                                                    <input type="number" name={cart_item.id} className="form-control" value={cart_item.quantity} onChange={cartQtyUpdate}/>
                                                                </td>
                                                                <td>{cart_item.line_total.formatted_with_symbol}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="checkout-sidebar fix-sidebar">
                                    <div className="promo-offers mb-4">
                                        <div className="card my-card">
                                            <div className="card-header">
                                                <h4>Promos & Offers</h4>
                                            </div>
                                            <div className="card-body">	
                                                <div className="form-group">
                                                    <label>Promo code</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Enter promo code" />
                                                        <span className="input-group-btn">
                                                            <button className="btn btn-secondary" type="submit">APPLY</button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-details">
                                        <div className="card my-card">
                                            <div className="card-header">
                                                <h4>Price Details</h4>
                                            </div>
                                            <div className="card-body p-0">	
                                                <div className="table-responsive">
                                                    <table className="table table-bordered">
                                                        <tr>
                                                            <th width="200">Price</th>
                                                            <td className="text-right">{cart_items.subtotal.formatted_with_symbol}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Discount</th>
                                                            <td className="text-right text-success">− $0</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Delivery Charges</th>
                                                            <td className="text-right text-success">Free</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Total Amount</th>
                                                            <th className="text-right">{cart_items.subtotal.formatted_with_symbol}</th>
                                                        </tr>
                                                    </table>
                                                </div>	    						
                                            </div>
                                        </div>
                                        <div className="secure-info">
                                            <img src="/images/secure.svg" alt="" /> <span>Safe and Secure Payments. Easy returns.100% Authentic products.</span>
                                        </div>
                                        <button className="btn btn-secondary">
                                            PLACE ORDER
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </>
                            :
                            <>
                            <div className="col-xl-8">
                                <h1>Cart Is empty</h1>
                            </div>
                            </>
                        }
                    </div>
                </div>
            </section>	
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        cart_items:state.cart.cart_items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeItemFromCart: (data)=>dispatch(removeItemFromCart(data)),
        updateItemQtyFromCart: (data)=>dispatch(updateItemQtyFromCart(data))
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);