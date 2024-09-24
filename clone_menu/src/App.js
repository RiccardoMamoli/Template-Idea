import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomInfo from './components/CustomInfo';
import Home from './components/Home';
import { useState } from 'react';
import CustomDeviceCatDetails from './components/CustomDevice_components/CustomDeviceCatDetails';
import CustomDeviceCart from './components/CustomDevice_components/CustomDeviceCart';


function App() {

  const [device, setDevice] = useState(true)
  const changeDevice = () => {
    setDevice(!device)
  }

  return (
    <>
      <BrowserRouter>
        <header>
          <CustomNavbar device={device} changeDevice={changeDevice} />
        </header>
        <Routes>
          <Route path='/' element={<Home device={device} />}>
            <Route path="category/:categoryName" element={<CustomDeviceCatDetails />} />
            <Route path="/cart" element={<CustomDeviceCart />} />
          </Route>
          <Route path='/info' element={<CustomInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
