import { extendTheme } from "@chakra-ui/react";

const colors = {
  customPrimary: {
    1: "#330C2F",
    2: "#7B287D",
    3: "#7067CF",
    4: "#B7C0EE",
    5: "#CBF3D2",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
