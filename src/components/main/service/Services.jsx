import "./Services.css"
import { FaSearch } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { MdOutlineSend } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import image108 from "../../../assets/image108.png"
import image104 from "../../../assets/image104.png"
import image106 from "../../../assets/image106.png"
import image107 from "../../../assets/image107.png"



function Services() {
    return (
        <>
        <div className="service">
            <div className="container">
                
                <div className="title">
                    <h2>Our extra services</h2>
                </div>


                <div className="server">

                    <div className="a">
                        <img src={image108} alt="image108" />
                        <FaSearch />
                        <h6>Source from <br />Industry Hubs</h6>
                    </div>
                    <div className="a">
                        <img src={image104} alt="image104" />
                        <RiDeleteBin4Fill />
                        <h6>Customize Your<br />Products</h6>
                    </div>
                    <div className="a">
                        <img src={image106} alt="image106" />
                        <MdOutlineSend />
                        <h6>Fast, reliable shipping <br />by ocean or air</h6>
                    </div>
                    <div className="a">
                        <img src={image107} alt="image107" />
                        <MdSecurity />
                        <h6>product monitoring<br />and inspection</h6>
                    </div>


                </div>




            </div>
        </div>








        </>
    )
}

export default Services;