import { useState } from "react";
import { FaWindowClose, FaCaretSquareDown } from "react-icons/fa";

const Tour = ({ id, img, name, city, info, onRemove }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt={name} />
        <span className="close-btn" onClick={() => onRemove(id)}>
          <FaWindowClose />
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={() => setShowInfo(!showInfo)}>
            <FaCaretSquareDown />
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  );
};

export default Tour;
