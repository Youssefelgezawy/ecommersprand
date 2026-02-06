import "./Header.css";
import logo from "../../../assets/logo.png";
import { FaUser } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";






function Header() {
  return (
    <>

      <div className="container">
        <div className="header d-none d-lg-flex">
          <div className="logo">
            <img className="img" src={logo} alt="logo" />
            <h6>Brand</h6>
          </div>
          <div className="search-form">
            <input className="search" type="search" placeholder="Search" />
            <select>
              <option>All category</option>
            </select>
            <button type="button">Search</button>
          </div>
          <div className="actions">
            <div className="action-item">
              <FaUser />
              <span>Profile</span>
            </div>
            <div className="action-item">
              <BiSolidMessageDetail />
              <span>Message</span>
            </div>
            <div className="action-item">
              <FaHeart />
              <span>Orders</span>
            </div>
            <div className="action-item">
              <FaShoppingCart />
              <span>My cart</span>
            </div>
          </div>
        </div>
      </div>




      {/* Mopile */}


      <div className="mobile-header d-lg-none p-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <IoMdMenu />
            <img src={logo} alt="logo" style={{ height: "40px" }} />
            <h6>Brand</h6>
          </div>
          <div className="actions">
            <CgShoppingCart />

            <FaRegUser />
          </div>
        </div>

        <input type="search" className="form-control mt-2" placeholder="Search" />

      </div>


    </>
  )
}

export default Header;





































