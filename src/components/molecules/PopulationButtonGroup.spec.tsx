import { render, screen, fireEvent } from "@testing-library/react";
import { PopulationButtonGroup } from "./PopulationButtonGroup";

describe("PopulationButtonGroupコンポーネント", () => {
  const setDataTypeIndexMock = jest.fn();

  beforeEach(() => {
    setDataTypeIndexMock.mockClear();
  });

  it("各ボタンが正しく表示される", () => {
    render(<PopulationButtonGroup dataTypeIndex={0} setDataTypeIndex={setDataTypeIndexMock} />);

    expect(screen.getByText("総人口")).toBeInTheDocument();
    expect(screen.getByText("年少人口")).toBeInTheDocument();
    expect(screen.getByText("生産年齢人口")).toBeInTheDocument();
    expect(screen.getByText("老年人口")).toBeInTheDocument();
  });

  it("dataTypeIndexに基づいてアクティブなスタイルが適用される", () => {
    render(<PopulationButtonGroup dataTypeIndex={2} setDataTypeIndex={setDataTypeIndexMock} />);

    const activeButton = screen.getByText("生産年齢人口");
    expect(activeButton).toHaveClass("bg-[#2d716d]");
  });

  it("ボタンをクリックするとsetDataTypeIndexが正しい引数で呼び出される", () => {
    render(<PopulationButtonGroup dataTypeIndex={0} setDataTypeIndex={setDataTypeIndexMock} />);

    const button = screen.getByText("老年人口");
    fireEvent.click(button);
    expect(setDataTypeIndexMock).toHaveBeenCalledWith(3);
    expect(setDataTypeIndexMock).toHaveBeenCalledTimes(1);
  });
});
