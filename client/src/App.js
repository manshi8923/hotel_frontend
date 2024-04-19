import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Guests from './pages/oth/Guests';
import AddGuest from './pages/oth/AddGuest';
import Revenue from './pages/oth/Revenue';
import Rooms from './pages/oth/Rooms';
import GenerateBill from './pages/oth/GenerateBill';
import SingleRoom from './pages/oth/SingleRoom';
import UpdateGuest from './pages/oth/UpdateGuest';
import Guests_ma from './pages/ma/Guests_ma';
import AddGuest_ma from './pages/ma/AddGuest_ma';
import Rooms_ma from './pages/ma/Rooms_ma';
import GenerateBill_ma from './pages/ma/GenerateBill_ma';
import SingleRoom_ma from './pages/ma/SingleRoom_ma';
import UpdateGuest_ma from './pages/ma/UpdateGuest_ma';
import Header from './components/Header';
import Footer from './components/Footer';
import Hotels from './components/Hotels';
import Dashboard_ma from './components/Dashboard_ma';
import Dashboard_oth from './components/Dashboard_oth';
import Revenue_ma from './pages/ma/Revenue_ma';
import Bill from './pages/oth/Bill';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/hotels' element={<Hotels/>} />
      <Route path='/oth/guests' element={<Guests/>} />
      <Route path='/oth/addguest' element={<AddGuest/>} />
      <Route path='/oth/revenue' element={<Revenue/>} />
      <Route path='/oth/rooms' element={<Rooms/>} />
      <Route path='/oth/bill/:id' element={<Bill/>} />
      <Route path='/oth/room/:id' element={<SingleRoom/>} />
      <Route path='/oth/guest/:id' element={<UpdateGuest/>} />
      <Route path='/ma/guests' element={<Guests_ma/>} />
      <Route path='/ma/addguest' element={<AddGuest_ma/>} />
      <Route path='/ma/revenue' element={<Revenue_ma/>} />
      <Route path='/ma/rooms' element={<Rooms_ma/>} />
      <Route path='/ma/generateBill' element={<GenerateBill_ma/>} />
      <Route path='/ma/room/:id' element={<SingleRoom_ma/>} />
      <Route path='/ma/guest/:id' element={<UpdateGuest_ma/>} />
      <Route path='/dashboard/ma' element={<Dashboard_ma/>} />
      <Route path='/dashboard/oth' element={<Dashboard_oth/>} />
    </Routes>
    <Footer/>
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App