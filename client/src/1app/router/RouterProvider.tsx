import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../../2pages/Layout/Layout';
import ProductsPage from '../../2pages/ProductsPage/ProductsPage';
import OrdersPage from '../../2pages/OrdersPage/OrdersPage';
import CartPage from '../../2pages/CartPage/CartPage';
import CheckoutPage from '../../2pages/CheckoutPage/CheckoutPage';
import OneProductPage from '../../2pages/OneProductPage/OneProductPage';

export default function RouterProvider() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/products/:productId" element={<OneProductPage />} />
      </Route>
    </Routes>
  );
}
