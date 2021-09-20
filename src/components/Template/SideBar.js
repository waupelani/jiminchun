import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/profile.webp`} alt="" />
      </Link>
      <header>
        <h2>Jimin Chun</h2>
        <p><a href="mailto:jmchun95@hotmail.com">jmchun95@hotmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jimin. I like to design things.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/naval-tweet') ? <Link to="/naval-tweet" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jimin Chun <Link to="/">jiminchun.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
