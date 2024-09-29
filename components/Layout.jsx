// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../src/assets/logo_ViniciusLeprevost.png";
import '../components/Layout.css';
import Swal from 'sweetalert2';


const viewCredits = () => {
    Swal.fire({
        title: 'Thanks for visiting my portfolio!',
        html: `
            <p>Here is the information about me:</p>
            <ul style="text-align: left;">
              <li><strong>My name:</strong> Vinicius Carvalho Leprevost</li>
              <li><strong>You can call me:</strong> Vini</li>
              <li><strong>StudentID:</strong> 301463037</li>
              <li><strong>Contact Number:</strong>(437) 335-1142</li>
              <li><strong>Last Update:</strong> 09-28-2024</li>
            </ul>`,
        icon: 'success',
        confirmButtonText: 'Close'
    });
};





export default function Layout() {
  return (
      <>
          <div className="image-container">
              <img src={logo} alt="Logo" className="logo-image"/>

              <a>
                  <button onClick={viewCredits} className={"creditsBt"}>Centennial College Student Info</button>
              </a>
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
