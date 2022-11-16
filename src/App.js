import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home';
import Body from './pages/body';
import Nav from './pages/nav';
import Contact from './pages/contact/contact'
import Weatherbody from './pages/weather/weatherbody';
import Cat from './pages/cat/cat';
import Productivity from './pages/productivity';
 
function App() {
  return (
    <BrowserRouter className=''>
     
      <div className=' w-full bg-black'>
        <Nav className=''></Nav>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/projects" element={<Weatherbody />}> </Route>
          <Route path="/cat" element={<Cat />}> </Route>
          <Route path="/productivity" element={<Productivity />}> </Route>
        </Routes>
      </div>
      
    
  </BrowserRouter>
  );
}

export default App;
