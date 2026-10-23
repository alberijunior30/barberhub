import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {Eye, EyeOff} from "lucide-react"
import { useState } from "react";

export function PasswordField({id = "password", name = id, autoComplete = "current-password", label="Senha"}) {

const [visible, setVisible] = useState(false)


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
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center px-3"
          aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          type="button"
          onClick={() => setVisible(!visible)}
        >
          {visible ? (
            <EyeOff className="text-muted-foreground hover:text-foreground size-4" />
          ) : (
            <Eye className="text-muted-foreground hover:text-foreground size-4" />
          )}
        </button>
      </div>
    </Field>
  );
}
