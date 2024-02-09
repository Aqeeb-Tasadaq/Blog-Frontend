import React from "react";
import rectangle from "../../assets/Rectangle 38.png";
import avatar from "../../assets/profile mage.png";
import { Link } from "react-router-dom";

const Card = ({ title, img1, name, img2, des, id, date, photo }) => {
  return (
    <div>
      <Link className="custom-link" to={`/singlePost/${id}`}>
        <div className="card">
          <div className="image">
            <img
              src={img1 ? `http://localhost:4000/images/${img1}` : rectangle}
              alt="pic"
            />
          </div>
          <div className="card_bottom">
            <button>{title ? title : "Technology"}</button>
            <div className="card_text">
              <p>
                {des
                  ? des
                  : "The Impact of Technology on the Workplace: How Technology is Changing"}
              </p>
            </div>
            <div className="profile">
              <div className="profile_pic">
                <img src={photo ? `http://localhost:4000/images/${photo}` : avatar} alt="profile" />
                <p>{name ? name : "Jack"}</p>
              </div>
              <div className="date">
                <p>{date ? date : "25/12/2023"}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
