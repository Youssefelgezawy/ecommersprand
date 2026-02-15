import image98 from "../../../assets/image98.png"
import image92 from "../../../assets/image92.png"
import Item from '../home/blookitemgroup/Item'
import Section from '../home/section-main/Section'
import Sale from '../home/section-sale/Sale'
import Maskgroup from '../home/maskgroup/Maskgroup'
import Recommend from '../home/recommend/Recommend'
import Services from '../home/service/Services'
import Country from '../home/country/Country'
import Communication from '../home/communication/Communication'










function Home() {
    return (
        <>



            <Section />
            <Sale />
            <Item title={image92} skip={0} />
            <Item title={image98} skip={8} />
            <Maskgroup />
            <Recommend />
            <Services />
            <Country />
            <Communication />




        </>
    )
}

export default Home