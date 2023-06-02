import React, { useEffect } from "react";
import "./itemsRender.css";
import { priceValidator } from "../../utils/priceValidator";
import { dateValidator } from "../../utils/dateValidator";
import { useRecoilValue } from "recoil";
import { formatListState } from "../../storage/atoms/main";
import { Link } from "react-router-dom";
import Swiper from "../swiper/swiper";

const ItemsRender = ({ data }) => {
  const format = useRecoilValue(formatListState);

  const handleActiveIcon = (id) => {
    const currentValue = localStorage.getItem("favorite" + id);
    const newValue = currentValue === "true" ? "false" : "true";
    localStorage.setItem("favorite" + id, newValue);
    const heartIcons = document.querySelectorAll(".heartIcon");

    heartIcons.forEach((heartIcon) => {
      const datasetId = heartIcon.dataset.id;
      if (datasetId === id) {
        if (localStorage.getItem("favorite" + id)) {
          heartIcon.classList.toggle("heartIcon-active");
        } else {
          heartIcon.classList.toggle("");
        }
      }
    });
  };

  useEffect(() => {
    const heartIcons = document.querySelectorAll(".heartIcon");
    heartIcons.forEach((heartIcon) => {
      const id = heartIcon.dataset.id;
      if (localStorage.getItem("favorite" + id) === "true") {
        heartIcon.classList.add("heartIcon-active");
      }
    });
  }, [data]);

  return data.map((item) => (
    <div
      className={format === "horizontal" ? "item-h" : "item-v"}
      key={item.id}
    >
      <Swiper format={format} item={item} />
      <div
        className={
          format === "horizontal" ? "item-padding-h" : "item-padding-v"
        }
      >
        <div className="description-1">
          <Link to={`/item/${item.id}`} className="item-price">
            {priceValidator(item.price)}
          </Link>
          <svg
            className={"heartIcon heartIcon-" + item.id}
            data-id={item.id}
            width="20"
            height="19"
            viewBox="0 0 20 19"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleActiveIcon(item.id)}
          >
            <path d="M19.4321 9.21218C18.5975 11.5152 12.8243 16.697 10.0421 19C7.60767 16.8889 2.42577 12.206 1.17376 10.3636C-0.391238 8.06056 -0.391267 4.60649 1.17375 2.3033C2.30214 0.642681 4.3037 0.000281163 5.86877 0C7.64008 -0.000318142 10.0421 2.30302 10.0421 2.30302C10.0421 2.30302 13.6938 -1.15134 17.3455 1.15179C20.2456 2.98093 20.4755 6.33341 19.4321 9.21218Z" />
          </svg>
        </div>
        <div className="description-2">
          <Link to={`/item/${item.id}`} className="item-title">
            {item.title}
          </Link>
        </div>
        <div className="description-3">
          <div className="item-city">{item.address}</div>
          <div className="item-city">{dateValidator(item.createdAt)}</div>
        </div>
      </div>
    </div>
  ));
};

export default ItemsRender;
