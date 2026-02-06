import "./Maskgroup.css"

function Maskgroup() {
    return (
        <>
            <div className="Maskgroup">
                <div className="container">


                    <div className="text">
                        <h2>An easy way to send <br /> requests to all suppliers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi amet
                            consequatur asperiores dolore.</p>
                         <button className="btn">Send inquiry</button>
                    </div>



                    <div className="card">
                        <div className="form">
                            <h4>Send quote to suppliers</h4>
                            <input type="text" className="question" placeholder="What item you need?" />
                            <textarea placeholder="type more details" className="type-more-details" rows={1}></textarea>
                            <div className="message">
                                <input type="number" className="quantity" placeholder="Quantity" min={1} />
                                <select name="message" className="message">
                                    <option value="">Pcs</option>
                                    <option value="">Psc</option>
                                    <option value="">csp</option>
                                </select>
                            </div>
                            <button className="btn">Send inquiry</button>
                        </div>
                    </div>



                </div>
            </div>













        </>
    )
}

export default Maskgroup