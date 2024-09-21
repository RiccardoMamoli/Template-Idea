import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import { BrowserRouter, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <BrowserRouter>
        <Routes>
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
