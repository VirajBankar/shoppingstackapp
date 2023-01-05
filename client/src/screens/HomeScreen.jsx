import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen () {
    //import useDispatch from react-redux
    const dispatch = useDispatch();
    // get all productList (products, loading,  error) from redux store using useSelector
    // useSelector accepts a function with state as parameter. 
    // state is what defined in store.js (combineReducers)
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;

    //When page first load, fetch product data from backend 
    useEffect(() => {
        // use dispatch to replace axios product fetch and set loading, error. Make sure to call listProducts function 
        dispatch(listProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {
                loading ? <LoadingBox />
                    : error ? <MessageBox variant="danger"> {error} </MessageBox> 
                        : ( <div className='row center'>
                        <div class="main-banner" id="top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        <div className="thumb">
                            <div className="inner-content">
                                <h4>We Are Hexashop</h4>
                                <span>Awesome, clean &amp; creative HTML5 Template</span>
                                <div className="main-border-button">
                                    <a href="#">Purchase Now!</a>
                                </div>
                            </div>
                            <img src="/images/left-banner-image.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Women</h4>
                                            <span>Best Clothes For Women</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Women</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <a href="/women">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/images/baner-right-image-01.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Men</h4>
                                            <span>Best Clothes For Men</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Men</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <a href="/men">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/images/baner-right-image-02.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Kids</h4>
                                            <span>Best Clothes For Kids</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Kids</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <a href="/kid">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/images/baner-right-image-03.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Accessories</h4>
                                            <span>Best Trend Accessories</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Accessories</h4>
                                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                <div className="main-border-button">
                                                    <a href="/accessories">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/images/baner-right-image-04.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
			    </div> )
            }
			
        </div>
    );
}

export default HomeScreen;
