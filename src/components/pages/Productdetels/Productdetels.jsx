import { useParams } from "react-router-dom";
import "./Productdetels.css";
import { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdStarHalf } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import Item from "../home/blookitemgroup/Item";
import { Cartcontext } from "../../cartcontext/cartprovider";




function Productdetels() {



  const { cartitems, addtocart } = useContext(Cartcontext)
  console.log(cartitems);



  const { id } = useParams()


  const [product, setProduct] = useState(null)
  const [relatedproduct, setRelatedproduct] = useState([])


  const isincart = product ? cartitems.some(i => i.id === product.id) : false;




  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id])



  useEffect(() => {
    if (!product) return
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then(res => res.json())
      .then(data => setRelatedproduct(data.products));
  }, [product?.category])





  if (!product) return <p>Loading...</p>;
  

  return (
    <>
      <div className="productdetels">
        <div className="container">

          <div className="veow">


            <div className="product">
              <div className="bg-img">
                <img id="bg-img" src={product.images?.[0]} alt={product?.title} />
              </div>

              <div className="imgs">
                {product?.images?.map((img, index) => (
                  <img key={index} src={img} alt={product.title} onClick={() => document.getElementById("bg-img").src = img} />
                ))}
              </div>

            </div>








            <div className={`detels-item ${isincart ? 'in-cart' : ''}`}>
              <h2 className="title">{product.title}</h2>

              <h6 className="stare">
                {Array.from({ length: Math.floor(product.rating) }).map((_, i) => <RiStarSFill key={i} />)}
                {product.rating % 1 >= 0.5 && <IoMdStarHalf />}
              </h6>

              <p className="price">$ {product.price}</p>


              <div className="description">
                <h3>{product.description}</h3>
              </div>

              <div className="send">
                <button onClick={() => addtocart(product)} >Send inquiry</button>
                <h5><CiHeart /></h5>
              </div>


            </div>


          </div>
        </div>
      </div>









      {relatedproduct.length > 0 && (
        <Item products={relatedproduct} variant="variant" />
      )}






    </>
  )
}

export default Productdetels