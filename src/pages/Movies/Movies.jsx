import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import MovieCard from "../../common/MovieCard/MovieCard";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import "./Movies.style.css";

/**
 * 1️⃣ Movies 페이지로 올 수 있는 경로는 총 2가지
 * 1. nav 에서 클릭해서 온 경우 => PopularMovie 보여주기
 * 2. keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌
 * 2️⃣ Pagination 설치
 * 1. page state 만들기
 * 2. pagination 클릭할 때마다 page바꿔주기
 * 3. page값이 바뀔 때마다 useSearchMovie에 page까지 넣어서 fetch해주기
 */
const Movies = () => {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }
  console.log("data?.results", data?.results.length);

  return (
    <Container className="sub-page">
      <Row>
        <Col lg={4} xs={12} className="movie-filter">
          필터영역
        </Col>
        <Col lg={8} xs={12}>
          {data?.results.length === 0 ? (
            <>검색결과가 없습니다.</>
          ) : (
            <>
              <Row>
                {data?.results.map((movie, index) => (
                  <Col key={index} lg={4} xs={6} className="p-2">
                    <MovieCard movie={movie} />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Col>
      </Row>
      <div className="netflox-pagination">
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={data?.total_pages}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </div>
    </Container>
  );
};

export default Movies;
