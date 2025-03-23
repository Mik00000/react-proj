import React from "react";
import "./Footer.css"

const Footer = ({ name, menu, phone, email }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h3>{name}</h3>
          <p>Розробка з любовʼю та креативом. Всі права захищено © {new Date().getFullYear()}</p>
        </div>

        <div className="footer-section nav">
          <h4>Меню</h4>
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Контакти</h4>
          <p>Email: {email}</p>
          <p>Телефон: {phone}</p>
        </div>

        <div className="footer-section social">
          <h4>Ми в соцмережах</h4>
          <div className="social-icons">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
