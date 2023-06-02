import React, { FC, useEffect, useState } from "react"
import "./itemPage.css";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { locationHistoryState } from "../../storage/atoms/main";
import { getAds } from "../../api/getAds";
import { priceValidator } from "../../utils/priceValidator";
import { dateValidator } from "../../utils/dateValidator";
import Circular from "../../components/Curcular/Circular";
import ErrorBtn from "../../components/ErrorBtn/ErrorBtn";
import Swiper from "../../components/Swiper/Swiper";

interface DataType {
  about:string,
  address:string,
  createdAt:string,
  id:string,
  price:number,
  seen:boolean,
  title:string
}

const ItemPage: FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [, setHistory] = useRecoilState(locationHistoryState);
  const [currentItem, setCurrentItem] = useState<DataType | undefined>(undefined);
  const [reqError, setReqError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams<{ id: string }>();
  const location:string = useLocation().pathname;

  const getItems = async (pageCount:number, size:number) => {
    setLoading(true);
    setReqError(false);
    try {
      const { data: responseData } = await getAds(pageCount, size);
      setData(responseData.items);
    } catch (error) {
      setReqError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    localStorage.setItem("seen" + id, "true");
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
          <Swiper format={undefined} item={undefined} />
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
