import React from "react";
import AdsList from "../../components/adsList/adsList";
import Header from "../../components/header/header";
import "./mainPage.css";

const MainPage = () => {
  return (
    <div className="mainPage">
      <Header />
      <AdsList />
    </div>
  );
};

export default MainPage;
