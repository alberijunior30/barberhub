import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/components/layouts/Header";
import { HeroSection } from "@/features/home/HeroSection";
import { HowItWorksSection } from "@/features/home/HowItWorksSection";
import { ServicesSection } from "@/features/home/ServicesSection";
import { TeamSection } from "@/features/home/TeamSection";
export function Home(){

    const navLinks = [
        {href:"#servicos", Label:"Serviços"},
        {href:"#equipe", Label:"Equipe"},
        {href:"#contato", Label:"Contato"}
    ]

    return (
        <>
            <Header 
            links={navLinks}
            actions={<Link to="/login"className={cn(buttonVariants(),"p-5",)}>Entrar</Link>}/>

            <HeroSection/>
            <HowItWorksSection/>
            <ServicesSection/>
            <TeamSection/>
        </>

    );
}
