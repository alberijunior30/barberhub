import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function EmailField({ id = "email", name = id, label = "Email", error }) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        className="focus-visible:border-primary focus-visible:ring-0"
        id={id}
        name={name}
        type="email"
        placeholder="voce@exemplo.com"
        autoComplete="email"
        required
        aria-invalid={!!error}
      />
      <FieldError>{error}</FieldError>
    </Field>
  );
}
