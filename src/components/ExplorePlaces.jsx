
import { useState } from "react";
import { MapPin, Star, ArrowRight, ChevronDown } from "lucide-react";
import { destinations, imageUrl } from "../data/destinations";

function ExplorePlaces() {
  const [category, setCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    "All",
    "Nature",
    "Culture",
    "Beach",
    "Adventure",
  ];

  const filteredPlaces = destinations.filter((place) => {
    return category === "All" || place.category === category;
  });

  const visiblePlaces = showAll
    ? filteredPlaces
    : filteredPlaces.slice(0, 6);

  return (
    <section className="section-container section explore">

      <div className="explore-heading">
        <div className="section-heading">
          <span className="eyebrow">HANDPICKED FOR YOU</span>
          <h2>Explore more</h2>
          <p>
            Discover new destinations and hidden gems
            around the world.
          </p>
        </div>

        <a href="#destinations" className="text-link">
          View all places <ArrowRight size={15} />
        </a>
      </div>

      <div className="filters">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="destination-grid">
        {visiblePlaces.map((place) => (
          <article className="destination-card" key={place.id}>

            <div className="destination-image">
              <img
                src={imageUrl(place.image, 700)}
                alt={place.name}
              />

              <span className="destination-tag">
                {place.category}
              </span>

              <button className="heart" aria-label="Save destination">
                ♡
              </button>
            </div>

            <div className="destination-info">
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

            <div className="rating">
              <Star size={12} fill="currentColor" />
              4.8 <span>· 120 reviews</span>
            </div>

          </article>
        ))}
      </div>

      <button
        className="btn btn-outline show-more"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show less" : "Show more places"}
        <ChevronDown size={15} />
      </button>

    </section>
  );
}

export default ExplorePlaces;
