import "./Navbar.scss";
export default function Navbar() {
  return (
    <nav className="navbar">
      <logo>
        <a>logo</a>
      </logo>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
      <button>Get In Touch</button>
    </nav>
  );
}
