import "./Section.css";
import { CiUser } from "react-icons/ci";


function Section() {
  return (
    <>
      <div className="section">
        <div className="container">



          {/* Sidebar */}
          <div className="sidebar d-none d-lg-block">
            <ul>
              <li className="active">Automobiles</li>
              <li>Clothes and wear</li>
              <li>Home interiors</li>
              <li>Computer and tech</li>
              <li>Tools, equipments</li>
              <li>Sports and outdoor</li>
              <li>Animal and pets</li>
              <li>Machinery tools</li>
              <li>More category</li>
            </ul>
          </div>





          {/* Banner */}

          <div className="hero-banner ">
            <div className="text">
              <h6>Latest trending</h6>
              <h2>Electronic items</h2>
              <button className="btn btn-light">Learn more</button>
            </div>
          </div>





          {/* Right side cards */}

          <div className="col-lg-2 d-none d-lg-block">
            <div className="rightcards">

              <div className="card card1">
                <div className="user">
                  <h2><CiUser /></h2>
                  <p> Hi, user <br /> let’s get started</p>
                </div>
                <div className="btn">
                  <button className="join">Join now</button>
                  <button className="login">Log in</button>
                </div>
              </div>




              <div className="card card2 w-200 h-25">
                <h6>Get US $10 off  with a new  supplier</h6>
              </div>



              <div className="card card3 w-200 h-25">
                <h6>Send quotes with  supplier preferences</h6>
              </div>
            </div>
          </div>







        </div>
      </div>

    </>
  )
}

export default Section;












// {/* Sidebar */ }
// <div className="col-lg-3">
//   <ul className="list-group category-list">
//     <li className="list-group-item active">Automobiles</li>
//     <li className="list-group-item">Clothes and wear</li>
//     <li className="list-group-item">Home interiors</li>
//     <li className="list-group-item">Computer and tech</li>
//     <li className="list-group-item">Tools, equipments</li>
//     <li className="list-group-item">Sports and outdoor</li>
//     <li className="list-group-item">Animal and pets</li>
//     <li className="list-group-item">Machinery tools</li>
//     <li className="list-group-item">More category</li>
//   </ul>
// </div>



// {/* Banner */ }
// <div className="col-lg-6">
//   <div className="hero-banner d-flex align-items-center">
//     <div className="text">
//       <h6 className="text-muted">Latest trending</h6>
//       <h2 className="fw-bold">Electronic items</h2>
//       <button className="btn btn-light mt-2">Learn more</button>
//     </div>
//   </div>
// </div>




// {/* Right side cards */ }
// <div className="col-lg-3">
//   <div className="card mb-3 p-3 text-center">
//     <p className="mb-2 fw-semibold">Hi, user <br /> let’s get started</p>
//     <button className="btn btn-primary w-100 mb-2">Join now</button>
//     <button className="btn btn-outline-secondary w-100">Log in</button>
//   </div>

//   <div className="card mb-3 p-3 bg-warning text-white">
//     Get US $10 off <br /> with a new supplier
//   </div>

//   <div className="card p-3 bg-info text-white">
//     Send quotes with <br /> supplier preferences
//   </div>
// </div>