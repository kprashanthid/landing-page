
import './App.css';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Landingpage } from './Landingpage';
import Cards from './Components/Cards';
import Slide from './Components/Slide';
import Footer from './Components/Footer';







function App() {
  return <>
<Landingpage/>
<Slide/>
<br/><br/>
<Container className="custom-container">
<Row>
        <Col sm={6} className='col1'>
        <Cards  src="https://c4.wallpaperflare.com/wallpaper/959/866/476/food-rice-biryani-mutton-wallpaper-preview.jpg" title="Mutton biryani"  text="Biryani (/bɜːrˈjɑːni/) is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of meat (chicken, goat, lamb, beef, prawn, or fish) and spices. " btn="Tast it"/>

        </Col>
        <Col sm={6} className='col2'>
          <Cards  src="https://c4.wallpaperflare.com/wallpaper/657/804/26/food-meat-rice-spices-hd-wallpaper-preview.jpg" title="Butter chicken"  text="Butter chicken, traditionally known as murgh makhani (pronounced [mʊrɣ ˈməkʰaːni]), is an Indian dish originating in Delhi. It is a type of curry made from chicken with a spiced tomato and butter (makhan) sauce." btn="Tast it"/>

        </Col>
      </Row>
      </Container>
      <br/><br/>
      <Container  fluid >
            <Row>
      <Col sm={12}>
        <Footer/>
      </Col>
      </Row> 
      </Container>

      
  </>
}

export default App;
