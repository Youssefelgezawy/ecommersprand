import "./Allcategory.css";
import { RiStarSFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoMdStarHalf } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";








function Allcategory() {


  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState([0, 999999]);
  const [tempPrice, setTempPrice] = useState([0, 999999]);



  const [categoryFilter, setCategoryFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [featureFilter, setFeatureFilter] = useState([]);
  const [conditionFilter, setConditionFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState([]);



  const productsPerPage = 9;


  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=500")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);




  const filteredProducts = products.filter(p => {

    const category = categoryFilter.length === 0 || categoryFilter.includes(p.category);
    const brand = brandFilter.length === 0 || brandFilter.includes(p.brand);
    const feature = featureFilter.length === 0 || featureFilter.some(f => p.description.includes(f));
    const priceMatch = p.price >= priceFilter[0] && p.price <= priceFilter[1];
    const condition = conditionFilter === "" || p.condition === conditionFilter;
    const rating = ratingFilter.length === 0 || ratingFilter.some(r => {
      if (r === "⭐⭐⭐⭐⭐") return p.rating >= 4.5;
      if (r === "⭐⭐⭐⭐☆") return p.rating >= 3.5 && p.rating < 4.5;
      if (r === "⭐⭐⭐☆☆") return p.rating >= 2.5 && p.rating < 3.5;
      if (r === "⭐⭐☆☆☆") return p.rating >= 1.5 && p.rating < 2.5;
      if (r === "⭐☆☆☆☆") return p.rating < 1.5;
    });

    return category && brand && feature && priceMatch && condition && rating;


  })




  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);




  const start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages, start + 2);


  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
















  return (
    <>


      <div className="allcategory">
        <div className="container">
          <div className="listview">



            <div className="name-category">

              <hr />
              <details open className="filter-section">
                <summary className="name">Category</summary>
                <ul>
                  <li onClick={() => setCategoryFilter(prev => prev.includes("Mobile accessory") ? prev.filter(c => c !== "Mobile accessory") : [...prev, "Mobile accessory"])}>Mobile accessory</li>
                  <li onClick={() => setCategoryFilter(prev => prev.includes("Electronics") ? prev.filter(c => c !== "Electronics") : [...prev, "Electronics"])}>Electronics</li>
                  <li onClick={() => setCategoryFilter(prev => prev.includes("Smartphones") ? prev.filter(c => c !== "Smartphones") : [...prev, "Smartphones"])}>Smartphones</li>
                  <li onClick={() => setCategoryFilter(prev => prev.includes("Modern tech") ? prev.filter(c => c !== "Modern tech") : [...prev, "Modern tech"])}>Modern tech</li>
                  <li className="seeall" onClick={() => setCategoryFilter([])}>See all</li>


                </ul>
              </details>
              <hr />

              <details open className="filter-section">
                <summary className="name">Brands</summary>
                <ul>
                  <li><input type="checkbox" onClick={() => setBrandFilter(prev => prev.includes("Samsung") ? prev.filter(c => c !== "Samsung") : [...prev, "Samsung"])} /> Samsung</li>
                  <li><input type="checkbox" onClick={() => setBrandFilter(prev => prev.includes("Apple") ? prev.filter(c => c !== "Apple") : [...prev, "Apple"])} /> Apple</li>
                  <li><input type="checkbox" onClick={() => setBrandFilter(prev => prev.includes("Huawei") ? prev.filter(c => c !== "Huawei") : [...prev, "Huawei"])} /> Huawei</li>
                  <li><input type="checkbox" onClick={() => setBrandFilter(prev => prev.includes("Pocco") ? prev.filter(c => c !== "Pocco") : [...prev, "Pocco"])} /> Pocco</li>
                  <li><input type="checkbox" onClick={() => setBrandFilter(prev => prev.includes("Lenovo") ? prev.filter(c => c !== "Lenovo") : [...prev, "Lenovo"])} /> Lenovo</li>
                  <li className="seeall" onClick={() => setBrandFilter([])}>See all</li>
                </ul>
              </details>
              <hr />

              <details open className="filter-section">
                <summary className="name">Features</summary>
                <ul>
                  <li><input type="checkbox" onClick={() => setFeatureFilter(prev => prev.includes("Metallic") ? prev.filter(c => c !== "Metallic") : [...prev, "Metallic"])} /> Metallic</li>
                  <li><input type="checkbox" onClick={() => setFeatureFilter(prev => prev.includes("Plastic cover") ? prev.filter(c => c !== "Plastic cover") : [...prev, "Plastic cover"])} /> Plastic cover</li>
                  <li><input type="checkbox" onClick={() => setFeatureFilter(prev => prev.includes("8GB Ram") ? prev.filter(c => c !== "8GB Ram") : [...prev, "8GB Ram"])} /> 8GB Ram</li>
                  <li><input type="checkbox" onClick={() => setFeatureFilter(prev => prev.includes("per power") ? prev.filter(c => c !== "per power") : [...prev, "per power"])} /> per power</li>
                  <li><input type="checkbox" onClick={() => setFeatureFilter(prev => prev.includes("Large Memory") ? prev.filter(c => c !== "Large Memory") : [...prev, "Large Memory"])} /> Large Memory</li>
                  <li className="seeall" onClick={() => setFeatureFilter([])}>See all</li>
                </ul>
              </details>
              <hr />

              <details open className="filter-section">
                <summary className="name">Price range</summary>

                <div className="price-range">
                  <input type="range" min="0" max="999999" value={tempPrice[1]} onChange={(e) => setTempPrice([tempPrice[0], +e.target.value])} />
                  <div className="price-values">
                    <input type="number" placeholder="$0" value={tempPrice[0]} onChange={(e) => setTempPrice([+e.target.value, tempPrice[1]])} />
                    <input type="number" placeholder="$999999" value={tempPrice[1]} onChange={(e) => setTempPrice([tempPrice[0], +e.target.value])} />
                  </div>
                  <button onClick={() => setPriceFilter(tempPrice)}>Apply</button>
                </div>

              </details>
              <hr />

              <details open className="filter-section">
                <summary className="name">Condition</summary>
                <div className="condition">
                  <ul>
                    <li><input type="radio" name="condition" onChange={() => setConditionFilter("Any")} checked={conditionFilter === "Any"} /> Any</li>
                    <li><input type="radio" name="condition" onChange={() => setConditionFilter("Refurbished")} checked={conditionFilter === "Refurbished"} /> Refurbished</li>
                    <li><input type="radio" name="condition" onChange={() => setConditionFilter("Brand new")} checked={conditionFilter === "Brand new"} /> Brand new</li>
                    <li><input type="radio" name="condition" onChange={() => setConditionFilter("Old items")} checked={conditionFilter === "Old items"} /> Old items</li>

                  </ul>
                </div>
              </details>
              <hr />

              <details open className="filter-section">
                <summary className="name">Ratings</summary>
                <ul>
                  <li><input type="checkbox" onClick={() => setRatingFilter(prev => prev.includes("⭐⭐⭐⭐⭐") ? prev.filter(c => c !== "⭐⭐⭐⭐⭐") : [...prev, "⭐⭐⭐⭐⭐"])} /> ⭐⭐⭐⭐⭐</li>
                  <li><input type="checkbox" onClick={() => setRatingFilter(prev => prev.includes("⭐⭐⭐⭐☆") ? prev.filter(c => c !== "⭐⭐⭐⭐☆") : [...prev, "⭐⭐⭐⭐☆"])} /> ⭐⭐⭐⭐☆</li>
                  <li><input type="checkbox" onClick={() => setRatingFilter(prev => prev.includes("⭐⭐⭐☆☆") ? prev.filter(c => c !== "⭐⭐⭐☆☆") : [...prev, "⭐⭐⭐☆☆"])} /> ⭐⭐⭐☆☆</li>
                  <li><input type="checkbox" onClick={() => setRatingFilter(prev => prev.includes("⭐⭐☆☆☆") ? prev.filter(c => c !== "⭐⭐☆☆☆") : [...prev, "⭐⭐☆☆☆"])} /> ⭐⭐☆☆☆</li>
                  <li><input type="checkbox" onClick={() => setRatingFilter(prev => prev.includes("⭐☆☆☆☆") ? prev.filter(c => c !== "⭐☆☆☆☆") : [...prev, "⭐☆☆☆☆"])} /> ⭐☆☆☆☆</li>

                </ul>
              </details>

            </div>










            <div className="products">


              {currentProducts.map((product) => (
                <div className="product" key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <img src={product.images[0]} alt={product.title} />
                    <hr />
                    <div className="price">
                      <h6 className="price">${product.price}</h6>
                    </div>
                    <div className="stare">
                      {Array.from({ length: Math.floor(product.rating) }).map((_, i) => <RiStarSFill key={i} />)}
                      {product.rating % 1 >= 0.5 && <IoMdStarHalf />}
                    </div>

                    <div className="cart">
                      <CiHeart />
                    </div>
                    <p>{product.title}</p>
                  </Link>
                </div>
              ))}







              <div className="pagination-bar">
                <div className="show">
                  Show
                  <select>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                </div>





                <div className="pagination">
                  <span
                    className="page-btn"
                    onClick={() => {
                      setCurrentPage(p => Math.max(1, p - 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    ‹
                  </span>

                  {Array.from({ length: end - start + 1 }).map((_, i) => {
                    const page = start + i;
                    return (
                      <span
                        key={page}
                        onClick={() => {
                          setCurrentPage(page);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={currentPage === page ? "page-btn active" : "page-btn"}
                      >
                        {page}
                      </span>
                    );
                  })}

                  <span
                    className="page-btn"
                    onClick={() => {
                      setCurrentPage(p => Math.min(totalPages, p + 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    ›
                  </span>
                </div>





              </div>




            </div>









          </div>
        </div>
      </div>











    </>
  )
}

export default Allcategory;