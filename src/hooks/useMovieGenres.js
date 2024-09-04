import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGenres = () => {
  return api.get(`/genre/movie/list?language=ko`);
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMovieGenres,
    select: (result) => result.data.genres,
    staleTime: 300000, //5 minites
  });
};
