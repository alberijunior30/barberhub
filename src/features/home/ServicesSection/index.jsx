import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layouts/Container";

    const services = [
  { id: "corte", name: "Corte", duration: "[duração]", price: "[R$ 00]" },
  { id: "barba", name: "Barba", duration: "[duração]", price: "[R$ 00]" },
  { id: "corte-barba", name: "Corte + barba", duration: "[duração]", price: "[R$ 00]" },
  { id: "sobrancelha", name: "Sobrancelha", duration: "[duração]", price: "[R$ 00]" },
];

export function ServicesSection(){

    return (
      <section id="servicos">
        <Container className=" py-20 flex flex-col gap-10">
          <div className="flex flex-col text-center gap-3">
            <h2 className="font-bold text-3xl">Serviços</h2>
            <p className="text-muted-foreground">
              Preços e duração de cada atendimento.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <li key={service.id}>
                <Card className="h-full bg-card  p-5">
                  <CardTitle className="font-semibold text-lg"><h3>{service.name}</h3></CardTitle>
                  <Badge className="w-fit">{service.duration}</Badge>
                  <p className="text-2xl font-bold">{service.price}</p>
                  <Link to="/login"className={cn(buttonVariants(),"w-full h-11",)}>Agendar</Link>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    );
}