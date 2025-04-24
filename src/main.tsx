import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Header from './components/Header/index.tsx';
import LoadingSpinner from './components/LoadingSpinner/index.tsx';
import CartProvider from './contexts/CartItemsContext.tsx';
import MoviesProvider from './contexts/MoviesListContext.tsx';
import './index.css';
import Home from './pages/home/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MoviesProvider>
      <CartProvider>

        <BrowserRouter>
          <Header />

          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Suspense>

        </BrowserRouter>
      </CartProvider>
    </MoviesProvider>
  </StrictMode>
)
