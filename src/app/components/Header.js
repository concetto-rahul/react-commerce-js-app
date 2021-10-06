import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from "react";
import { fechCategoriesList } from '../store/actions/homeAction';
import { Link } from 'react-router-dom';

const Header=(props)=>{
    const { categories,fechCategoriesList,cart_items }=props;

    useEffect(()=>{
        fechCategoriesList();
    },[]);
    return(
        <>
            <header>
                <div className="header-top">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <Link className="navbar-brand" to="/"><img src="/images/logo.svg" alt="Logo" /></Link>
                            <ul className="list-group list-group-horizontal list-inline header-top-list align-items-center">
                                <li>
                                    <Link to="/"><img src="/images/search-icon.svg" alt="Search" /></Link>
                                </li>
                                <li>
                                    <Link to="/"><img src="/images/login-icon.svg" alt="Login" /></Link>
                                </li>
                                <li>
                                    <Link to="/"><img src="/images/wishlist-icon.svg" alt="Wishlist" /></Link>
                                </li>
                                <li className="cart-basket">
                                    <Link to="/cart"><img src="/images/cart-icon.svg" alt="Cart" /><span>{cart_items.total_unique_items||0}</span></Link>
                                </li>
                                <li>
                                    <Link to="/"><img src="/images/chat-icon.svg" alt="Chat" /></Link>
                                </li>
                                <li className="d-none d-md-block">
                                    <Link to="/" className="btn btn-outline-primary btn-sm">Seller Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">			
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>				
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                {
                                    categories && categories.map((cat_data,i)=>{
                                        return(
                                            <li className="nav-item" key={cat_data.id}>
                                                <Link className="nav-link" to={"/category/"+cat_data.slug}>{cat_data.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                                <li className="nav-item d-md-none">
                                    <Link to="/" className="nav-link btn btn-secondary">Seller Login</Link>
                                </li>	
                                <li className="nav-item">
                                    <Link className="nav-link" to="/"><img src="/images/live-stream-icon.svg" alt="Live Stream" /> Live Stream</Link>
                                </li>				        
                            </ul>
                            <ul className="list-group list-group-horizontal list-inline social-media-list">
                                <li>
                                    <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><img src="/images/facebook-icon.svg" alt="Facebook" /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><img src="/images/instagram-icon.svg" alt="Instagram" /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" rel="noreferrer" target="_blank"><img src="/images/twitter-icon.svg" alt="Twitter" /></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com" rel="noreferrer" target="_blank"><img src="/images/youtube-icon.svg" alt="Youtube" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        categories:state.home.categories,
        categories_error:state.home.categories_error,
        categories_success:state.home.categories_success,
        cart_items:state.cart.cart_items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fechCategoriesList: () => dispatch(fechCategoriesList()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
