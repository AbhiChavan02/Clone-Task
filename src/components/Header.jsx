import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
      <img src='https://meeting.policybazaar.com/images/logo.png' alt="Logo" class="logo"/>
      </div>

      <nav>
        <ul>
          <li><a href="/">Insurance Products⬇️</a></li>
          <li><a href="/about">Renew Your Policy⬇️</a></li>
          <li><a href="/services">Claim⬇️</a></li>
          <li><a href="/contact">Support⬇️</a></li>
        </ul>
      </nav>
      <div className="header-buttons">
      <button className="call-btn">Call To Expert</button>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
