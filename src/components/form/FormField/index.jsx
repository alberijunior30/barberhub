import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FormField({id, name = id, label, type = "text", required = true, ...rest}){
    return (
      <Field>
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        <Input
          className="focus-visible:border-primary focus-visible:ring-0"
          id={id}
          name={name}
          type={type}
          required = {required}
          {...rest}
        />
      </Field>
    );
}