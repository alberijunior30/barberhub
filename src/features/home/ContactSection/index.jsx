import { Container } from "@/components/layouts/Container"
export function ContactSection({time,address}){
    return(
        <section id="contato">
            <Container className="py-20 flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-bold">Onde estamos</h2>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-muted-foreground">HORÁRIO DE FUNCIONAMENTO</h3>
                        <p>{time}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-muted-foreground">ENDEREÇO</h3>
                        <p>{address}</p>
                    </div>
                </div>

            </Container>
        </section>
    )
}