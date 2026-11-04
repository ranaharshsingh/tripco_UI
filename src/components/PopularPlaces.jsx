
import { MapPin } from "lucide-react";
import { destinations, imageUrl } from "../data/destinations";

function PopularPlaces() {
  const popular = destinations.slice(0, 4);

  return (
    <section className="section-container section" id="destinations">

      <div className="section-heading">
        <span className="eyebrow">TOP DESTINATIONS</span>
        <h2>Popular places</h2>
        <p>
          Let's enjoy this heaven on earth.
          Find your next favorite place.
        </p>
      </div>

      <div className="popular-grid">
        {popular.map((place) => (
          <article className="popular-card" key={place.id}>

            <div className="popular-image">
              <img
                src={imageUrl(place.image, 600)}
                alt={place.name}
              />

              <button className="heart" aria-label="Save destination">
                ♡
              </button>
            </div>

            <div className="card-meta">
              <div>
                <h3>{place.name}</h3>
                <p>
                  <MapPin size={12} />
                  {place.country}
                </p>
              </div>

              <span className="price">
                ${place.price}
                <small>/person</small>
              </span>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}

export default PopularPlaces;
