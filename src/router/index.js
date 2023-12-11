import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreatePage from "../pages/CreatePage";
import UpdatePage from "../pages/UpdatePage";
import LanguageContextProvider from "../contexts/LanguageContext";
import Header from "../components/Header";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <LanguageContextProvider>
          <Header />
          <Outlet />
        </LanguageContextProvider>
      </div>
    ),
    path: "/",
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <CreatePage />,
        path: "create",
      },
      {
        element: <UpdatePage />,
        path: "update/:todoId",
      },
    ],
  },
]);

export default router;
