
import { ArrowRight } from "lucide-react";
import { imageUrl } from "../data/destinations";

function Adventure() {
  const cities = [
    {
      name: "PARIS",
      image: "photo-1502602898657-3e91760cbb34",
    },
    {
      name: "NEW YORK",
      image: "photo-1534430480872-3498386e7856",
    },
    {
      name: "SEOUL",
      image: "photo-1546872000-7a7e1b8f7c6a",
    },
    {
      name: "BALI",
      image: "photo-1537996194471-e657df975ab4",
    },
  ];

  return (
    <section className="section-container section adventure">

      <div className="section-heading">
        <span className="eyebrow">MAKE IT HAPPEN</span>
        <h2>Let's go on an adventure</h2>
        <p>Find and book a great experience.</p>
      </div>

      <div className="city-grid">
        {cities.map((city) => (
          <a href="#search" className="city-card" key={city.name}>
            <img
              src={imageUrl(city.image, 500)}
              alt={city.name}
            />

            <div className="city-info">
              <strong>{city.name}</strong>
              <span>Explore now <ArrowRight size={12} /></span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}

export default Adventure;
