import DrawerComp from "./DrawerComp";
import Piechart from "./Piechart";
import WidgetComp from "./WidgetComp";
import { useState } from "react";

const Dashboard = () => {
  const [pieChartData, setPieChartData] = useState([]);

  const getPieChartData = (data: []) => {
    setPieChartData(data);
  };

  return (
    <div className="container">
      <div>
        <DrawerComp />
      </div>
      <div className="row">
        <WidgetComp getData={getPieChartData} />
        <Piechart data={pieChartData} />
      </div>
    </div>
  );
};

export default Dashboard;
