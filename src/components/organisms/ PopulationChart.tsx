import { PopulationData, Prefecture } from "@/utils/type";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type Props = {
  populationData: PopulationData[];
  selectedPrefectures: Set<number>;
  colorMap: { [key: number]: string };
  prefectures: Prefecture[];
};

export const PopulationChart = (props: Props) => {
  const { populationData, selectedPrefectures, colorMap, prefectures } = props;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={populationData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" label={{ value: "年", position: "insideBottomRight", offset: -10 }} />
        <YAxis label={{ value: "人口数", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        {Array.from(selectedPrefectures).map((prefCode) => (
          <Line key={prefCode} type="monotone" dataKey={prefCode.toString()} name={prefectures.find((pref) => pref.prefCode === prefCode)?.prefName} stroke={colorMap[prefCode]} dot={false} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
