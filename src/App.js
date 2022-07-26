
import './App.css';

import {
 
  Routes,
  Route,
}from "react-router-dom";
import Header from './Pages/Header/Header';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div >
      <Header />
     <Routes>
      <Route path='/about'element={<About />}></Route>
      <Route path='/contact'element={<Contact />}></Route>
     </Routes>

      
    </div>
  );
}

export default App;
