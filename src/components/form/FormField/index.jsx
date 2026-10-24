import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FormField({
  id,
  name = id,
  label,
  type = "text",
  required = true,
  error,
  ...rest
}) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        className="focus-visible:border-primary focus-visible:ring-0"
        id={id}
        name={name}
        type={type}
        required={required}
        aria-invalid={!!error}
        {...rest}
      />
      <FieldError>{error}</FieldError>
    </Field>
  );
}
