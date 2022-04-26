import { DefaultTheme } from "styled-components";

const flex = (direction = "row", justify = "center", align = "center") => `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;

const colors = {
  black: "#0E0E0E",
  white: "#000000",
};

const theme: DefaultTheme = {
  flex,
  colors,
};

export default theme;
