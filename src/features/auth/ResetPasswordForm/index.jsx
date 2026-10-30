import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { isValidPassword } from "@/lib/validators";
import { useState } from "react";
import { Link } from "react-router";
import { AuthHeader } from "@/features/auth/AuthHeader";
import { PasswordField } from "@/features/auth/PasswordField";

export function ResetPasswordForm() {
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

    console.log(dados);
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
