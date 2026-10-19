import { LoginForm } from "../../features/auth/LoginForm"

export function LoginPage(){
    return (
      <div className="flex h-screen justify-center items-center">
        <LoginForm />
      </div>
    );
}