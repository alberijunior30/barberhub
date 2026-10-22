import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function EmailField({id = "email", name = "email", label = "Email"}) {
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
      />
    </Field>
  );
}
