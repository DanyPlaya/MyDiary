import { MainPage } from "@/pages/main";
import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "./layout/baseLayout";
export const AppRouter = () => {
  return createBrowserRouter([
    {
      element: baseLayout,
      children: [
        {
          path: "/",
          element: <MainPage />,
          children: [
            {
              path: "/notation/:pageNumber",
            },
          ],
        },
      ],
    },
  ]);
};
