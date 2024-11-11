import { Prefecture } from "@/utils/type";

type Props = {
  prefectures: Prefecture[];
  onCheckboxChange: (prefCode: number) => void;
};

export const PrefectureCheckboxList = (props: Props) => (
  <div className="flex flex-wrap max-w-7xl mx-auto mt-4 rounded-lg bg-gray-50 p-5 shadow-lg">
    <h2 className="w-full text-center text-2xl font-semibold mb-4">都道府県</h2>
    {props.prefectures.map((prefecture, index) => (
      <div key={index} className="flex items-center  justify-center p-2 w-1/2  sm:w-1/6">
        <input type="checkbox" id={`pref-${prefecture.prefCode}`} className="mr-2" onChange={() => props.onCheckboxChange(prefecture.prefCode)} />
        <label htmlFor={`pref-${prefecture.prefCode}`}>{prefecture.prefName}</label>
      </div>
    ))}
  </div>
);
