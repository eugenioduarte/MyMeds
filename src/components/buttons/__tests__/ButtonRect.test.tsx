import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ButtonRect from "../ButtonRect";
import colors from "@/constants/colors";

describe("ButtonRect", () => {
  it("should render correctly with given text", () => {
    const { getByText } = render(
      <ButtonRect btnText="Login" onPress={() => {}} />
    );
    const buttonText = getByText("Login");
    expect(buttonText).toBeTruthy();
  });

  it("should call onPress when clicked", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <ButtonRect btnText="Login" onPress={mockOnPress} />
    );
    const button = getByText("Login");
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("should apply default styles", () => {
    const { getByText, getByTestId } = render(
      <ButtonRect btnText="Login" onPress={() => {}} />
    );
    const button = getByTestId("button");
    const buttonText = getByText("Login");

    const combinedButtonStyle = Array.isArray(button.props.style)
      ? button.props.style.reduce((acc, style) => ({ ...acc, ...style }), {})
      : button.props.style;

    expect(combinedButtonStyle).toMatchObject({
      backgroundColor: colors.white,
      width: 240,
    });

    const combinedTextStyle = Array.isArray(buttonText.props.style)
      ? buttonText.props.style.reduce(
          (acc, style) => ({ ...acc, ...style }),
          {}
        )
      : buttonText.props.style;

    expect(combinedTextStyle).toMatchObject({
      color: colors.blue_1,
      fontSize: 20,
      fontWeight: "400",
    });
  });

  it("should apply custom styles", () => {
    const customBtnStyle = "w-40 bg-red";
    const customTextStyle = "text-black";
    const { getByText, getByTestId } = render(
      <ButtonRect
        btnText="Login"
        onPress={() => {}}
        btnStyle={customBtnStyle}
        textStyle={customTextStyle}
      />
    );
    const button = getByTestId("button");
    const buttonText = getByText("Login");

    const combinedButtonStyle = Array.isArray(button.props.style)
      ? button.props.style.reduce((acc, style) => ({ ...acc, ...style }), {})
      : button.props.style;

    expect(combinedButtonStyle).toMatchObject({
      backgroundColor: colors.red,
      width: 160,
    });

    const combinedTextStyle = Array.isArray(buttonText.props.style)
      ? buttonText.props.style.reduce(
          (acc, style) => ({ ...acc, ...style }),
          {}
        )
      : buttonText.props.style;

    expect(combinedTextStyle).toMatchObject({
      color: "#050A34",
    });
  });
});
