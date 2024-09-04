import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpComingMovieSlide from "./components/UpComingMovieSlide/UpComingMovieSlide";
import "./HomePage.style.css";

/**
 * 1. Banner : Popular Movie의 첫번째 아이템을 노출
 * 2. Popular Movie
 * 3. Top Rated Movie
 * 4. Upcoming Movie
 */
const HomePage = () => {
  return (
    <main>
      <Banner />
      <section className="movie-list">
        <PopularMovieSlide />
        <TopRatedMovieSlide />
        <UpComingMovieSlide />
      </section>
    </main>
  );
};

export default HomePage;
