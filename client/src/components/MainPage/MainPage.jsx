import './MainPage.css';
import NavBar from '../NavBar/NavBar';

const MainPage = () => (
  <section className="mainpage">
    <div className="mainpage_content">
      <div className="mainpage_header">
        <div className="mainpage_logo">
          <span className="mainpage_logo1">multi</span>
          <span className="mainpage_logo2">Tech</span>
        </div>
        <NavBar />
        <button className="feedback_button">Обсудить проект</button>
      </div>
      <h1 className="mainpage_title">
        <span className="mainpage_title1">Multi</span>
        <span className="mainpage_title2">Tech</span>
      </h1>
      <div className="mainpage_tags">
        <span className="tag1">разработка сайтов</span>
        <span className="tag2">digital</span>
      </div>
      <img className="wires_pic" src="/wires.png" alt="wires" />
    </div>
  </section>
);

export default MainPage;
