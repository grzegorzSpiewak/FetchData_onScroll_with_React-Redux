import React from 'react';
/* Components */
import Navigation from 'components/layout/navigation';
import Logo from 'components/common/logo';

const header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  )
};

export default header;
