import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from "react";
import { fechProductsList,getCategoryData,handlePageClick } from '../../store/actions/homeAction';
import { useParams } from 'react-router';
import Loader from "react-loader-spinner";
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const Category=(props)=>{
    const { slug } = useParams();
    const { products,category_detail,fechProductsList,getCategoryData,loading_products,handlePageClick }=props;

    useEffect(()=>{
        getCategoryData(slug);
        fechProductsList({
            slug:slug
        });
    },[slug]);

    return(
        <>
            <section className="product-list-page mb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                {
                                    category_detail.name?
                                    <li className="breadcrumb-item active" aria-current="page">{category_detail.name}</li>
                                    :""
                                }
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="inner-title">
                                <h2>Shop By Category</h2>
                                <div className="form-group">
                                    <label>Sort by</label>
                                    <select className="form-control">
                                        <option>Featured</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 product-list-right">
                            <div className="row">
                                {
                                    loading_products?
                                    <div className="col-xl-12 col-lg-12 col-md-12" key="loaderkeycatpage">
                                        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
                                    </div>
                                    :""
                                }
                                {
                                    products.data && products.data.map((product_data,index)=>{
                                        return(
                                            <div className="col-xl-3 col-lg-4 col-md-6" key={product_data.id}>
                                                <div className="products-list">
                                                    <div className="products-img">
                                                        <img src={product_data.image.url} alt="products-img" />
                                                    </div>
                                                    <h3>{product_data.name}</h3>
                                                    <p className="price">{product_data.price.formatted_with_symbol}</p>
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
                                                            <a href="#"><span style={{background:"#85411A"}}></span></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span style={{background:"#EE4567"}}></span></a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><span style={{background:"#1E7E9C"}}></span></a>
                                                        </li>
                                                    </ul>
                                                    <div className="product-btn">
                                                        <Link to={"/product/"+product_data.permalink} className="btn btn-secondary">
                                                            <img src="/images/cart-white-icon.svg" alt="Cart" /> Add to Cart
                                                        </Link>
                                                    </div>
                                                    <div className="product-icon">
                                                        <a href="#"><img src="/images/wishlist-white-icon.svg" alt="Wishlist" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {

                                category_detail && products.meta && products.meta.pagination?
                                <div className="row">
                                    <div className="col-xl-12">	
                                        <ReactPaginate
                                            onPageChange={handlePageClick}
                                            previousLabel={'Previous'}
                                            previousClassName={'page-item active'}
                                            previousLinkClassName={'page-link'}
                                            nextLabel={'Next'}
                                            nextClassName={'page-item active'}
                                            nextLinkClassName={'page-link'}
                                            breakLabel={'...'}
                                            breakClassName={'page-item break-me'}
                                            breakLinkClassName={'page-link'}
                                            pageCount={products.meta.pagination.total_pages}
                                            pageClassName={"page-item"}
                                            pageLinkClassName={"page-link"}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            containerClassName={'pagination justify-content-center'}
                                            activeClassName={'active'}
                                        />						
                                    </div>
                                </div>
                                :""
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        loading_products:state.home.loading_products,
        products:state.home.products,
        category_detail:state.home.category_detail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fechProductsList: (data) => dispatch(fechProductsList(data)),
        getCategoryData: (slug) => dispatch(getCategoryData(slug)),
        handlePageClick: (data) => dispatch(handlePageClick(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category)
