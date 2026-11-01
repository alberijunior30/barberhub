import { business } from "@/config/business";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

import { Container } from "@/components/layouts/Container";
export function ContactSection() {
  return (
    <section id="contato">
      <Container className="grid items-center gap-10 py-20 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Onde estamos</h2>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm tracking-wide text-muted-foreground uppercase">
              Horário de funcionamento
            </h3>
            <p>{business.time}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm tracking-wide text-muted-foreground uppercase">Endereço</h3>
            <p>{business.address}</p>
          </div>

          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full gap-2 px-6 text-base md:w-fit",
            )}
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            Falar no WhatsApp
          </a>
        </div>

        <iframe
          src={business.mapUrl}
          title={`Mapa com a localização de ${business.name}`}
          className="h-80 w-full rounded-2xl border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </Container>
    </section>
  );
}
