"use client"; // Use this to ensure it's a Client component

import React, { useState } from 'react';
import styles from '../app/styles/page.module.css';
import '../app/styles/global.css';

export default function HomePage() {
  // State to track the active menu (either "makanan" or "minuman")
  const [activeContent, setActiveContent] = useState('default');

  // Function to render the appropriate content based on the active button
  const renderContent = () => {
    if (activeContent === 'makanan') {
      return (
        <div className={styles.mainContent}>
          <h2>Menu Makanan</h2>
          <p>Daftar makanan yang tersedia:</p>
          <ul>
            <li>Ikan Bakar</li>
            <li>Cumi Goreng</li>
            <li>Udang Saus Padang</li>
            <li>Kepiting Rebus</li>
          </ul>
        </div>
      );
    } else if (activeContent === 'minuman') {
      return (
        <div className={styles.mainContent}>
          <h2>Menu Minuman</h2>
          <p>Daftar minuman yang tersedia:</p>
          <ul>
            <li>Es Teh Manis</li>
            <li>Jus Jeruk</li>
            <li>Air Kelapa</li>
            <li>Kopi Hitam</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className={styles.mainContent}>
          <h2>Welcome to Rumah Makan Ikan Bakar</h2>
          <p>Silakan pilih Menu Makanan atau Minuman untuk melihat daftar yang tersedia.</p>
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Website Rumah Makan Ikan Bakar</h1>
        <nav className={styles.navbar}>
          <a href="#navbar">Navbar 1</a>
          <a href="#navbar">Navbar 2</a>
          <a href="#navbar">Navbar 3</a>
          <a href="#navbar">Navbar 4</a>
        </nav>
      </header>

      <aside className={styles.sidebar}>
        <button onClick={() => setActiveContent('makanan')}>Menu Makanan</button>
        <button onClick={() => setActiveContent('minuman')}>Menu Minuman</button>
        <button onClick={() => setActiveContent('default')}>Home</button>
      </aside>

      <main className={styles.content}>
        {renderContent()}
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Rumah Makan Ikan Bakar</p>
      </footer>
    </div>
  );
}
