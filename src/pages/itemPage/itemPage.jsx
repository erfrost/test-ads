import React, { useEffect, useState } from "react";
import "./itemPage.css";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { locationHistoryState } from "../../storage/atoms/main";
import { getAds } from "../../api/getAds";
import { priceValidator } from "../../utils/priceValidator";
import { dateValidator } from "../../utils/dateValidator";
import Circular from "../../components/curcularProgress/circular";
import ErrorBtn from "../../components/errorBtn/errorBtn";
import Swiper from "../../components/swiper/swiper";

const ItemPage = () => {
  const [data, setData] = useState([]);
  const [, setHistory] = useRecoilState(locationHistoryState);
  const [currentItem, setCurrentItem] = useState(undefined);
  const [reqError, setReqError] = useState(false);
  const [loading, setLoading] = useState(true);

  const id = useParams().id;
  const location = useLocation().pathname;

  const getItems = async (pageCount, size) => {
    setLoading(true);
    setReqError(false);
    try {
      const responseData = await getAds(pageCount, size);
      setData(responseData.data.items);
    } catch (error) {
      setReqError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    localStorage.setItem("seen" + id, true);
    setHistory((prevState) => [...prevState, location]);
    getItems(1, 100);
  }, []);

  useEffect(() => {
    if (data) {
      setCurrentItem(
        data.find((el) => {
          return el.id === id;
        })
      );
    }
  }, [data]);

  return (
    <div className="itemPage">
      {loading ? (
        <Circular />
      ) : reqError ? (
        <ErrorBtn getItems={getItems} pageCount={1} size={100} />
      ) : (
        <div className="card">
          <Swiper />
          {/* <img className="card-image" src={image} alt="ads" /> */}
          <div className="card-padding">
            <div className="item-info">{currentItem?.about}</div>
            <div className="card-description">
              <div className="description-1">
                <div className="card-price">
                  {priceValidator(currentItem?.price)}
                </div>
              </div>
              <div className="description-2">
                <div className="item-title">{currentItem?.title}</div>
              </div>
              <div className="description-3">
                <div className="item-city">{currentItem?.address}</div>
                <div className="item-city">
                  {dateValidator(currentItem?.createdAt)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemPage;
