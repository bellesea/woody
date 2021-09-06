import React from 'react'
import HeadObject from './Head'
import Header from './Header'
import MyModal from "./Modal"
import Footer from '../slices/Footer/index'

const Layout = ({ children, menu }) => {
  return (
    <div>
      <HeadObject />
      <main>{children}</main>
      <Header menu={menu} />
      <Footer />
    </div>
  );
};

export default Layout;
