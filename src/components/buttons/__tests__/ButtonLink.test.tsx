import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ButtonLink from "../ButtonLink";
import colors from "@/constants/colors";

describe("ButtonLink", () => {
  it("should render correctly with given text", () => {
    const { getByText } = render(
      <ButtonLink text="Click Me" dark={false} handleLink={() => {}} />
    );
    const buttonText = getByText("Click Me");
    expect(buttonText).toBeTruthy();
  });

  it("should call handleLink when pressed", () => {
    const mockHandleLink = jest.fn();
    const { getByText } = render(
      <ButtonLink text="Click Me" dark={false} handleLink={mockHandleLink} />
    );
    const button = getByText("Click Me");
    fireEvent.press(button);
    expect(mockHandleLink).toHaveBeenCalledTimes(1);
  });

  it("should apply correct styles when dark is true", () => {
    const { getByText } = render(
      <ButtonLink text="Click Me" dark={true} handleLink={() => {}} />
    );
    const buttonText = getByText("Click Me");

    const combinedTextStyle = Array.isArray(buttonText.props.style)
      ? buttonText.props.style
          .flat()
          .reduce((acc, style) => ({ ...acc, ...style }), {})
      : buttonText.props.style;

    expect(combinedTextStyle).toMatchObject({
      color: colors.blue_1,
      fontSize: 18,
    });
  });

  it("should apply correct styles when dark is false", () => {
    const { getByText } = render(
      <ButtonLink text="Click Me" dark={false} handleLink={() => {}} />
    );
    const buttonText = getByText("Click Me");

    const combinedTextStyle = Array.isArray(buttonText.props.style)
      ? buttonText.props.style
          .flat()
          .reduce((acc, style) => ({ ...acc, ...style }), {})
      : buttonText.props.style;

    expect(combinedTextStyle).toMatchObject({
      color: colors.white,
      fontSize: 18,
    });
  });
});
