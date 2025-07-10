import React from 'react';
import './App.css';
import Home from './components/Home';
import InstagramLink from './components/InstagramLink'; // InstagramIconの代わりに新しいコンポーネントをインポート
import logo from './assets/logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>株式会社アイケーファーム</h1>
        <nav>
          <a href="#about">私たちについて</a>
          <a href="#products">商品</a>
          <a href="#work-daily">Work Daily</a>
          <InstagramLink />
          <a href="#contact">お問い合わせ</a>
        </nav>
      </header>

      <Home />

      <footer className="App-footer">
        <InstagramLink />
        <p>&copy; 2025 IK-FARM Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
