import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reduxStore from '../../component/Redux/Store/Store';
import Header from '../../component/Header/Header';
import Slide from '../../component/Slider/Slider';
import Content from '../../component/Content/Content';
import Footer from '../../component/Footer/Footer';
import Contracts from '../../component/nhap/Nhap';
import axios from 'axios';
const store = configureStore({
  reducer: reduxStore,
});
export default function Home() {
  // Tạo store Redux
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>


        <Header />
    
        <Slide />
        <Content />
        <Footer />
        <Contracts />
 
    </div>
  );
}