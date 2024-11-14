import { render, screen, fireEvent } from "@testing-library/react";
import { PopulationButton } from "./PopulationButton";

describe("PopulationButtonコンポーネント", () => {
  it("labelが正しく表示される", () => {
    render(<PopulationButton label="人口ボタン" isActive={false} onClick={() => {}} />);
    expect(screen.getByText("人口ボタン")).toBeInTheDocument();
  });

  it("isActiveがtrueの場合、アクティブなスタイルが適用される", () => {
    render(<PopulationButton label="人口ボタン" isActive={true} onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-[#2d716d]");
  });

  it("isActiveがfalseの場合、非アクティブなスタイルが適用される", () => {
    render(<PopulationButton label="人口ボタン" isActive={false} onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-[rgba(0,164,150,1)]");
  });

  it("onClick関数がクリック時に呼び出される", () => {
    const handleClick = jest.fn();
    render(<PopulationButton label="人口ボタン" isActive={false} onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
