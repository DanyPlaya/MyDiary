import { extendTheme } from "@chakra-ui/react";

const customeTheme = extendTheme({
  colors: {},
  fonts: {
    heading: `'Nunito Variable',sans-serif`,
    body: `'Nunito Variable',sans-serif`,
  },
  fontSizes: {},
  breakpoints: {
    sm: "375px",
    md: "1024px",
    lg: "1920px",
    // xl: "1200px",
    // "2xl": "1536px",
    // "3xl": "1919px",
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const theme = extendTheme({ customeTheme });

export default customeTheme;
