import React, { useEffect, useState } from "react";
import "./adsList.css";
import { getAds } from "../../api/getAds";
import { Box, Button, CircularProgress } from "@mui/material";
import ItemsRender from "../itemsRender/itemsRender";
import Skeletons from "../skeletons/skeletons";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  dataState,
  formatListState,
  locationHistoryState,
} from "../../storage/atoms/main";
import Circular from "../curcularProgress/circular";
import ErrorBtn from "../errorBtn/errorBtn";
import EmptyArray from "../emptyArray/emptyArray";

const AdsList = () => {
  const format = useRecoilValue(formatListState);
  const [history, setHistory] = useRecoilState(locationHistoryState);
  const [data, setData] = useRecoilState(dataState);
  const [reqError, setReqError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [additionalLoading, setAdditionalLoading] = useState(false);
  const [pageCount, setPageCount] = useState(1);

  const getItems = async (pageCount) => {
    if (data !== null && data.length > 0) setAdditionalLoading(true);
    else setLoading(true);
    setReqError(false);
    try {
      const responseData = await getAds(pageCount);
      setData((prevState) =>
        prevState && !history.length
          ? [...prevState, ...responseData.data.items]
          : responseData.data.items
      );
    } catch (error) {
      setReqError(true);
    }
    setLoading(false);
    setAdditionalLoading(false);
    setHistory([]);
  };

  useEffect(() => {
    getItems(pageCount);
  }, [pageCount]);

  return (
    <div className={"adsList-main"}>
      <div
        className={`adsList ${
          format === "horizontal" ? "adsList-h" : "adsList-v"
        }`}
      >
        {loading ? (
          <Skeletons />
        ) : reqError ? (
          <ErrorBtn getItems={getItems} pageCount={pageCount} />
        ) : data.length === 0 ? (
          <EmptyArray />
        ) : (
          <ItemsRender data={data} pageCount={pageCount} />
        )}
      </div>
      {data && !loading && !reqError && data.length !== 0 && pageCount < 5 ? (
        additionalLoading ? (
          <Circular />
        ) : (
          <Button
            className="itemList-btn"
            variant="contained"
            sx={{ marginBottom: "55px" }}
            onClick={() => setPageCount((prevState) => prevState + 1)}
          >
            Показать еще
          </Button>
        )
      ) : null}
    </div>
  );
};

export default AdsList;
