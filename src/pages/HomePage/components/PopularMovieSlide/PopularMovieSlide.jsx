import Alert from "react-bootstrap/Alert";
import Loading from "../../../../common/Loading/Loading";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { movieResponsive } from "../../../../constants/responsive";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <MovieSlider
      title="Popular Movies"
      movies={data.results}
      responsive={movieResponsive}
    />
  );
};

export default PopularMovieSlide;
