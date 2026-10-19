import { Link } from "react-router";
import Logo from "@/assets/images.png"
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export function LoginForm(){

  function handleSubmit(event){
    event.preventDefault();
    console.log("enviou")
  }

    return (
      <Card className="w-full max-w-sm p-7  shadow-xl/30">
        <CardHeader className="text-center">
          <img
            className="rounded-full size-20 mb-7 mx-auto"
            src={Logo}
            alt="Logo do Sistema"
          />

          <CardTitle className="text-xl">Bem-vindo</CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              className="focus-visible:border-primary focus-visible:ring-0"
              id="email"
              name="email"
              type="email"
              placeholder="voce@exemplo.com"
              autoComplete="email"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="senha">Senha</FieldLabel>
            <Input
              className="focus-visible:border-primary focus-visible:ring-0"
              id="senha"
              name="senha"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </Field>

          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="lembrar" name="lembrar" />
              <label htmlFor="lembrar" className="text-sm">
                Lembrar de mim
              </label>
            </div>

            <Link
              to="/recover"
              className="text-sm text-muted-foreground underline hover:text-foreground"
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