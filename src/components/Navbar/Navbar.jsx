import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={s.nav}>
      <div className={s.nav__item}>
        <a className={ `${s.nav__item__link} ${s.active}`} href="#s">Profile</a>
      </div>
      <div className={s.nav__item}>
        <a className={s.nav__item__link} href="#s">Messages</a>
      </div>
      <div className={s.nav__item}>
        <a className={s.nav__item__link} href="#s">News</a>
      </div>
      <div className={s.nav__item}>
        <a className={s.nav__item__link} href="#s">Music</a>
      </div>
      <div className={s.nav__item}>
        <a className={s.nav__item__link} href="#s">Settings</a>
      </div>
    </nav>
    );
};

export default Navbar;