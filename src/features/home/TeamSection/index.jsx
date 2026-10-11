import { Container } from "@/components/layouts/Container"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatarLogo from "@/assets/avatar-logo.png"

const barbers = [
  { id:"09oa8", initial: "A", name: "[Nome do barbeiro]", skill: "[Especialidades]" },
  { id:"73gd5", initial: "B", name: "[Nome do barbeiro]", skill: "[Especialidades]" },
  { id:"18yd9", initial: "C", name: "[Nome do barbeiro]", skill: "[Especialidades]" },
];

export function TeamSection(){
    
    return (
      <section id="equipe" className="bg-card">
        <Container className="py-20 flex flex-col gap-10">
          <div className="flex flex-col text-center gap-3">
            <h2 className="font-bold text-3xl">Nossa Equipe</h2>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {barbers.map((barber) => (
              <li key={barber.id} className="flex gap-3 flex-col items-center text-center">
                <Avatar className="size-32">
                  <AvatarImage src={avatarLogo} alt={`Foto de ${barber.name}`}/>
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