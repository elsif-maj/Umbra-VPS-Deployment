import { extendTheme } from "@chakra-ui/react";

import "@fontsource/raleway";
import "@fontsource-variable/nunito";
import "@fontsource/crimson-pro";

export const theme = extendTheme({
  colors: {
    umbra: {
      logoText: "#0096FF",
      vividSkyBlue: "#00D0F7",
      black: "#000000",
      white: "#FFFFFF",
      pictonBlue: "#00B2FF",
      deepSkyBlue: "#04BCF9",
      softBlack: "#040404",
      azul: "#0471c8",
      midnightGreen: "#044f65",
      prussianBlue: "#043554",
    },
    yellow: {
      100: "#FFF7DB",
      200: "#FFEBA4",
      300: "#FFDF6D",
      400: "#FFD437",
      500: "#FEC700",
      600: "#EDB900",
      700: "#DBAB00",
      800: "#B68F00",
      900: "#927200",
    },
    orange: {
      100: "#FFEADB",
      200: "#FFCAA4",
      300: "#FFAA6D",
      400: "#FF8A37",
      500: "#FF6A00",
      600: "#FE7F00",
      700: "#D36A00",
      800: "#A95500",
      900: "#7F3F00",
    },
    green: {
      100: "#ECFFE9",
      200: "#D9FFD3",
      300: "#B3FFA6",
      400: "#8EFF7A",
      500: "#1EC700",
      600: "#1AAA00",
      700: "#158E00",
      800: "#117200",
      900: "#0B4700",
    },
    gray: {
      100: "#e5e5e5",
      200: "#E0E0E0",
      300: "#B8B8B8",
      400: "#A3A3A3",
      500: "#8F8F8F",
      600: "#7A7A7A",
      700: "#5C5C5C",
      800: "#202020",
      900: "#141414",
    },
    blue: {
      100: "#C2E5FF",
      200: "#99D5FF",
      300: "#70C3FF",
      400: "#47B3FF",
      500: "#0096FF",
      600: "#0083E0",
      700: "#006BB8",
      800: "#00538F",
      900: "#003C66",
    },
    lightblue: {
      100: "#D6F9FF",
      200: "#ADF3FF",
      300: "#70EAFF",
      400: "#33E0FF",
      500: "#00D0F7",
      600: "#00BFE0",
      700: "#009CB8",
      800: "#00798F",
      900: "#005766", 
    }
  },
  fonts: {
    body: "'Nunito Variable', serif",
    heading: "'Nunito Variable', serif",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});
