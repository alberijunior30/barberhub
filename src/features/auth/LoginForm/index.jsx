import { Link } from "react-router";
import Logo from "@/assets/images.png"
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { EmailField } from "@/features/auth/EmailField";
import { PasswordField } from "@/features/auth/PasswordField";
import { business } from "@/config/business";

export function LoginForm(){

  function handleSubmit(event){
    event.preventDefault();
    console.log("enviou")
  }

    return (
      <Card className="w-full max-w-sm p-5 sm:p-7 shadow-xl/30">
        <CardHeader className="text-center">
          <img
            className="rounded-full size-20 mb-7 mx-auto"
            src={Logo}
            alt={`Logo ${business.name}`}
          />

          <h1 className="font-heading text-xl leading-snug font-medium">
            Bem-vindo
          </h1>
        </CardHeader>

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
              className="text-sm text-muted-foreground underline hover:text-foreground whitespace-nowrap"
            >
              Esqueci minha senha
            </Link>
          </div>

          <Button className="w-full mt-6 h-11" type="submit">
            Logar
          </Button>
        </form>

        <p className="text-center">
          Não tem uma conta ainda?{" "}
          <Link
            to="/register"
            className="underline text-primary hover:text-primary/70"
          >
            Registrar-se
          </Link>
        </p>
      </Card>
    );
}