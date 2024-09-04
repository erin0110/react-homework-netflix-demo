import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSlider.style.css";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <article className="movie-slide-list">
      <h3 className="fw-bold">{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </article>
  );
};

export default MovieSlider;
