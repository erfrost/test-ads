import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage/mainPage";
import ItemPage from "./pages/itemPage/itemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
