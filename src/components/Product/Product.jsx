import React, { useEffect, useState } from 'react'
import './Product.css'
import get from '../../services/service'


export default function Product() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        try {
            const res = await get();
            setProduct(res);
            console.log(res)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {product
                ?
                <>
                    <div className="product-title-wrapper">
                        <h2 className='product-title'>{product.title}</h2>
                    </div>
                    <img src={product.category.image} alt={product.title} className='product-image' />
                    <div className="product-desc">
                        <p className="product-info">{`price: ${product.price}`}</p>
                        <p className="product-info">{product.slug}</p>
                        <p className="product-info">{product.title}</p>
                    </div>
                </>
                :
                null}
        </div>
    )
}
