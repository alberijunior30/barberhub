import { createBrowserRouter } from "react-router";
import { Home } from "@/pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { RecoverPasswordPage } from "../pages/RecoverPasswordPage";
import { RegisterPage } from "../pages/RegisterPage";
import { AuthLayout } from "@/features/auth/authLayout";
import { ResetPasswordPage } from "@/pages/ResetPasswordPage";
export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/recover", element: <RecoverPasswordPage /> },
      { path: "/reset-password", element: <ResetPasswordPage /> },
    ],
  },
]);
