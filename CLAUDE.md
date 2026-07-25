# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React company website for 株式会社アイケーファーム (IK-FARM Inc.), a Japanese agricultural company based in Aichi Prefecture. The site is built with Create React App and deployed to GitHub Pages.

## Development Commands

### Start Development Server
```bash
npm start
```
Runs the app in development mode on http://localhost:3000

### Build for Production
```bash
npm run build
```
Creates optimized production build in the `build` folder

### Run Tests
```bash
npm test
```
Launches the test runner in interactive watch mode

### Deploy
本番 https://ik-farm.jp は **Cloudflare Pages** が配信しており、`master` へ push すると自動でビルド・公開される。デプロイのために実行するコマンドは無い。

**`npm run deploy` は実行しないこと。** `gh-pages` ブランチは 2026-07-19 以降、旧URL(ikfarm2059.github.io/my-website)から ik-farm.jp へ転送するリダイレクトページ専用になっている。`npm run deploy` はこれをサイト本体のビルドで上書きし、リダイレクトを壊す。

## Architecture

### Project Structure
- `src/App.js` - Main application component with header navigation and footer
- `src/components/Home.js` - Main page component that orchestrates all sections
- `src/components/` - Individual section components (Contact, Products, WorkDaily, etc.)
- `src/assets/` - Static assets including images and videos
- `public/` - Static files served directly (icons, manifest, etc.)

### Component Organization
The application follows a component-based architecture:
- **App.js** - Top-level component with navigation header and footer
- **Home.js** - Main page container that renders all sections in order
- **Section Components** - Individual components for each page section:
  - `PresidentMessage.js` - Company president message
  - `Products.js` - Product showcase
  - `WorkDaily.js` - Daily work activities
  - `CompanyMessage.js` - Company messaging
  - `Contact.js` - Contact information
  - `InstagramLink.js` - Instagram integration component

### Content Language
The website content is primarily in Japanese, serving a Japanese agricultural company. All text content, navigation, and user-facing elements are in Japanese.

### Deployment
- 本番URL: `https://ik-farm.jp`(Cloudflare Pages、プロジェクト名 my-website)。`master` への push で自動ビルド・公開
- `package.json` の `homepage` は `"."`(相対パス)
- `gh-pages` ブランチは旧URLからのリダイレクト専用。上の「Deploy」の注意を参照

### ルーティングの注意(HashRouter)
`createHashRouter` を使っているため、セクションへのリンクは `/#/#company-message` のように **ハッシュが2つ**になる。ブラウザは最初の `#` しか解釈しないので、外部から直接開かれた場合のスクロールは `src/Layout.js` の `useInitialAnchorScroll` が担当している。

## Key Dependencies
- React 19.1.0 - Main framework
- React Router DOM 7.6.3 - Client-side routing
- React Icons 5.5.0 - Icon components
- Testing Library - Testing utilities
- gh-pages - GitHub Pages deployment