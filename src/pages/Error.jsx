import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="error">
      <div className="container">
        <div className="error-box">
          <img
            src="/img/404.svg"
            alt="404 Not Found"
            className="error-img"
          />
          <h1>Страница не найдена</h1>
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary"
          >
            На главную
          </button>
        </div>

      </div>
    </div>
  );
}