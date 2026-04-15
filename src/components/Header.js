'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setIsMenuOpen(false)}>
          Dripping Ink
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>Archive</Link></li>
            <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><ThemeToggle /></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="mobile-controls">
          <div className="mobile-theme-wrapper">
             <ThemeToggle />
          </div>
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/blog" onClick={toggleMenu}>Archive</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
