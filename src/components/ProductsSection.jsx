import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductsSection = () => {

    const [product, setProduct] = useState([]);

    const fetchProductAPI = async () => {
        try {
            const url = "https://fakestoreapi.com/products";
            const response = await axios.get(url);
            console.log(response.data);
            setProduct(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProductAPI();
    }, [])


    return (
        <>
            <div className='products' data-aos="fade-in" data-aos-duration="4000">

                {product.map((arthur) => (
                <div className="product">
                    <div className="product-img">
                        <img src={arthur.image} alt="" />
                    </div>
                    <div className="product-content">
                        <p>{arthur.title}</p>
                        <p>{arthur.price}</p>
                        <p>{arthur.description}</p>
                    </div>
                </div>
                ))}

            </div>
        </>
    )
}

export default ProductsSection
