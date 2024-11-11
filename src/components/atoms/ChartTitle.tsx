import React from "react";

type Props = {
  dataTypeIndex: number;
};

export const ChartTitle = (props: Props) => (
  <div className="w-full text-center text-2xl font-semibold mb-4">
    {props.dataTypeIndex === 0 && "総人口推移"}
    {props.dataTypeIndex === 1 && "年少人口推移"}
    {props.dataTypeIndex === 2 && "生産年齢人口推移"}
    {props.dataTypeIndex === 3 && "老年人口推移"}
  </div>
);
