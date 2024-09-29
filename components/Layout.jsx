// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../src/assets/logo_ViniciusLeprevost.png";
import '../components/Layout.css';

export default function Layout() {
  return (
      <>
          <div className="image-container">
              <img src={logo} alt="Logo" className="logo-image"/>
          </div>
          <nav>
              <Link to="/">Home</Link> |
              <Link to="/about">About me</Link> |
              <Link to="/projects">Projects</Link> |
              <Link to="/services">Services</Link> |
              <Link to="/contact">Contact Me</Link>
          </nav>
          <br/>
          <hr/>
      </>
  );
}
