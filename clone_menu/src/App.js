import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomInfo from './components/CustomInfo';
import Home from './components/Home';
import { useState } from 'react';


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
          <Route path='/' element={<Home device={device}  />}/>
          <Route path='/info' element={<CustomInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
