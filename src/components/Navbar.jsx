
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span>✦</span> tripco<span className="logo-dot">.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#destinations" onClick={() => setMenuOpen(false)}>Explore</a>
        <a href="#benefits" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#footer" onClick={() => setMenuOpen(false)}>About</a>

        <a href="#footer" className="login-link">Sign in</a>

        <a href="#search" className="btn">
          Sign up <ArrowRight size={15} />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
