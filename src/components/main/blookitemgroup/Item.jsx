import "./Item.css";
import { useEffect, useState } from "react";

function Item({ title, skip }) {


  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=8&skip=${skip}`)
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [skip])



  return (


    < div className="item" >
      <div className="container">
        <div className="cardz">


          {/* Banner */}
          <div className="categorybaner">
            <img src={title} alt="title" />
            <h4>Home and outdoor</h4>
            <button className="btn">Source now</button>
          </div>





          {/* Products */}
          <div className="productminicard">
            {products.map(product => (
              <div className="product" key={product.id}>
                <div className="text">
                  <h2>{product.title}</h2>
                  <h6>From</h6>
                  <span>USD {product.price}</span>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
            ))}
          </div>





        </div>
      </div>
    </div >
  );
}

export default Item;







