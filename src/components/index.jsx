import React from 'react';
import Menu from './menu/Menu';
import '../assets/styles/global/index.css';
import SubMenu from './submenu/SubMenu';
import Slider from './slide-home/Slide';
import Searching from './movile/Searching';
import Layout from './layout/Layout';

const Index = () => {
  return (
    <>
      <Menu />
      <SubMenu />
      <div>
        <Slider />
        <Searching />
      </div>
      <div>
        <Layout />
      </div>
    </>
  );
};
export default Index;
