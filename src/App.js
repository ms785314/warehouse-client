


import {  Route, Routes } from 'react-router-dom';
import {  ToastContainer } from 'react-toastify';

import './App.css';
import AddInventory from './Components/AddInventory/AddInventory';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageItems from './Components/ManageItems/ManageItems';
import MyItems from './Components/MyItems/MyItems';
import Navbar from './Components/Navbar/Navbar';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Resgister from './Components/Resigter/Resgister';
import UpdateItem from './Components/UpdateItem/UpdateItem';




function App() {
  return (
    <div className="App min-h-[100vh]">
      <ToastContainer limit={1}></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<PrivateRoute>
          <UpdateItem></UpdateItem>
        </PrivateRoute>}></Route>
        <Route path='/register' element={<Resgister></Resgister>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/addinventory' element={
          <PrivateRoute>
            <AddInventory></AddInventory>
          </PrivateRoute>
        }></Route>
        <Route path='/manageitems' element={
          <PrivateRoute>
            <ManageItems></ManageItems>
          </PrivateRoute>
        }></Route>

        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
