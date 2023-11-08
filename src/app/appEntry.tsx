import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./appRouter";
import customeTheme from "./chakraTheme";
import "@fontsource-variable/nunito";

export const AppEntry = () => {
  return (
    <ChakraProvider theme={customeTheme}>
      <RouterProvider router={AppRouter()} />
    </ChakraProvider>
  );
};
