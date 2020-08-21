import React from 'react';
import ImageHelper from './helper/ImageHelper';
import { Redirect } from 'react-router-dom';

//Todo: Deal with this later
const isAuthenticated = false;

const Card = ({ 
    product,
    addtoCart = true,
    removeFromCart = false, 
}) => {

    const cartTitle = product ? product.name : 'A photo from pexels';
    const cartDescription = product ? product.description : 'Default description';
    const cartPrice = product ? product.price : 'Default';

    const addToCart = () => {
        if(isAuthenticated){
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