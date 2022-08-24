import './App.css';
import Navbar from '../Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import SudoElement from '../Navbar/SudoElement'
import Cards from '../Card/Card';
import Footer from '../Footer/Footer';
import Login from './Login';
import Services from './Services.js';
import Products from './Products';
import Contact from './Contact';
import { Component } from 'react';
import Success from '../Pages/Success'
class App extends Component {
  constructor(){
    super();
    this.state={
      flag:false
    }
  }
  colorChange = () => {
    console.log(this.state.flag)
    this.setState({flag:!this.state.flag})
  }

  render() {
    return (
      <>
        <Navbar flag={this.state.flag} />
        <Routes>
          <Route exact path="/" element={<><SudoElement />
            <Cards /></>}></Route>
          <Route exact path='/login' element={<Login colorChange={this.colorChange} />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/contact/success' element={<Success/>}/>
        </Routes>
        <Footer></Footer>
      </>

    );
  }
}

export default App;
