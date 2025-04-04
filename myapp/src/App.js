import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Container from './component/Container'
import Logosection from './component/Logosection'
import Card from './component/Card'
import Service from './component/Service'
import Section from './component/Section'
import Testimonial from './component/Testimonial'
import Infosec from './component/Infosec'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Navbar /> 
      <Container/>
      <Logosection/>
      <Card/>
      <Section/>
      <Service/>
      <Testimonial/>
      <Infosec/>
      <Footer/>
    </>
  );
}

export default App;
