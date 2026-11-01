import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function PhoneTextInput({ className, ...props }) {
  return <Input className={cn("focus-visible:border-primary focus-visible:ring-0 ", className)} {...props }/>;
}

export function PhoneField({
  id = "phone",
  name = id,
  label = "Telefone/WhatsApp",
  required = true,
  error,
  ...rest
}) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <PhoneInput
      className="[&_.PhoneInputCountrySelect]:bg-card [&_option]:bg-card [&_option]:text-foreground"
        id={id}
        name={name}
        defaultCountry="BR"
        inputComponent={PhoneTextInput}
        aria-invalid={!!error}
        required={required}
        {...rest}
      />
      <FieldError>{error}</FieldError>
    </Field>
  );
}
