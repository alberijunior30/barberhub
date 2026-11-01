import { Container } from "@/components/layouts/Container";

const steps = [
  { titulo: "Escolha o serviço", desc: "Corte, Barba ..." },
  { titulo: "Escolha barbeiro e horário", desc: "Vários horários livres de cada profissional." },
  { titulo: "Confirme", desc: "Pronto, é só aparecer no horário marcado." },
];

export function HowItWorksSection() {
  return (
    <section className="bg-card">
      <Container className="flex flex-col gap-10 py-20">
        <h2 className="text-center text-3xl font-bold">Como funciona</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.titulo} className="flex flex-col items-center gap-3 text-center">
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-full bg-primary font-bold"
              >
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold">{step.titulo}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
