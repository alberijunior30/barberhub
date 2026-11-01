import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-6 py-10">
      <Outlet />
    </main>
  );
}
