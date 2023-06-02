import React from "react";
import "./emptyArray.css";

const EmptyArray = () => {
  return (
    <div className="emptyArray">
      <div style={{ fontSize: "22px", textAlign: "center", color: "#00A0AB" }}>
        ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО
      </div>
      <div style={{ textAlign: "center", color: "#8F8F8F" }}>
        Простите, по вашему запросу товаров сейчас нет. Задайте запрос
        по-другому или измените характеристики
      </div>
    </div>
  );
};

export default EmptyArray;
