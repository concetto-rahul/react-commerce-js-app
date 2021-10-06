import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from "react";

import FeaturedProducts from "./FeaturedProducts";
import Slider from "./Slider";

import HomeCategory from './HomeCategory';

const Home=(props)=>{
    const { categories }=props;

    return(
        <>
            <Slider/>
            <HomeCategory categories={categories}/>
            <FeaturedProducts/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        categories:state.home.categories,
        categories_error:state.home.categories_error,
        categories_success:state.home.categories_success,
    }
}


export default connect(mapStateToProps,null)(Home)
