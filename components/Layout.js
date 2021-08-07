import React from "react";
import Head from "next/head";
import Header from './Header'

const Layout = ({ children, menu }) => {
  return (
    <div>
      <Head>
        <title> Woody Keppel </title>
      </Head>
      <main>{children}</main>
      <Header menu={menu} />
    </div>
  );
};

export default Layout;