
import { ArrowRight, Play } from "lucide-react";
import SearchBar from "./SearchBar";
import { imageUrl } from "../data/destinations";

function Hero() {
  return (
    <section className="hero section-container" id="home">

      <div className="hero-content">
        <span className="eyebrow">
          ✦ YOUR NEXT JOURNEY STARTS HERE
        </span>

        <h1>
          Explore the whole world
          <br />
          and enjoy its <em>beauty.</em>
        </h1>

        <p>
          Find your perfect escape. Discover extraordinary
          places and make memories that last a lifetime.
        </p>

        <div className="hero-buttons">
          <a href="#destinations" className="btn">
            Explore destinations <ArrowRight size={16} />
          </a>

          <a href="#video" className="watch-link">
            <span><Play size={13} fill="currentColor" /></span>
            Watch our story
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={imageUrl("photo-1501785888041-af3ef285b470", 1600)}
          alt="Beautiful tropical destination"
        />

        <div className="image-label">
          <span>✈</span>
          <div>
            <strong>Discover paradise</strong>
            <small>Your journey awaits</small>
          </div>
        </div>
      </div>

      <SearchBar />

    </section>
  );
}

export default Hero;
