import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './components/Header/index.tsx';
import './index.css';
import Home from './pages/home/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>
)
