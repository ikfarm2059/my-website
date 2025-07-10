import React from 'react';

const InstagramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" style={{ border: 'none', borderRadius: '8px' }}>
    <defs>
      <linearGradient id="ig-gradient" x1="0.15" y1="0.1" x2="0.85" y2="0.9">
        <stop offset="0%" stopColor="#FCD670" />
        <stop offset="25%" stopColor="#F77737" />
        <stop offset="50%" stopColor="#D62976" />
        <stop offset="75%" stopColor="#962FBF" />
        <stop offset="100%" stopColor="#4F5BD5" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#ig-gradient)" />
    <circle cx="16" cy="16" r="7.5" stroke="white" strokeWidth="2.5" fill="none" />
    <circle cx="24.5" cy="7.5" r="2" fill="white" />
  </svg>
);

export default InstagramIcon;