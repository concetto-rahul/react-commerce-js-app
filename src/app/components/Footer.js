import { Link } from "react-router-dom";
const Footer=()=>{
    return(
        <>
            <footer className="footer">
                <div className="shop-asp">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="asp-list">
                                    <img src="/images/free-shipping-icon.svg" alt="" />
                                    <h3>Free Shipping<span>Free shipping on all US order or order above $100</span></h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="asp-list">
                                    <img src="/images/support-icon.svg" alt="" />
                                    <h3>Support 24/7<span>Contact us 24 hours a day, 7 days a week</span></h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="asp-list">
                                    <img src="/images/return-icon.svg" alt="" />
                                    <h3>30 Days Return<span>Simply return it within 30 days for an exchange.</span></h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="asp-list">
                                    <img src="/images/payment-secure-icon.svg" alt="" />
                                    <h3>100% Payment Secure<span>We ensure secure payment with PEV</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="footer-about">
                                    <img src="/images/logo.svg" alt="Logo" />
                                    <p>9606 North MoPac Expressway Suite 700<br />Austin, TX 199885</p>
                                    <p>
                                        <Link to="mailto:support@domain.com">support@domain.com</Link>
                                    </p>
                                    <p>
                                        <Link to="tel:+901246789900">+9 0124-6789-900</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="footer-links">
                                    <h3>About us</h3>
                                    <ul>
                                        <li>
                                            <Link to="/linkurlyouwant">Our Company</Link>
                                        </li>
                                        <li>
                                            <Link to="/linkurlyouwant">Our History</Link>
                                        </li>
                                        <li>
                                            <Link to="/linkurlyouwant">Store Locations</Link>
                                        </li>
                                        <li>
                                            <Link to="/linkurlyouwant">About Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-6">
                                <div className="footer-links">
                                    <h3>Shop</h3>
                                    <ul>
                                        <li>
                                            <Link to="/linkurlyouwant">Men</Link>
                                        </li>
                                        <li>
                                            <Link to="/linkurlyouwant">Women</Link>
                                        </li>
                                        <li>
                                            <Link to="/linkurlyouwant">Accessories</Link>
                                        </li>
                                        <li>
                                            <Link to="/linkurlyouwant">Trends</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="footer-subscribe">
                                    <p>Signup to be the first to hear about exclusive deals,special offers and upcoming collections.</p>
                                    <form className="form-subscribe" action="/linkurlyouwant">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Enter email address" />
                                            <span className="input-group-btn">
                                                <button className="btn" type="submit" >Subscribe</button>
                                            </span>
                                        </div>
                                    </form>
                                    <div className="payment-method">
                                        <img src="/images/paypal.svg" alt="" />
                                        <img src="/images/visa.svg" alt="" />
                                        <img src="/images/amex.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copy">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 d-flex justify-content-between align-items-center">
                                <p>
                                    Copyright © 2020 <Link to="/linkurlyouwant">Shopathon</Link>
                                </p>
                                <ul className="list-group list-group-horizontal list-inline justify-content-center">
                                    <li>
                                        <Link to="/linkurlyouwant">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/linkurlyouwant">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/linkurlyouwant">Help Center</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;