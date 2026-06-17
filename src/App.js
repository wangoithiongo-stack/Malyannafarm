import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Notfound from './components/Notfound';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1 className='text-light'>Malyanna farm</h1>
      </header>

       {/* the navigation component */}
      <Navbar/>

      {/* carousel components] */}
      <Carousel/>


      <Routes>
        <Route path='/' element={<Getproducts/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<Addproducts/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>


      {/* footer component */}
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
