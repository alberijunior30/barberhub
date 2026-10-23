import { Link } from "react-router";
import Logo from "@/assets/images.png";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { EmailField } from "@/features/auth/EmailField";
import { PasswordField } from "@/features/auth/PasswordField";
import { FormField } from "@/components/form/FormField";
import { FieldError } from "@/components/ui/field";
import { useState } from "react";
import { business } from "@/config/business";

export function RegisterForm() {

  const [error, setError] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    const dados = Object.fromEntries(new FormData(event.currentTarget))
    if(dados.password !== dados.confirmPassword){
      setError("As senhas não são iguais");
      return;
    }
    
    setError("");
    console.log(dados);
      
}
  return (
    <Card className="w-full max-w-md p-5 sm:p-7 shadow-xl/30">
      <CardHeader className="text-center">
        <img
          className="rounded-full size-20 mb-7 mx-auto"
          src={Logo}
          alt={`Logo ${business.name}`}
        />

        <h1 className="font-heading text-xl leading-snug font-medium">
          Criar conta
        </h1>
      </CardHeader>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormField id="fullName" label="Nome completo" autoComplete="name" />
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            id="cpf"
            label="CPF"
            inputMode="numeric"
            placeholder="000.000.000-00"
            autoComplete="off"
          />
          <FormField
            id="birthDate"
            label="Data de nascimento"
            type="date"
            autoComplete="bday"
          />
        </div>
        <FormField
          id="phone"
          label="Telefone/WhatsApp"
          type="tel"
          autoComplete="tel"
          placeholder="(85) 90000-0000"
        />
        <EmailField />
        <PasswordField autoComplete="new-password" />
        <div>
          <PasswordField
            id="confirmPassword"
            label="Confirme a senha"
            autoComplete="new-password"
          />
          <FieldError>{error}</FieldError>
        </div>
        <div className="flex items-start gap-2">
          <Checkbox id="terms" name="terms" required className="mt-0.5" />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            Li e aceito os termos de uso e a política de privacidade
          </label>
        </div>
        <Button className="w-full mt-6 h-11" type="submit">
          Cadastrar-se
        </Button>
      </form>

      <p className="text-center">
        Já tem uma conta?{" "}
        <Link
          to="/login"
          className="underline text-primary hover:text-primary/70"
        >
          Entrar
        </Link>
      </p>
    </Card>
  );
}
