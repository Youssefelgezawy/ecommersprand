import "./Cart.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { Cartcontext } from "../../cartcontext/Cartprovider";


function Cart() {


  const { cartitems, increaseQuantity, decreaseQuantity, removefromcart } = useContext(Cartcontext)
  console.log(cartitems);

  const total = cartitems.reduce((acc, item) => acc + Number(item.price || 0) * item.quantity , 0)





  return (
    <>

      <div className="cart">
        <div className="container">

          <div className="item">

            {cartitems.length === 0 ? (
              <p>Your cart is empty</p>
            ) :
              cartitems.map((item, index) => (
                <div className="itemcart" key={index}>
                  <div className="title">
                    <img src={item.images?.[0]} alt="image106" />
                    <h2>{item.title}</h2>

                    <h3 onClick={() => removefromcart(item.id)}>< RiDeleteBin6Line /></h3>
                  </div>




                  <div className="description">
                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <div className="price">
                      <p>{(Number(item.price) * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>









                </div>



              ))
            }


          </div>




          <div className="checkout">
            <div className="shop-table">
              <p>Total :</p>
              <span className="total-check">${total.toFixed(2)}</span>
            </div>
            <div className="btn">
              <button>Checkout</button>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Cart











