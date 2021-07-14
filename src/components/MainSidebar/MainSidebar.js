import React from 'react';
import MainMenu from '../MainMenu/MainMenu';

import Logo from '../Logo';
const MainSidebar = () => {
  return (
    <nav className="contentNav">
      <Logo />
      <div className="avatar">
        <img
          src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg"
          alt="avatar.png"
        />
        <p className="UserAvatarName">Username</p>
      </div>
      <MainMenu />
    </nav>
  );
};

export default MainSidebar;
