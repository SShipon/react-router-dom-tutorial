

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Friends from './components/Friends/Friends.jsx';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import NotFound from './components/NotFound/NotFound.jsx';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/about' element={<About></About>}>About</Route>
        <Route path='/contact' element={<Contact></Contact>}>Contact</Route>
        <Route path='/friends' element={<Friends></Friends>}>Friends</Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
