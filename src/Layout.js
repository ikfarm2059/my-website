import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './App.css';
import InstagramLink from './components/InstagramLink';
import logo from './assets/logo.jpg';

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <h1><Link to="/">株式会社アイケーファーム</Link></h1>
        <nav>
          <NavHashLink smooth to="/#about">私たちについて</NavHashLink>
          <NavHashLink smooth to="/#products">商品</NavHashLink>
          <NavHashLink smooth to="/#work-daily">Work Daily</NavHashLink>
          <NavHashLink smooth to="/#company-message">Message from IKfarm</NavHashLink>
          <InstagramLink />
          <NavHashLink smooth to="/#contact">お問い合わせ</NavHashLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="App-footer">
        <InstagramLink />
        <p>詳しい内容や詳細については、メールまたはInstagramのDMで気楽にご相談ください</p>
        <p>&copy; 2025 IK-FARM Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;