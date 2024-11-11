type Props = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const PopulationButton = (props: Props) => {
  return (
    <button onClick={props.onClick} className={`rounded-[4px] font-semibold text-white px-4 py-2 transition-colors duration-200 w-[80%] sm:w-auto ${props.isActive ? "bg-[#2d716d]" : "bg-[rgba(0,164,150,1)] hover:bg-[#50d7cc]"}`}>
      {props.label}
    </button>
  );
};
