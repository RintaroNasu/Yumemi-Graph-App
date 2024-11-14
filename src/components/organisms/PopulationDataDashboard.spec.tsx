import { render, screen, waitFor } from "@testing-library/react";
import { PopulationDataDashboard } from "./PopulationDataDashboard";
import { getPrefectures, getPopulationPerYear } from "@/utils/getResasApi";
import "@testing-library/jest-dom";

jest.mock("../../utils/getResasApi");

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

const mockPrefectures = [
  { prefCode: 1, prefName: "北海道" },
  { prefCode: 2, prefName: "青森県" },
];

const mockPopulationData = {
  result: {
    data: [
      {
        data: [
          { year: 1960, value: 500000 },
          { year: 1965, value: 550000 },
        ],
      },
    ],
  },
};

describe("PopulationDataDashboardコンポーネント", () => {
  beforeEach(() => {
    (getPrefectures as jest.Mock).mockResolvedValue({ result: mockPrefectures });
    (getPopulationPerYear as jest.Mock).mockResolvedValue(mockPopulationData);
  });

  it("コンポーネントが正常にレンダリングされることを確認する", async () => {
    render(<PopulationDataDashboard />);

    await waitFor(() => {
      expect(screen.getByLabelText("北海道")).toBeInTheDocument();
      expect(screen.getByLabelText("青森県")).toBeInTheDocument();
    });

    expect(screen.getByText("総人口推移")).toBeInTheDocument();
  });
});
