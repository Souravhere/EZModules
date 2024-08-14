import React from 'react';
import { Outlet } from 'react-router-dom';
import DocsMain from './Docs/DocsMain';
import Header from './MainComponents/Header';
import Footer from './MainComponents/Footer';

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
