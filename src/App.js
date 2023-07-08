
import { Button, Grid, Typography, Container, createTheme, ThemeProvider, Box } from '@mui/material';
import { useEffect } from 'react';
import Home from './components/home/Home';
import { createHashRouter, Route, RouterProvider, Routes, useLocation } from 'react-router-dom';
import LicenseDetails from './components/details/LicenseDetail';
import Error404 from './components/404';


function App() {
  const location = useLocation();


  useEffect(() => {
    document.body.style.backgroundColor = '#340EAF'
  } , [location])

  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/license/:name' element={<LicenseDetails/>} />
        <Route path='/*' element={<Error404/>} />
      </Routes>

    </>
  );
}

export default App;