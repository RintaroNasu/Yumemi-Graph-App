import { render } from "@testing-library/react";
import { PopulationChart } from "./ PopulationChart";

import "@testing-library/jest-dom";

describe("PopulationChart コンポーネント", () => {
  const mockPopulationData = [
    { year: 2000, 1: 1000, 2: 2000 },
    { year: 2005, 1: 1500, 2: 2500 },
  ];

  const mockSelectedPrefectures = new Set([1, 2]);

  const mockColorMap = { 1: "#8884d8", 2: "#82ca9d" };

  const mockPrefectures = [
    { prefCode: 1, prefName: "北海道" },
    { prefCode: 2, prefName: "青森県" },
  ];

  beforeAll(() => {
    class ResizeObserverMock {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    window.ResizeObserver = ResizeObserverMock;
  });

  it("正常にレンダリングされることを確認する", () => {
    const { container } = render(<PopulationChart populationData={mockPopulationData} selectedPrefectures={mockSelectedPrefectures} colorMap={mockColorMap} prefectures={mockPrefectures} />);

    expect(container.firstChild).not.toBeNull();
  });
});
