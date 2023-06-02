import React, { useState } from "react";
import "./swiper.css";
import image1 from "../../assets/i1.png";
import image2 from "../../assets/i2.jpg";
import image3 from "../../assets/i3.jpg";
import image4 from "../../assets/i4.jpg";
import { Link } from "react-router-dom";

const Swiper = ({ format, item }) => {
  const [swiperObj, setSwiperObj] = useState([
    {
      id: 1,
      path: image1,
      active: true,
    },
    {
      id: 2,
      path: image2,
      active: false,
    },
    {
      id: 3,
      path: image3,
      active: false,
    },
    {
      id: 4,
      path: image4,
      active: false,
    },
  ]);

  return (
    <>
      {format ? (
        <div>
          {format && localStorage.getItem("seen" + item.id) ? (
            <div
              className={
                format === "horizontal" ? "seen seen-h" : "seen seen-v"
              }
            >
              Просмотрено
            </div>
          ) : null}
          <Link to={`/item/${item.id}`}>
            <img
              className={
                format === "horizontal" ? "item-image-h" : "item-image-v"
              }
              src={swiperObj.find((item) => item.active === true).path}
              alt="ads"
            />
          </Link>
          <div className="swiper">
            {swiperObj.map((item) => (
              <div
                className={item.active ? "circle-active" : "circle"}
                key={item.id}
                onClick={() =>
                  setSwiperObj((prevState) => {
                    const newState = prevState.map((el) =>
                      el.id === item.id
                        ? { ...el, active: true }
                        : { ...el, active: false }
                    );
                    return newState;
                  })
                }
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ position: "relative" }}>
          <img
            className="card-image"
            src={swiperObj.find((item) => item.active === true).path}
            alt="ads"
          />
          <div className="card-swiper">
            {swiperObj.map((item) => (
              <div
                className={item.active ? "circle-active" : "circle"}
                key={item.id}
                onClick={() =>
                  setSwiperObj((prevState) => {
                    const newState = prevState.map((el) =>
                      el.id === item.id
                        ? { ...el, active: true }
                        : { ...el, active: false }
                    );
                    return newState;
                  })
                }
              ></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Swiper;
