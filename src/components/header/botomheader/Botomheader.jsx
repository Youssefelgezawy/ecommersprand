import { Link } from "react-router-dom";
import "./Botomheader.css";

function Botomheader() {
  return (
    <>
      <div className="botomheader">



        <div className="container">
          <div className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/category">Category</Link></li>
            </ul>
          </div>
        </div>




      </div>




    </>
  )
}

export default Botomheader;