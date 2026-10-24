import barber from "@/assets/barber.png";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layouts/Container";

export function HeroSection() {
  return (
    <section>
      <Container className="grid items-center gap-14 py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="font-bold text-primary uppercase">Agendamento online</p>
          <h1 className="text-5xl font-bold">Seu horário marcado em poucos cliques.</h1>
          <p className="text-lg text-muted-foreground">
            Escolha o serviço, o barbeiro e o horário que cabe na sua agenda. Sem ligação, sem fila
            de espera.
          </p>

          <div className="flex items-center gap-4">
            <Link to="/login" className={cn(buttonVariants(), "h-12 px-6 text-base")}>
              Agendar horário
            </Link>
            <a
              href="#servicos"
              className={cn(buttonVariants({ variant: "outline" }), "h-12 px-6 text-base")}
            >
              Ver serviços
            </a>
          </div>
        </div>

        <img
          className="aspect-4/3 w-full rounded-3xl object-cover"
          src={barber}
          alt="Interior da barbearia"
        />
      </Container>
    </section>
  );
}
