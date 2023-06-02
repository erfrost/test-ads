import React, { useEffect, useState } from "react";
import "./header.css";
import { useRecoilState } from "recoil";
import { formatListState } from "../../storage/atoms/main";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Header = () => {
  const [format, setFormat] = useRecoilState(formatListState);
  const [visibleBtn, setVisibleBtn] = useState(false);

  useEffect(() => {
    setFormat(localStorage.getItem("format"));
  }, []);

  useEffect(() => {
    localStorage.setItem("format", format);
    if (format === "horizontal") {
      document.getElementById("vertical").classList.remove("header-active");
      document.getElementById("horizontal").classList.add("header-active");
    } else {
      document.getElementById("horizontal").classList.remove("header-active");
      document.getElementById("vertical").classList.add("header-active");
    }
  }, [format]);

  window.onscroll = () => {
    if (window.scrollY >= 100) setVisibleBtn(true);
    else setVisibleBtn(false);
  };

  return (
    <div className="header-main">
      <div className="header-buttons">
        <svg
          onClick={() => setFormat("horizontal")}
          id="horizontal"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.1"
            y="18.1"
            width="28.8"
            height="11.8"
            rx="1.9"
            strokeWidth="2.2"
          />
          <rect
            x="1.1"
            y="1.1"
            width="28.8"
            height="11.8"
            rx="1.9"
            strokeWidth="2.2"
          />
        </svg>

        <svg
          onClick={() => setFormat("vertical")}
          id="vertical"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.1"
            y="1.1"
            width="11.8"
            height="11.8"
            rx="1.9"
            strokeWidth="2.2"
          />
          <rect
            x="18.1"
            y="1.1"
            width="11.8"
            height="11.8"
            rx="1.9"
            strokeWidth="2.2"
          />
          <rect
            x="1.1"
            y="18.1"
            width="11.8"
            height="11.8"
            rx="1.9"
            strokeWidth="2.2"
          />
          <rect
            x="18.1"
            y="18.1"
            width="11.8"
            height="11.8"
            rx="1.9"
            strokeWidth="2.2"
          />
        </svg>
      </div>

      <div
        className={`scroll-btn ${visibleBtn ? "scroll-btn-show" : ""}`}
        id="scroll-to-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <div className="scroll-btn-padding">
          <KeyboardArrowUpIcon fontSize="large" sx={{ color: "#8F8F8F" }} />
          <div className="scroll-btn-text">Вверх</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
