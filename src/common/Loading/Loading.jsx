import { Spinner } from "react-bootstrap";
import "./Loading.style.css";

const Loading = () => {
  return (
    <div className="pageLoading">
      <div className="spinner">
        <Spinner animation="grow" variant="danger" size="sm" />
        <Spinner animation="grow" variant="danger" size="sm" />
        <Spinner animation="grow" variant="danger" size="sm" />
      </div>
    </div>
  );
};

export default Loading;
