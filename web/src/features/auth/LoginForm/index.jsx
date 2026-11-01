import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { EmailField } from "@/features/auth/EmailField";
import { PasswordField } from "@/features/auth/PasswordField";
import { Link } from "react-router";
import { AuthHeader } from "@/features/auth/AuthHeader";

export function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("enviou");
  }

  return (
    <Card className="w-full max-w-sm p-5 shadow-xl/30 sm:p-7">
      <AuthHeader title="Bem-vindo" description="Entre para agendar seu horário." />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <EmailField />
        <PasswordField />

        <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="flex items-center gap-2">
            <Checkbox id="lembrar" name="lembrar" />
            <label htmlFor="lembrar" className="text-sm whitespace-nowrap">
              Lembrar de mim
            </label>
          </div>

          <Link
            to="/recover"
            className="text-sm whitespace-nowrap text-muted-foreground underline hover:text-foreground"
          >
            Esqueci minha senha
          </Link>
        </div>

        <Button className="mt-6 h-11 w-full" type="submit">
          Logar
        </Button>
      </form>

      <p className="text-center">
        Não tem uma conta ainda?{" "}
        <Link to="/register" className="text-primary underline hover:text-primary/70">
          Registrar-se
        </Link>
      </p>
    </Card>
  );
}
