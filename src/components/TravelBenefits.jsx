
import { ArrowRight } from "lucide-react";
import { imageUrl } from "../data/destinations";

function TravelBenefits() {
  const features = [
    {
      id: 1,
      title: "Find trips that fit your freedom",
      description: "Choose the perfect trip from our handpicked destinations.",
    },
    {
      id: 2,
      title: "Get back to nature by travel",
      description: "Reconnect with nature and discover peaceful places.",
    },
    {
      id: 3,
      title: "Reignite those travel tastebuds",
      description: "Taste local flavors and experience a new culture.",
    },
  ];

  return (
    <section className="benefits section-container" id="benefits">

      <div className="benefits-content">

        <div className="section-heading">
          <span className="eyebrow">WHY TRAVEL WITH US</span>
          <h2>Travel to make sweet memories</h2>
          <p>
            Find trips that fit a flexible lifestyle,
            made just for you.
          </p>
        </div>

        <div className="feature-list">
          {features.map((feature) => (
            <div className="feature" key={feature.id}>
              <span className="feature-number">
                0{feature.id}
              </span>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#destinations" className="btn">
          Start your journey <ArrowRight size={16} />
        </a>

      </div>

      <div className="benefits-image">
        <img
          src={imageUrl("photo-1464822759023-fed622ff2c3b", 900)}
          alt="Beautiful mountain landscape"
        />

        <div className="traveler-bubble">
          <span>👩🏻</span>
          <div>
            <strong>Sarah Williams</strong>
            <small>Travel enthusiast</small>
          </div>
        </div>

        <div className="travel-stat">
          <strong>12k+</strong>
          <small>Happy travelers</small>
        </div>
      </div>

    </section>
  );
}

export default TravelBenefits;
