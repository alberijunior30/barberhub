import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function PasswordField({
  id = "password",
  name = id,
  autoComplete = "current-password",
  label = "Senha",
  description,
  error,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className="relative">
        <Input
          className="pr-10 focus-visible:border-primary focus-visible:ring-0"
          id={id}
          name={name}
          type={visible ? "text" : "password"}
          placeholder="••••••••"
          autoComplete={autoComplete}
          required
          aria-invalid={!!error}
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center px-3"
          aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          type="button"
          onClick={() => setVisible(!visible)}
        >
          {visible ? (
            <EyeOff className="size-4 text-muted-foreground hover:text-foreground" />
          ) : (
            <Eye className="size-4 text-muted-foreground hover:text-foreground" />
          )}
        </button>
      </div>
      {description &&<FieldDescription>{description}</FieldDescription>}
      <FieldError>{error}</FieldError>
    </Field>
  );
}
