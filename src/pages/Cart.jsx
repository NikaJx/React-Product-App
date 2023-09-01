import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Tr from "../components/UI/Tr";


import "../styles/Cart.css";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="9">
                            {cartItems.length === 0 ? (
                                <h2 className="fs-4 text-center">
                                    No item added to the cart
                                </h2>
                            ) : (
                                <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, i) => (
                                            <Tr item={item} key={i} />
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </Col>
                        <Col lg="3">
                            <div>
                                <h6 className="d-flex align-items-center 
                                    justify-content-between">Subtotal
                                    <span className="fs-4 fw-bold">${totalAmount}</span>
                                </h6>
                            </div>
                            <p className="fs-6 mt-2">Taxes and shipping will calculate in checkout</p>
                            <div>
                                <button className="buy__btn w-100">
                                    <Link to='/shop'>
                                        Continue Shopping
                                    </Link>
                                </button>
                                <button className="buy__btn w-100 mt-3">
                                    <Link to='/checkout'>
                                        Checkout 
                                    </Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Cart;
