import { Container } from "@/components/layouts/Container";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatarLogo from "@/assets/avatar-logo.png";

const barbers = [
  { id: "09oa8", initial: "A", name: "[Nome do barbeiro]", skill: "[Especialidades]" },
  { id: "73gd5", initial: "B", name: "[Nome do barbeiro]", skill: "[Especialidades]" },
  { id: "18yd9", initial: "C", name: "[Nome do barbeiro]", skill: "[Especialidades]" },
];

export function TeamSection() {
  return (
    <section id="equipe" className="bg-card">
      <Container className="flex flex-col gap-10 py-20">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold">Nossa Equipe</h2>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((barber) => (
            <li key={barber.id} className="flex flex-col items-center gap-3 text-center">
              <Avatar className="size-32">
                <AvatarImage src={avatarLogo} alt={`Foto de ${barber.name}`} />
                <AvatarFallback className="text-2xl">{barber.initial}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{barber.name}</h3>
              <p className="text-muted-foreground">{barber.skill}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
