import Banner from "./components/Banner/Banner";
import "./HomePage.style.css";

/**
 * 1. Banner : Popular Movie의 첫번째 아이템을 노출
 * 2. Popular Movie
 * 3. Top Rated Movie
 * 4. Upcoming Movie
 */
const HomePage = () => {
  return (
    <div>
      <Banner />
      <p>HomePage</p>
    </div>
  );
};

export default HomePage;
