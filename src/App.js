
import './App.css';

import {
 
  Routes,
  Route,
}from "react-router-dom";

import Header from './Pages/Header/Header';
import Friends from './Pages/Friends/Friends';
import Datils from './Pages/Datil/Datils';
import Posts from './Pages/Posts/Posts';
import PostsDatal from './Pages/PostDati/PostsDatal';

import Restrorand from './Pages/Restrorant/Restrorand';
import MealDati from './Pages/MealDa/MealDati';


function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/friends/:id' element={<Datils />}></Route>
        <Route path='/posts' element={< Posts></Posts>}>
          <Route path=':postid' element={<PostsDatal />}></Route>
        </Route>
       <Route path='/restrorant' element={<Restrorand />}></Route>
       <Route path='/restrorant/:id' element={<MealDati />}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
