import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Categories from './Categories';
import Products from './Products';
import { BrowserRouter, Routes, Route } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<h1>hello</h1>} />
          <Route path="/categories" element={<Categories />}>
            <Route index element={<h1>please select category</h1>} />

            <Route path=":categoriesId" element={<Products />} />
            {/* <Route path="/categories/products" element={<Products />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


