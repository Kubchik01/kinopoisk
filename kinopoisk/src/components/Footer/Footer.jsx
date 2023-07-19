import React from "react";

import "../Footer/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>𝙆𝙞𝙣𝙤𝙋𝙤𝙞𝙨𝙠 &copy; {new Date().getFullYear()}</p>
        <ul className="footer-links">
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

const App = () => {
  return (
    <div className="app">
      <h1>Пример красивого футера</h1>
      <p>Содержимое страницы...</p>
      <Footer />
    </div>
  );
};
