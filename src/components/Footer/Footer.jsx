import { Link } from "react-router-dom";
import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        <div className="items">
          <Link to="/">
            <img
              src="https://www.foxcoders.com/demo/foxever/assets/images/logo.png"
              alt="brand logo"
            />
          </Link>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel beatae
            sit natus unde rem ipsum odit nisi sint nostrum officia dolores,
            voluptatem, dolore quos saepe optio officiis necessitatibus
            voluptatum error.
          </p>
        </div>
        <div className="items">
          <h3>Our Company</h3>
          <ul className="links">
            <li>
              <Link to="/">About Company</Link>
            </li>
            <li>
              <Link to="/">Our Testimonials</Link>
            </li>
            <li>
              <Link to="/">Latest News</Link>
            </li>
            <li>
              <Link to="/">Our Mission</Link>
            </li>
            <li>
              <Link to="/">Get a Free Quote</Link>
            </li>
          </ul>
        </div>
        <div className="items">
          <h3>Our Services </h3>
          <ul className="links">
            <li>
              <Link to="/">Web Design </Link>
            </li>
            <li>
              <Link to="/">Graphic Design </Link>
            </li>
            <li>
              <Link to="/">Financial Help </Link>
            </li>
            <li>
              <Link to="/">App Development Print </Link>
            </li>
            <li>
              <Link to="/">Design</Link>
            </li>
          </ul>
        </div>
        <div className="items">
          <h3> Contact Us </h3>
          <div className="links">
            <p>Location: 2750 Quadra Street Victoria, Canada</p>
            <p>Email:info@foxever.com</p>
            <p>Phone:+324-9442-515</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">Foxever © 2019 All Right Reserved</div>
        <ul className="right">
          <li>
            <Link to="/">Terms & Condition</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/"> Help</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
