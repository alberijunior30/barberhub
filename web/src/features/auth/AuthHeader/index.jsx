import Logo from "@/assets/images.png";
import { CardHeader, CardDescription } from "@/components/ui/card";
import { business } from "@/config/business";

export function AuthHeader({ title, description }) {
  return (
    <CardHeader className="text-center">
      <img className="mx-auto mb-7 size-20 rounded-full" src={Logo} alt={`Logo ${business.name}`} />
      <h1 className="font-heading text-xl leading-snug font-medium">{title}</h1>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
  );
}
