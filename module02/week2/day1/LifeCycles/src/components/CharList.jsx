import { Link } from "react-router-dom";

export const CharList = ({ chars }) => {
  return (
    <>
      <h3>Characters:</h3>
      <div className="char-container">
        {chars &&
          chars.map((oneChar) => {
            return (
              <Link key={oneChar.id} to={`/one-character/${oneChar.id}`}>
                <div className="char-card">
                  <img
                    src={oneChar.image}
                    alt={oneChar.name}
                    style={{ height: "100px" }}
                  />
                  <h4>{oneChar.name}</h4>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
