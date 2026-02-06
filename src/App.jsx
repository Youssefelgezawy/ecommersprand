import './App.css'
import Footer from './components/footer/Footer'
import Item from './components/main/blookitemgroup/Item'
import Header from './components/main/header/Header'
import Section from './components/main/section-main/Section'
import Sale from './components/main/section-sale/sale'
import image98 from "./assets/image98.png"
import image92 from "./assets/image92.png"
import Maskgroup from './components/main/maskgroup/Maskgroup'
import Recommend from './components/main/recommend/Recommend'
import Services from './components/main/service/Services'
import Country from './components/main/country/Country'
import Communication from './components/main/Communication/Communication'


function App() {

  return (
    <>
      {/* Main */}
      <Header />
      <Section />
      <Sale />
      <Item title={image92} skip={0}/>
      <Item title={image98} skip={8}/>
      <Maskgroup />
      <Recommend />
      <Services />
      <Country />
      <Communication />







      {/* footer */}
      <Footer />
    </>
  )
}

export default App
