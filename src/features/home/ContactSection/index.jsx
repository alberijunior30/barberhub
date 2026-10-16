import { business } from "@/Config/Business"

import { Container } from "@/components/layouts/Container"
export function ContactSection(){
    return(
        <section id="contato">
            <Container className="py-20 flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-bold">Onde estamos</h2>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-muted-foreground">HORÁRIO DE FUNCIONAMENTO</h3>
                        <p>{business.time}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-muted-foreground">ENDEREÇO</h3>
                        <p>{business.address}</p>
                    </div>
                </div>

            </Container>
        </section>
    )
}