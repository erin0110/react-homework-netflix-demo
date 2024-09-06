import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Movies from "./pages/Movies/Movies";
import NotFound from "./pages/NotFound/NotFound";

/**
 * 페이지 목록
 * 1. 홈페이지 ▶ '/'
 * 2. 영화 전체를 보여주는 페이지(서치) ▶ '/movies'
 * 3. 영화 상세 페이지 ▶ '/movies/:id'
 */

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* 🔻Route에 index를 쓰면 부모의 path를 그대로 쓰겠다는 의미 */}
          <Route index element={<HomePage />} />
          {/* 🔻movies 이하의 페이지가 많은 경우 이런식으로 nested route를 사용할 수 있다. */}
          <Route path="/movies">
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
