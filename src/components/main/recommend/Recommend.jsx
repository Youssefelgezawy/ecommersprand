import "./Recommend.css"
import { useEffect, useState } from "react";



function Recommend() {



    const [product, setProduct] = useState([])


    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=10&skip=82")
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])



    return (
        <>
            <div className="recommend">
                <div className="container">



                    <div className="title">
                        <h2>Recommended items</h2>
                    </div>





                    <div className="products">
                        {product.map(item => (
                            <div className="product" key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <h5 className="price">${item.price}</h5>
                                <h4>{item.title}</h4>
                            </div>
                        ))}

                    </div>






                </div>
            </div>

        </>
    )
}

export default Recommend;