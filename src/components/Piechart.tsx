import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

interface PiechartInteface {
  data: [string, number, number][];
}

const Piechart = (props: PiechartInteface) => {
  const pieData: [string, number, number][] = props.data;

  const series: number[] = [];
  const labels: string[] = [];
  pieData.map((ele) => {
    series.push(ele[1]);
    labels.push(ele[0]);
  });

  const chartOptions = {
    labels: labels,
  };

  return (
    <div className="piechart-container">
      <Chart options={chartOptions} series={series} type="pie" />
    </div>
  );
};

export default Piechart;
