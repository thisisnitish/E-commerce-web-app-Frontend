import React from 'react';

const ImageHelper = ({ product }) => {
    const imageUrl = product ? product.image 
        : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    return(
        <div className="rounded border border-sucsess p-2">
            <img src={imageUrl}
            style={{maxHeight: "100%", maxWidth: "100%"}}
            className="mb-3 rounded"
            alt=""
            />
        </div>
    );
};

export default ImageHelper;