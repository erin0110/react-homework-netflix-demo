import Alert from "react-bootstrap/Alert";
import Loading from "../../../../common/Loading/Loading";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { movieResponsive } from "../../../../constants/responsive";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <MovieSlider
      title="TopRated Movies"
      movies={data.results}
      responsive={movieResponsive}
    />
  );
};

export default TopRatedMovieSlide;
