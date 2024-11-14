import { render, screen } from "@testing-library/react";
import { ChartTitle } from "./ChartTitle";

describe("ChartTitle コンポーネント", () => {
  it("dataTypeIndexが0の場合に'総人口推移'を表示する", () => {
    render(<ChartTitle dataTypeIndex={0} />);
    expect(screen.getByText("総人口推移")).toBeInTheDocument();
  });

  it("dataTypeIndexが1の場合に'年少人口推移'を表示する", () => {
    render(<ChartTitle dataTypeIndex={1} />);
    expect(screen.getByText("年少人口推移")).toBeInTheDocument();
  });

  it("dataTypeIndexが2の場合に'生産年齢人口推移'を表示する", () => {
    render(<ChartTitle dataTypeIndex={2} />);
    expect(screen.getByText("生産年齢人口推移")).toBeInTheDocument();
  });

  it("dataTypeIndexが3の場合に'老年人口推移'を表示する", () => {
    render(<ChartTitle dataTypeIndex={3} />);
    expect(screen.getByText("老年人口推移")).toBeInTheDocument();
  });
});
