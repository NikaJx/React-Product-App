import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import ProductList from '../components/UI/ProductList';

import products from '../assets/data/products';

import '../styles/ProductDetails.css';

const ProductDetails = () => {
    const [tab, setTab] = useState('desc');
    const [rating, setRating] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const product = products.find(item => item.id === id);
    const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;

    const relatedProducts = products.filter(item => item.category === category);

    const addToCart = () => {
        dispatch(addItem({
            id,
            image: imgUrl,
            productName,
            price
        }));

        toast.success('Product added successfully');
    }

    return (
        <Helmet title={productName}>
            <CommonSection title={productName}/>
            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={imgUrl} alt={productName} />
                        </Col>
                        <Col lg="6">
                            <div className="product__details">
                                <h2>{productName}</h2>
                                <div className="product__rating d-flex gap-5
                                    align-items-center mb-3">
                                    <div>
                                        <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-half-s-line"></i>
                                        </span>
                                    </div>
                                    <p>(<span>{avgRating}</span> ratings)</p>
                                </div>
                                <div className='d-flex align-items-center gap-5'>
                                    <span className='product__price'>${price}</span>
                                    <span>Category: {category}</span>
                                </div>
                                <p className='mt-3'>{shortDesc}</p>
                                <motion.button whileTap={{scale:1.2}} 
                                    className='buy__btn'
                                    onClick={addToCart}
                                    >
                                    Add to Cart
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="tab__wrapper d-flex gap-5
                                align-items-center">
                                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`}
                                    onClick={() => setTab('desc')}>
                                    Description
                                </h6>
                                <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`}
                                     onClick={() => setTab('rev')}>
                                    Reviews ({reviews.length})
                                </h6>
                            </div>
                            {
                                tab === 'desc' ? 
                                <div className="tab__content mt-5">
                                     <p>{description}</p>
                                </div>
                                :
                                <div className='product__review mt-5'>
                                    <div className="review__wrapper">
                                        <ul>
                                            {
                                                reviews?.map((item, i) => (
                                                    <li key={i} className="mb-4">
                                                        <h6>Jhon Doe</h6>
                                                        <span>{item.rating} (rating)</span>
                                                        <p>{item.text}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="review__form">
                                            <h5>Leave your experience</h5>
                                            <form className='mt-4'>
                                                <div className="form__group">
                                                    <input type="text" placeholder='Enter name'/> 
                                                </div>
                                                <div className="form__group d-flex
                                                    align-items-center gap-5">
                                                    <span onClick={() => setRating(1)}>
                                                       1 <i className="ri-star-s-fill"></i>
                                                    </span> 
                                                    <span onClick={() => setRating(2)}>
                                                       2 <i className="ri-star-s-fill"></i>
                                                    </span> 
                                                    <span onClick={() => setRating(3)}>
                                                       3 <i className="ri-star-s-fill"></i>
                                                    </span> 
                                                    <span onClick={() => setRating(4)}>
                                                       4 <i className="ri-star-s-fill"></i>
                                                    </span> 
                                                    <span onClick={() => setRating(5)}>
                                                       5 <i className="ri-star-s-fill"></i>
                                                    </span> 
                                                </div>
                                                <div className="form__group">
                                                    <textarea rows={4} type="text" placeholder='Review message...'/> 
                                                </div>
                                                <button type='submit' 
                                                    className='buy__btn mt-0'>
                                                        Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Col>
                        <Col lg="12" className='mt-5'>
                            <h2 className="related__title">You might also like</h2>
                        </Col>
                        <ProductList data={relatedProducts}/>
                    </Row>
                </Container>
            </section>
        </Helmet> 
    );
}

export default ProductDetails;