import { createContext, useEffect, useState } from "react"






export const Cartcontext = createContext()


function Cartprovider({ children }) {

    const [cartitems, setCartitems] = useState(() => {
        const savedCart = localStorage.getItem('cartitems');
        return savedCart ? JSON.parse(savedCart) : []
    })



    // increaseQuantity

    const increaseQuantity = (id) => {
        setCartitems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }

    // decreaseQuantity

     const decreaseQuantity = (id) => {
        setCartitems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ))
    }


    // removefromcart

    const removefromcart = (id) => {
        setCartitems(prevItems => prevItems.filter(item => item.id !==id))
    }





    const addtocart = (item) => {
        setCartitems((prevItems) => [...prevItems, { ...item, quantity: 1 }])
    }





    useEffect(() => {
        localStorage.setItem('cartitems', JSON.stringify(cartitems))
    }, [cartitems])


    return (
        <>

            <Cartcontext.Provider value={{ cartitems, addtocart, increaseQuantity, decreaseQuantity, removefromcart }}>

                {children}

            </Cartcontext.Provider>



        </>
    )
}

export default Cartprovider