import { render, screen, fireEvent } from "@testing-library/react";
import { PrefectureCheckboxList } from "./PrefectureCheckboxList";
import { Prefecture } from "@/utils/type";

describe("PrefectureCheckboxListコンポーネント", () => {
  const mockPrefectures: Prefecture[] = [
    { prefCode: 1, prefName: "北海道" },
    { prefCode: 2, prefName: "青森県" },
  ];

  const onCheckboxChangeMock = jest.fn();

  beforeEach(() => {
    onCheckboxChangeMock.mockClear();
  });

  it("都道府県リストが正しく表示される", () => {
    render(<PrefectureCheckboxList prefectures={mockPrefectures} onCheckboxChange={onCheckboxChangeMock} />);

    expect(screen.getByLabelText("北海道")).toBeInTheDocument();
    expect(screen.getByLabelText("青森県")).toBeInTheDocument();
  });

  it("チェックボックスの変更がonCheckboxChangeを呼び出す", () => {
    render(<PrefectureCheckboxList prefectures={mockPrefectures} onCheckboxChange={onCheckboxChangeMock} />);

    const checkbox = screen.getByLabelText("北海道");
    fireEvent.click(checkbox);
    expect(onCheckboxChangeMock).toHaveBeenCalledWith(1);
    expect(onCheckboxChangeMock).toHaveBeenCalledTimes(1);
  });

  it("複数回のチェックボックス変更が正しい引数でonCheckboxChangeを呼び出す", () => {
    render(<PrefectureCheckboxList prefectures={mockPrefectures} onCheckboxChange={onCheckboxChangeMock} />);

    const hokkaidoCheckbox = screen.getByLabelText("北海道");
    const aomoriCheckbox = screen.getByLabelText("青森県");

    fireEvent.click(hokkaidoCheckbox);
    expect(onCheckboxChangeMock).toHaveBeenCalledWith(1);

    fireEvent.click(aomoriCheckbox);
    expect(onCheckboxChangeMock).toHaveBeenCalledWith(2);

    expect(onCheckboxChangeMock).toHaveBeenCalledTimes(2);
  });
});
