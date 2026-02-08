/**
 * Header component with navigation and mobile menu.
 * @author Tristan Mahinay
 */
'use client';

import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <a href="/" className={styles.logo} aria-label="Gotchu Home">
          <span className={styles.logoIcon}>🏠</span>
          <span className={styles.logoText}>got<span className="gradient-text">chu</span></span>
        </a>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`} role="navigation">
          <ul className={styles.navList}>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#trust">Trust & Safety</a></li>
            <li><a href="#download" className="btn btn-primary">Download App</a></li>
          </ul>
        </nav>

        <button 
          className={styles.mobileMenuBtn}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
        </button>
      </div>
    </header>
  );
}
