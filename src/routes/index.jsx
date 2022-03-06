import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import CataloguePage from "../pages/cataloguePage";

const RoutePaths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/species" element={<CataloguePage/>}/>
    </Routes>
  );
};

export default RoutePaths;
