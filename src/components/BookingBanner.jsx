
import { Play, ArrowRight } from "lucide-react";
import { imageUrl } from "../data/destinations";

function BookingBanner() {
  return (
    <section className="booking section-container" id="video">

      <div className="booking-content">
        <span className="eyebrow">YOUR ADVENTURE, YOUR WAY</span>

        <h2>
          Book tickets
          <br />
          and go now!
        </h2>

        <p>
          The world is waiting. Your next unforgettable
          experience is just a click away.
        </p>

        <a href="#search" className="btn">
          Book now <ArrowRight size={16} />
        </a>
      </div>

      <div className="booking-image">
        <img
          src={imageUrl("photo-1510414842594-a61c69b5ae57", 1200)}
          alt="Beautiful turquoise ocean"
        />

        <button className="play-button" aria-label="Play travel video">
          <Play fill="currentColor" size={20} />
        </button>
      </div>

    </section>
  );
}

export default BookingBanner;
