import "./Sale.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";




function Sale() {


    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=5")
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])



    return (
        <>
            <div className="sale">
                <div className="container">
                    <div className="slide">

                        <div className="raight-slide">
                            <div className="card">
                                <h2>Deals and offers <span>Hygiene equipments</span></h2>

                                <div className="time-btn">
                                    <button>04 <span>Days</span></button>
                                    <button>13 <span>Hour</span></button>
                                    <button>34 <span>Min</span></button>
                                    <button>56 <span>Sec</span></button>
                                </div>
                            </div>
                        </div>




                        <div className="left-slide">
                            <Swiper
                                loop={products.length > 5}
                                spaceBetween={30}
                                autoplay={{ delay: 3000 }}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Autoplay]}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    992: { slidesPerView: 4 },
                                    1200: { slidesPerView: 5 },
                                }}
                            >
                                {products.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="products">
                                            <img src={item.thumbnail} alt={item.title} />
                                            <h4>{item.title}</h4>
                                            <p>-{item.discountPercentage}%</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>



                    </div>
                </div>
            </div>


        </>
    )
}

export default Sale;









