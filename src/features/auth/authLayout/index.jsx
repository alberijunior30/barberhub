import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-6 py-10">
      <Outlet />
    </main>
  );
}
