import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Works from './pages/Works/Works';
import About from './pages/About/About';

import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>     
        <Route path="/" element={<Home/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/about" element={<About/>}/>     
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
