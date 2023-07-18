import './App.css';
import {Home} from './pages/Home/Home';
import {Footer} from './components/Footer/Footer';
import {Navbar} from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={< Home/>} path="/"/>
        <Route element={<Home/>} path="*" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
