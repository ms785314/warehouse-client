
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Resgister from './Components/Resigter/Resgister';
import UpdateItem from './Components/UpdateItem/UpdateItem';

function App() {
  return (
    <div className="App min-h-[100vh]">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<UpdateItem></UpdateItem>}></Route>
        <Route path='/register' element={<Resgister></Resgister>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
