import { Container } from "@/components/layouts/Container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const services = [
  { id: "corte", name: "Corte", duration: "[duração]", price: "[R$ 00]" },
  { id: "barba", name: "Barba", duration: "[duração]", price: "[R$ 00]" },
  { id: "corte-barba", name: "Corte + barba", duration: "[duração]", price: "[R$ 00]" },
  { id: "sobrancelha", name: "Sobrancelha", duration: "[duração]", price: "[R$ 00]" },
];

export function ServicesSection() {
  return (
    <section id="servicos">
      <Container className="flex flex-col gap-10 py-20">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold">Serviços</h2>
          <p className="text-muted-foreground">Preços e duração de cada atendimento.</p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.id}>
              <Card className="h-full bg-card p-5">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <Badge className="w-fit">{service.duration}</Badge>
                <p className="text-2xl font-bold">{service.price}</p>
                <Link to="/login" className={cn(buttonVariants(), "h-11 w-full")}>
                  Agendar
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
