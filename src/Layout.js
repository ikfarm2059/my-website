import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './App.css';
import InstagramLink from './components/InstagramLink';
import { siteContent } from './data/siteContent';
import logo from './assets/logo-new.png';

// 外部から特定のセクションへ直接飛ばすための短い入口。
// 例: https://ik-farm.jp/?to=recruit
const SECTION_SHORTCUTS = {
  recruit: 'company-message',
  products: 'products',
  work: 'work-daily',
  contact: 'contact'
};

// 外部(Instagramのプロフィールなど)から開かれたときに、目的のセクションまでスクロールする。
// 対応する形は3つ:
//   1. /?to=recruit          … 推奨。Instagramのリンク欄は # を %23 に変えてしまうため
//   2. /#/#company-message   … サイト内リンクと同じ形
//   3. /#/%23company-message … 上を貼り付けてエンコードされた形
function useTargetSectionScroll() {
  useEffect(() => {
    const shortcut = new URLSearchParams(window.location.search).get('to');

    let hash = window.location.hash;
    try {
      hash = decodeURIComponent(hash);
    } catch (e) {
      // 壊れたエスケープが混じっていた場合は元の文字列のまま扱う
    }

    const anchor = SECTION_SHORTCUTS[shortcut] || hash.split('#')[2];
    if (!anchor) return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 写真や動画の読み込みで位置がずれるため、落ち着くまで数回やり直す。
    // 途中で本人がスクロールしたら邪魔しないよう打ち切る。
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    window.addEventListener('wheel', cancel, { passive: true });
    window.addEventListener('touchstart', cancel, { passive: true });

    const restoreScrollRestoration = () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };

    let tries = 0;
    const timer = window.setInterval(() => {
      const target = document.getElementById(anchor);
      tries += 1;

      if (cancelled || !target || tries > 12) {
        window.clearInterval(timer);
        restoreScrollRestoration();
        return;
      }

      target.scrollIntoView();
    }, 200);

    return () => {
      window.clearInterval(timer);
      restoreScrollRestoration();
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchstart', cancel);
    };
  }, []);
}

function Layout() {
  useTargetSectionScroll();

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
