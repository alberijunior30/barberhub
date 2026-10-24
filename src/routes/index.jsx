import { createBrowserRouter } from "react-router";
import { Home } from "@/pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { RecoverPassPage } from "../pages/RecoverPassPage";
import { RegisterPage } from "../pages/RegisterPage";
import { AuthLayout } from "@/features/auth/authLayout";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/recover", element: <RecoverPassPage /> },
    ],
  },
]);
