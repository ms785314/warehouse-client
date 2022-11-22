
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import UpdateItem from './Components/UpdateItem/UpdateItem';

function App() {
  return (
    <div className="App min-h-[100vh]">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<UpdateItem></UpdateItem>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
