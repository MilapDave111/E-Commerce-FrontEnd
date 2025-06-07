import logo from './logo.svg';
import './App.css';
import Navigation from './costumer/components/navigation/Navigation';
import HomePage from './costumer/Pages/HomePage/HomePage';
import Product from './costumer/components/Product/Product';
import Footer from '../src//costumer/components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
      <Product/>
      <Footer/>
      
    </div>
  );
}

export default App;
