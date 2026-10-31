import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AuthHeader } from "@/features/auth/AuthHeader";
import { PasswordField } from "@/features/auth/PasswordField";
import { cn } from "@/lib/utils";
import { isValidPassword } from "@/lib/validators";
import { useState } from "react";
import { Link, useSearchParams } from "react-router";

export function ResetPasswordForm() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const dados = Object.fromEntries(new FormData(event.currentTarget));
    const newErrors = {};

    if (!isValidPassword(dados.password)) {
      newErrors.password = "A senha deve ter entre 8 e 64 caracteres.";
    }

    if (dados.password !== dados.confirmPassword) {
      newErrors.confirmPassword = "As senhas não são iguais.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    dados.token = token;

    console.log(dados);

    setDone(true);
  }

  if (!token) {
    return (
      <Card className="w-full max-w-sm p-5 shadow-xl/30 sm:p-7">
        <AuthHeader
          title="Link inválido"
          description="Este link é inválido ou expirou."
        />
        <Link to="/recover" className={cn(buttonVariants(), "h-11 w-full")}>
          Pedir um novo link
        </Link>
      </Card>
    );
  }

  if (done) {
    return (
      <Card className="w-full max-w-sm p-5 shadow-xl/30 sm:p-7">
        <AuthHeader
          title="Senha redefinida"
          description="Você já pode entrar com sua nova senha."
        />
        <Link to="/login" className={cn(buttonVariants(), "h-11 w-full")}>
          Ir para o login
        </Link>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-sm p-5 shadow-xl/30 sm:p-7">
      <AuthHeader title="Redefinir senha" description="Crie uma nova senha para sua conta." />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <PasswordField
          autoComplete="new-password"
          description="Use entre 8 e 64 caracteres."
          error={errors.password}
        />

        <PasswordField
          id="confirmPassword"
          label="Confirme a nova senha"
          autoComplete="new-password"
          error={errors.confirmPassword}
        />

        <Button className="mt-6 h-11 w-full" type="submit">
          Redefinir senha
        </Button>
      </form>
      <p className="text-center">
        <Link to="/login" className="text-sm text-muted-foreground underline hover:text-foreground">
          Voltar para o login
        </Link>
      </p>
    </Card>
  );
}
