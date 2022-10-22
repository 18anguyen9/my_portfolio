import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Body from './pages/body';
import Nav from './pages/nav';
import Contact from './pages/contact/contact'
import Weatherbody from './pages/weather/weatherbody';
import Cat from './pages/cat/cat';
 
function App() {
  return (
    <BrowserRouter>
      <link href="/dist/output.css" rel="stylesheet"></link>
      <div className=' w-full bg-black'>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Body />}> </Route>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/projects" element={<Weatherbody />}> </Route>
          <Route path="/cat" element={<Cat />}> </Route>
        </Routes>
      </div>
      
    
  </BrowserRouter>
  );
}

export default App;
