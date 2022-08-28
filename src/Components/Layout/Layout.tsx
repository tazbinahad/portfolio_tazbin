import React from 'react';
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';
import './Layout.scss';
type layoutType = {
  children: any;
};
const Layout: React.FC<layoutType> = ({ children }) => {
  return (
    <div className="main_layout">
      <div className="left_menu">
        <LeftMenu />
      </div>
      <div className="main_content">{children}</div>
      <div className="right_menu">
        <RightMenu />
      </div>
    </div>
  );
};

export default Layout;
