import Alert from "react-bootstrap/Alert";
import Loading from "../../../../common/Loading/Loading";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { movieResponsive } from "../../../../constants/responsive";
import { useUpComingMoviesQuery } from "../../../../hooks/useUpComingMovies";

const UpComingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <MovieSlider
      title="UpComing Movies"
      movies={data.results}
      responsive={movieResponsive}
    />
  );
};

export default UpComingMovieSlide;
