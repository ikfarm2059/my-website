import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './App.css';
import InstagramLink from './components/InstagramLink';
import { siteContent } from './data/siteContent';
import logo from './assets/logo-new.png';

// 外部(Instagramのプロフィールなど)から /#/#company-message の形で開かれたときは、
// HashRouterがルート部分しか見ないため、残りのアンカーへ自分でスクロールする。
function useInitialAnchorScroll() {
  useEffect(() => {
    const anchor = window.location.hash.split('#')[2];
    if (!anchor) return;

    const timer = window.setTimeout(() => {
      const target = document.getElementById(anchor);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);
}

function Layout() {
  useInitialAnchorScroll();

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt={siteContent.company.logoAlt} />
        </Link>
        <h1><Link to="/">{siteContent.company.name}</Link></h1>
        <nav>
          {siteContent.nav.slice(0, 4).map((item) => (
            <NavHashLink
              key={item.href}
              smooth
              to={item.href}
              className={item.href === '/#company-message' ? 'nav-recruit' : undefined}
            >
              {item.label}
            </NavHashLink>
          ))}
          <InstagramLink />
          <NavHashLink smooth to={siteContent.nav[4].href}>{siteContent.nav[4].label}</NavHashLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="App-footer">
        <InstagramLink />
        <p>{siteContent.footer.message}</p>
        <p>{siteContent.company.copyright}</p>
      </footer>
    </div>
  );
}

export default Layout;
