import React from "react";
import "./mainPage.css";
import Header from "../../components/Header/Header";
import AdsList from "../../components/AdsList/AdsList";

const MainPage = () => {
  return (
    <div className="mainPage">
      <Header />
      <AdsList />
    </div>
  );
};

export default MainPage;
