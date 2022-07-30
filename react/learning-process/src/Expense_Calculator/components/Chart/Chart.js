import classes from "./Chart.module.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map(
    (point) => point.value
  );
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className={classes.Chart}>
      {dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMax}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
