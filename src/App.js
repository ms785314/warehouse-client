
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, redirect, Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Resgister from './Components/Resigter/Resgister';
import UpdateItem from './Components/UpdateItem/UpdateItem';
import { firebaseApp } from './firebase';



function App() {
  const auth = getAuth(firebaseApp);
  const [user] = useAuthState(auth);
  


 
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
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
