"use client";

import { getPopulationPerYear, getPrefectures } from "@/utils/getResasApi";
import { useEffect, useState } from "react";

import { PopulationButton } from "../atoms/PopulationButton";
import { PopulationChart } from "./ PopulationChart";
import { PopulationData, Prefecture } from "@/utils/type";

const INITIAL_YEARS = Array.from({ length: 18 }, (_, i) => ({
  year: 1960 + i * 5,
}));

export const PrefecturesCheckList = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<Set<number>>(new Set());
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);
  const [dataTypeIndex, setDataTypeIndex] = useState(0);
  const [colorMap, setColorMap] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prefecture = await getPrefectures();
        setPrefectures(prefecture.result);
      } catch (error) {
        console.error("Error fetching prefectures:", error);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = async (prefCode: number) => {
    setSelectedPrefectures((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(prefCode)) {
        newSelected.delete(prefCode);
      } else {
        newSelected.add(prefCode);
        if (!colorMap[prefCode]) {
          setColorMap((prevColorMap) => ({
            ...prevColorMap,
            [prefCode]: `#${Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, "0")}`,
          }));
        }
      }
      return newSelected;
    });
  };

  useEffect(() => {
    const fetchPopulationData = async () => {
      const updatedPopulationData: PopulationData[] = [...INITIAL_YEARS];

      try {
        for (const prefCode of selectedPrefectures) {
          const population = await getPopulationPerYear(prefCode);
          population.result.data[dataTypeIndex].data.forEach((item: { year: number; value: number }, index: number) => {
            if (!updatedPopulationData[index]) {
              updatedPopulationData[index] = { year: item.year };
            }
            updatedPopulationData[index][prefCode] = item.value;
          });
        }
        setPopulationData(updatedPopulationData);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    };
    if (selectedPrefectures.size > 0) {
      fetchPopulationData();
    } else {
      setPopulationData(INITIAL_YEARS);
    }
  }, [selectedPrefectures, dataTypeIndex]);

  return (
    <>
      <div className="flex flex-wrap max-w-7xl mx-auto mt-4 rounded-lg bg-gray-50 p-5 shadow-lg">
        <h2 className="w-full text-center text-2xl font-semibold mb-4">都道府県</h2>
        {prefectures.map((prefecture, index) => (
          <div key={index} className="flex items-center w-1/12 p-2">
            <input type="checkbox" id={`pref-${prefecture.prefCode}`} className="mr-2" onChange={() => handleCheckboxChange(prefecture.prefCode)} />
            <label htmlFor={`pref-${prefecture.prefCode}`}>{prefecture.prefName}</label>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="w-full text-center text-2xl font-semibold mb-4">
          {dataTypeIndex === 0 && "総人口推移"}
          {dataTypeIndex === 1 && "年少人口推移"}
          {dataTypeIndex === 2 && "生産年齢人口推移"}
          {dataTypeIndex === 3 && "老年人口推移"}
        </div>
        <PopulationChart populationData={populationData} selectedPrefectures={selectedPrefectures} colorMap={colorMap} prefectures={prefectures} />
        <div className="flex justify-center gap-5">
          <PopulationButton label="総人口" isActive={dataTypeIndex === 0} onClick={() => setDataTypeIndex(0)} />
          <PopulationButton label="年少人口" isActive={dataTypeIndex === 1} onClick={() => setDataTypeIndex(1)} />
          <PopulationButton label="生産年齢人口" isActive={dataTypeIndex === 2} onClick={() => setDataTypeIndex(2)} />
          <PopulationButton label="老年人口" isActive={dataTypeIndex === 3} onClick={() => setDataTypeIndex(3)} />
        </div>
      </div>
    </>
  );
};
