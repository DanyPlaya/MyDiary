import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./appRouter";
import customeTheme from "./chakraTheme";
import "@fontsource-variable/nunito";
import { createStore } from "./appStore";
import { Provider } from "react-redux";
const store = createStore();
export const AppEntry = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={customeTheme}>
        <RouterProvider router={AppRouter()} />
      </ChakraProvider>
    </Provider>
  );
};
