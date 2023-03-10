import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Routing;
