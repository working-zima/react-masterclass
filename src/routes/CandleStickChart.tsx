import { useQuery } from "react-query";
import ApexChart from "react-apexcharts";
import { fetchCoinHistory } from "../api";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: string;
}

interface ChartProps {
  coinId: string;
  isDark: boolean;
}

function CandleStickChart({ coinId, isDark }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["candle", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  const exceptData = data ?? [];
  const chartData = exceptData?.map((i) => {
    return { x: i.time_close, y: [i.open, i.high, i.low, i.close] };
  });

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[{ data: chartData }]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) =>
                  `$ ${Number(value.toFixed(2)).toLocaleString()}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default CandleStickChart;
