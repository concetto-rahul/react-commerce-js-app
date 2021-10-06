const FeaturedProducts=()=>{
    return(
        <>
            <section className="featured-products mb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="title">
                                <h2>Featured Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="featured-products-slider">
                        <div className="products-list">
                            <div className="products-img">
                                <img src="/images/products-img-1.jpg" alt="products-img" />
                            </div>
                            <h3>Biker Jacket</h3>
                            <p className="price">INR 5600 <span>INR 5600</span></p>
                            <ul className="list-group list-group-horizontal list-inline justify-content-center product-ratings">
                                <li>
                                    <img src="/images/star-yellow.svg" alt="Star" />
                                </li>
                                <li>
                                    <img src="/images/star-yellow.svg" alt="Star" />
                                </li>
                                <li>
                                    <img src="/images/star-yellow.svg" alt="Star" />
                                </li>
                                <li>
                                    <img src="/images/star-grey.svg" alt="Star" />
                                </li>
                                <li>
                                    <img src="/images/star-grey.svg" alt="Star" />
                                </li>
                            </ul>
                            <ul className="list-group list-group-horizontal list-inline justify-content-center product-colors">
                                <li>
                                    <a href="#itemcolor"><span style={{background:"#85411A"}}></span></a>
                                </li>
                                <li>
                                    <a href="#itemcolor"><span style={{background:"#EE4567"}}></span></a>
                                </li>
                                <li>
                                    <a href="#itemcolor"><span style={{background:"#1E7E9C"}}></span></a>
                                </li>
                            </ul>
                            <div className="product-btn">
                                <a href="#itemaddtocart" className="btn btn-secondary"><img src="/images/cart-white-icon.svg" alt="Cart" /> Add to Cart</a>
                            </div>
                            <div className="product-icon">
                                <a href="#itemwishlist"><img src="/images/wishlist-white-icon.svg" alt="Wishlist" /></a>
                            </div>
                        </div>
                        <div className="products-list">
                            <div className="products-img">
                                <img src="/images/products-img-4.jpg" alt="products-img" />
                            </div>
                            <h3>Short wrap dress</h3>
                            <p className="price">INR 2000 <span>INR 3200</span></p>
                            <span className="sale">Sale</span>
                            <ul className="list-group list-group-horizontal list-inline justify-content-center product-ratings">
                                <li>
                                    <img src="/images/star-yellow.svg" alt="Star" />
                                </li>
                                <li>
                                    <img src="/images/star-yellow.svg" alt="Star" />
                                </li>
                                <li>
                                    <img src="/images/star-yellow.svg" alt="Star" />
                                </li>
                                <li>
                                    <img src="/images/star-grey.svg" alt="Star" />
                                </li>
                                <li>
                                    <img src="/images/star-grey.svg" alt="Star" />
                                </li>
                            </ul>
                            <ul className="list-group list-group-horizontal list-inline justify-content-center product-colors">
                                <li>
                                    <a href="#itemcolor"><span style={{background:"#85411A"}}></span></a>
                                </li>
                                <li>
                                    <a href="#itemcolor"><span style={{background:"#EE4567"}}></span></a>
                                </li>
                                <li>
                                    <a href="#itemcolor"><span style={{background:"#1E7E9C"}}></span></a>
                                </li>
                            </ul>
                            <div className="product-btn">
                                <a href="#itemaddtocart" className="btn btn-secondary"><img src="/images/cart-white-icon.svg" alt="Cart" /> Add to Cart</a>
                            </div>
                            <div className="product-icon">
                                <a href="#itemwishlist"><img src="/images/wishlist-white-icon.svg" alt="Wishlist" /></a>
                            </div>
                        </div>				
                    </div>
                </div>
            </section>
        </>
    )
}
export default FeaturedProducts;