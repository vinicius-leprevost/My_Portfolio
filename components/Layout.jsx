// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../src/assets/logo_ViniciusLeprevost.png";

export default function Layout() {
  return (
      <>
          <img src={logo} alt="Logo" style={{width: '250px', height: '250px'}}/>
          <nav>
              <Link to="/">Home</Link> |
              <Link to="/about">About me</Link> |
              <Link to="/services">Projects</Link> |
              <Link to="/projects">Services</Link> |
              <Link to="/contact">Contact Me</Link>
          </nav>
          <br/>
          <hr/>
      </>
  );
}
