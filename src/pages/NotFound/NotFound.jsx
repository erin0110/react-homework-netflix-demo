import "./NotFound.style.css";

const NotFound = () => {
  return (
    <section className="page-not-found">
      <div>
        <h2>앗! 페이지가 없어요😭</h2>
        <p>
          요청하신 페이지가 존재하지 않거나, 이름이 변경되었거나, 일시적으로
          사용이 중단되었어요.
        </p>
        <a href="/">홈으로 가기</a>
      </div>
    </section>
  );
};

export default NotFound;
