import { Link } from "react-router";
import Logo from "@/assets/images.png";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { EmailField } from "@/features/auth/EmailField";
import { PasswordField } from "@/features/auth/PasswordField";
import { FormField } from "@/components/form/FormField";

export function RegisterForm() {
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
      <FormField label="Nome completo" autoComplete="name"/>
      <FormField label="CPF" inputMode="numeric" placeholder="000.000.000-00"/>
      <FormField label="Data de nascimento" type="date" placeholder="00/00/0000" />
      <FormField label="Telefone/WhatsApp" placeholder=""/>
      <EmailField />
      <PasswordField />
      <PasswordField />
      <Checkbox/>
    </Card>
  );
}
