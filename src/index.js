import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/BaiTapThucHanhLayout/Header';
import Body from './Components/BaiTapThucHanhLayout/Body';
import Footer from './Components/BaiTapThucHanhLayout/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <Body/>
    <Footer/>
  </div>
);


