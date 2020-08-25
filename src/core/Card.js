import React, { useState } from 'react';
import ImageHelper from './helper/ImageHelper';
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper/index';

//Todo: signin redirect to be made for the add to cart 15 lecture: 1 Lesson
const Card = ({ 
    product,
    addtoCart = true,
    removeFromCart = false, 
}) => {

    const [redirect, setRedirect] = useState(false);

    const cartTitle = product ? product.name : 'A photo from pexels';
    const cartDescription = product ? product.description : 'Default description';
    const cartPrice = product ? product.price : 'Default';

    const addToCart = () => {
        if(isAuthenticated()){
            addItemToCart(product, () => setRedirect(true));
            console.log("Added to cart");
        }
        else{
            console.log("Login Please!");
        }
    };

    const getARedirect = (redirect) => {
        if(redirect){
            return <Redirect to='/cart'/>
        }
    };

    const showAddToCart = addToCart => {
        return(
            addToCart && (
                <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                >
                    Add to Cart
                </button>
            )
        );
    };

    const showRemoveFromCart = (removeFromCart) => {
        return (
            removeFromCart && (
                <button
                    onClick={() => {
                        //Todo: Handle this too
                        removeItemFromCart(product.id);
                        console.log("Product remove from the cart");
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                >
                    Remove from cart
                </button>
            )
        );
    };

    return (
        <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cartTitle}</div>
            <div className="card-body">
                {getARedirect(redirect)}
                <ImageHelper product={product}/>
                <p className="lead bg-success font-weight-normal text-wrap">
                    {cartDescription}
                </p>
                <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
                <div className="row">
                    <div className="col-12">
                        {showAddToCart(addToCart)}
                    </div>
                    <div className="col-12">
                        {showRemoveFromCart(removeFromCart)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;