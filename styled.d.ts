import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryRed: string;
      textPrimary: string;
      cardBg: string;
      inputBg: string;
      inputText: string;
      white: string;
    };
    fonts: {
      sectionTitle: string;
      content: string;
      input: string;
    };
  }
}
