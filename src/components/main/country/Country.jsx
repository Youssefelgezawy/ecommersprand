import "./Country.css"
import AE1 from "../../../assets/AE1.png";
import AU2 from "../../../assets/AU2.png";
import US3 from "../../../assets/US3.png";
import RU4 from "../../../assets/RU4.png";
import IT5 from "../../../assets/IT5.png";
import DK6 from "../../../assets/DK6.png";
import FR7 from "../../../assets/FR7.png";
import CN9 from "../../../assets/CN9.png";
import GB10 from "../../../assets/GB10.png";


const countries = [
    { id: 1, name: "Arabic Emirates", description: "shopname.ae", image: AE1 },
    { id: 2, name: "Australia", description: "shopname.ae", image: AU2 },
    { id: 3, name: "United States", description: "shopname.ae", image: US3 },
    { id: 4, name: "Russia", description: "shopname.ru", image: RU4 },
    { id: 5, name: "Italy", description: "shopname.it", image: IT5 },
    { id: 6, name: "Denmark", description: "Denmark.com.dk", image: DK6 },
    { id: 7, name: "France", description: "shopname.com.fr", image: FR7 },
    { id: 8, name: "Arabic Emirates", description: "shopname.ae", image: AE1 },
    { id: 9, name: "China", description: "shopname.ae", image: CN9 },
    { id: 10, name: "Arabic Emirates", description: "shopname.co.uk", image: GB10 },
];





function Country() {
    return (
        <>

            <div className="country">
                <div className="container">




                    <div className="title">
                        <h2>Suppliers by region</h2>
                    </div>



                    {countries.map(country => (
                        <div className="group" key={country.id}>
                            <div className="imge">
                                <img src={country.image} alt={country.name} />
                            </div>

                            <div className="text">
                                <h2>{country.name}</h2>
                            </div>
                            <div className="des">
                                <p>{country.description}</p>

                            </div>
                        </div>
                    ))}





                </div>
            </div>








        </>
    )
}

export default Country;