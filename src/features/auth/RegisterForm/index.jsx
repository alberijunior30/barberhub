import { Link } from "react-router";
import Logo from "@/assets/images.png";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { EmailField } from "@/features/auth/EmailField";
import { PasswordField } from "@/features/auth/PasswordField";
import { FormField } from "@/components/form/FormField";
import { FieldError } from "@/components/ui/field";
import { useState } from "react";

export function RegisterForm() {

  const [error, setError] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    const dados = Object.fromEntries(new FormData(event.currentTarget))
    if(dados.password !== dados.confirmPassword){
      setError("As senhas não são iguais");
      return;
    }
    
    setError("")
    console.log(dados)
      
}
  return (
    <Card className="w-full max-w-sm p-5 sm:p-7 shadow-xl/30">
      <CardHeader className="text-center">
        <img
          className="rounded-full size-20 mb-7 mx-auto"
          src={Logo}
          alt="Logo do Sistema"
        />

        <CardTitle className="text-xl">Criar Conta</CardTitle>
      </CardHeader>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormField id="fullName" label="Nome completo" autoComplete="name" />
        <FormField
          id="cpf"
          label="CPF"
          inputMode="numeric"
          placeholder="000.000.000-00"
        />
        <FormField
          id="birthDate"
          label="Data de nascimento"
          type="date"
          placeholder="00/00/0000"
        />
        <FormField
          id="phone"
          label="Telefone/WhatsApp"
          placeholder="(00)00000-0000"
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
          <Checkbox id="terms" name="terms" required />
          <label htmlFor="terms" className="text-sm whitespace-nowrap">
            Aceitar termos e condições
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
