import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import App from './App';
import Contato from './Contato';
import Empresa from './Empresa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/empresa' element={<Empresa/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


