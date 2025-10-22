import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

function App() {
  const routesConfig = [
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout routesConfig={routesConfig} />,
      errorElement: <ErrorPage routesConfig={routesConfig} />,
      children: routesConfig.map((route) => ({
        path: route.path,
        element: route.element,
      })),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
