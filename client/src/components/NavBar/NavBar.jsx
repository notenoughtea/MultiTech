import './NavBar.css';

const NavBar = () => (
  <div className="navbar">
    <div className="navbar_content">
      <li><a href="/news">Новости</a></li>
      <li><a href="/services">Услуги</a></li>
      <li><a href="/portfolio">Портфолио</a></li>
      <li><a href="/lido">Лидогенерация</a></li>
      <li><a href="/contacts">Контакты</a></li>
    </div>
  </div>
);

export default NavBar;
