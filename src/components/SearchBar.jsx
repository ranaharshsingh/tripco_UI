
import {
  MapPin,
  CalendarDays,
  Users,
  Search,
} from "lucide-react";

function SearchBar() {
  return (
    <form
      className="search-bar"
      id="search"
      onSubmit={(e) => e.preventDefault()}
    >
      <label>
        <span><MapPin size={16} /> Destination</span>
        <select defaultValue="">
          <option value="" disabled>Where to go?</option>
          <option>Indonesia</option>
          <option>Japan</option>
          <option>Italy</option>
          <option>Greece</option>
        </select>
      </label>

      <label>
        <span><CalendarDays size={16} /> Date</span>
        <input type="date" />
      </label>

      <label>
        <span><Users size={16} /> Guests</span>
        <select defaultValue="2 guests">
          <option>1 guest</option>
          <option>2 guests</option>
          <option>3 guests</option>
          <option>4+ guests</option>
        </select>
      </label>

      <button className="search-btn" type="submit">
        <Search size={20} />
      </button>
    </form>
  );
}

export default SearchBar;
