import { Link } from "react-router-dom";
import "./Item.css";
import { useEffect, useState } from "react";

function Item({ title, skip = 0, products: externalProducts, variant }) {


  const [products, setProducts] = useState(externalProducts || []);



  useEffect(() => {
    if (externalProducts) return;
    fetch(`https://dummyjson.com/products?limit=8&skip=${skip}`)
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [skip, externalProducts])



  return (


    <div className={`item ${variant || ''}`}>

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


            {products?.map(product => (
              <Link to={`/products/${product.id}`} key={product.id} className="product">
                <div className="text">
                  <h2>{product.title}</h2>
                  <h6>From</h6>
                  <span>USD {product.price}</span>
                </div>
                <img src={product.thumbnail} alt={product.title} />
              </Link>
            ))}



          </div>








        </div>
      </div>
    </div >
  );
}

export default Item;







