import { Card } from "@/components/ui/card"
import { AuthHeader } from "@/features/auth/AuthHeader"
import { EmailField } from "@/features/auth/EmailField";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function RecoverPasswordForm(){
    const [sent, setSent] = useState(false)
    function handleSubmit(event){
        event.preventDefault();
        setSent(true)
    }
    return (
      <Card className="w-full max-w-sm p-5 shadow-xl/30 sm:p-7">
        <AuthHeader
          title="Recuperar Senha"
          description="Informe seu email para receber um link de redefinição."
        />
        {!sent ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <EmailField />
            <Button className="mt-6 h-11 w-full" type="submit">
              Enviar link
            </Button>
          </form>
        ) : (
          <p role="status" className="text-center text-sm text-muted-foreground">
            Se este email estiver cadastrado, você vai receber um link para redefinir a senha.
            Confira também a caixa de spam.
          </p>
        )}
        <p className="text-center">
          Lembrou a senha?{" "}
          <Link to="/login" className="text-primary underline hover:text-primary/70">
            Entrar
          </Link>
        </p>
      </Card>
    );
}