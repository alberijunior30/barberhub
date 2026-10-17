import { Container } from "@/components/layouts/Container"
import { business } from "@/config/business"

export function Footer(){

    const year = new Date().getFullYear()
    return (
      <footer className="border-t">
        <Container className="flex flex-col items-center md:flex-row justify-between py-10 gap-3">
          <p className="text-muted-foreground">{`© ${year} ${business.name}`}</p>
          <div className="flex text-muted-foreground gap-3">
            <a
              href={`https://www.instagram.com/${business.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </Container>
      </footer>
    );
}