import React from "react";
import "./ErrorBtn.css";
import { Button } from "@mui/material";

const ErrorBtn = ({ getItems, pageCount, size }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
      }}
    >
      <div style={{ fontSize: "22px" }}>Ошибка при загрузке</div>
      <Button
        className="itemList-btn error-btn"
        variant="contained"
        onClick={() => getItems(pageCount, size)}
      >
        Повторить попытку
      </Button>
    </div>
  );
};

export default ErrorBtn;
