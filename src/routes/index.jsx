import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";

const RoutePaths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
    </Routes>
  );
};

export default RoutePaths;
