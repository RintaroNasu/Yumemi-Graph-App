import { PopulationButton } from "../atoms/PopulationButton";

type Props = {
  dataTypeIndex: number;
  setDataTypeIndex: (index: number) => void;
};

export const PopulationButtonGroup = (props: Props) => {
  const { dataTypeIndex, setDataTypeIndex } = props;
  return (
    <div className="flex justify-center gap-5">
      <PopulationButton label="総人口" isActive={dataTypeIndex === 0} onClick={() => setDataTypeIndex(0)} />
      <PopulationButton label="年少人口" isActive={dataTypeIndex === 1} onClick={() => setDataTypeIndex(1)} />
      <PopulationButton label="生産年齢人口" isActive={dataTypeIndex === 2} onClick={() => setDataTypeIndex(2)} />
      <PopulationButton label="老年人口" isActive={dataTypeIndex === 3} onClick={() => setDataTypeIndex(3)} />
    </div>
  );
};
