import { business } from "@/config/business";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

import { Container } from "@/components/layouts/Container";
export function ContactSection() {
  return (
    <section id="contato">
      <Container className="py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Onde estamos</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm uppercase tracking-wide text-muted-foreground">Horário de Funcionamento</h3>
            <p>{business.time}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm uppercase tracking-wide text-muted-foreground">Endereço</h3>
            <p>{business.address}</p>
          </div>

          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-fit h-12 px-6 text-base gap-2",
            )}
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            Falar no WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
