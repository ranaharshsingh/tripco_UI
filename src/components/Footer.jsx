
import {
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer section-container" id="footer">

      <div className="footer-brand">
        <a href="#home" className="logo">
          <span>✦</span> tripco<span className="logo-dot">.</span>
        </a>

        <p>
          Making the world your playground.
          <br />
          Travel more, worry less.
        </p>

        <div className="socials">
          <a href="#" aria-label="Instagram"><Instagram /></a>
          <a href="#" aria-label="Facebook"><Facebook /></a>
          <a href="#" aria-label="Twitter"><Twitter /></a>
        </div>
      </div>

      <div className="footer-column">
        <h4>About</h4>
        <a href="#">Our story</a>
        <a href="#">Careers</a>
        <a href="#">Blog</a>
        <a href="#">Press</a>
      </div>

      <div className="footer-column">
        <h4>Company</h4>
        <a href="#">How it works</a>
        <a href="#">Why Tripco</a>
        <a href="#">Partnerships</a>
        <a href="#">Contact</a>
      </div>

      <div className="footer-column">
        <h4>Support</h4>
        <a href="#">Help center</a>
        <a href="#">Safety</a>
        <a href="#">Terms & conditions</a>
        <a href="#">Privacy policy</a>
      </div>

      <div className="newsletter">
        <h4>Newsletter</h4>
        <p>Get travel inspiration and our best offers.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Your email address"
          />

          <button type="submit" aria-label="Subscribe">
            <ArrowRight size={16} />
          </button>
        </form>
      </div>

      <div className="copyright">
        <p>© 2025 Tripco. All rights reserved.</p>
        <p>Made for curious travelers ✦</p>
      </div>

    </footer>
  );
}

export default Footer;
