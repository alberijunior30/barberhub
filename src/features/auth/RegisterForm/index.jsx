import Logo from "@/assets/images.png";
import { FormField } from "@/components/form/FormField";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { business } from "@/config/business";
import { EmailField } from "@/features/auth/EmailField";
import { PasswordField } from "@/features/auth/PasswordField";
import { formatCpf, formatDate, toIsoDate } from "@/lib/masks";
import { isValidBirthDate } from "@/lib/validators";
import { useState } from "react";
import { Link } from "react-router";

export function RegisterForm() {
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const dados = Object.fromEntries(new FormData(event.currentTarget));
    const newErrors = {};

    if (!isValidBirthDate(dados.birthDate)) {
      newErrors.birthDate = "Informe uma data de nascimento válida.";
    }

    if (dados.password !== dados.confirmPassword) {
      newErrors.confirmPassword = "As senhas não são iguais.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    dados.birthDate = toIsoDate(dados.birthDate);
    console.log(dados);
    console.log(errors);
  }

  return (
    <Card className="w-full max-w-md p-5 shadow-xl/30 sm:p-7">
      <CardHeader className="text-center">
        <img
          className="mx-auto mb-7 size-20 rounded-full"
          src={Logo}
          alt={`Logo ${business.name}`}
        />

        <h1 className="font-heading text-xl leading-snug font-medium">Criar conta</h1>
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
            value={cpf}
            onChange={(event) => setCpf(formatCpf(event.target.value))}
          />
          <FormField
            id="birthDate"
            label="Data de nascimento"
            autoComplete="bday"
            inputMode="numeric"
            placeholder="dd/mm/aaaa"
            value={birthDate}
            onChange={(event) => setBirthDate(formatDate(event.target.value))}
            error={errors.birthDate}
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

        <PasswordField
          id="confirmPassword"
          label="Confirme a senha"
          autoComplete="new-password"
          error={errors.confirmPassword}
        />

        <div className="flex items-start gap-2">
          <Checkbox id="terms" name="terms" required className="mt-0.5" />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            Li e aceito os termos de uso e a política de privacidade
          </label>
        </div>
        <Button className="mt-6 h-11 w-full" type="submit">
          Cadastrar-se
        </Button>
      </form>

      <p className="text-center">
        Já tem uma conta?{" "}
        <Link to="/login" className="text-primary underline hover:text-primary/70">
          Entrar
        </Link>
      </p>
    </Card>
  );
}
