
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularPlaces from "./components/PopularPlaces";
import TravelBenefits from "./components/TravelBenefits";
import ExplorePlaces from "./components/ExplorePlaces";
import Adventure from "./components/Adventure";
import BookingBanner from "./components/BookingBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <PopularPlaces />
        <TravelBenefits />
        <ExplorePlaces />
        <Adventure />
        <BookingBanner />
      </main>

      <Footer />
    </>
  );
}

export default App;
