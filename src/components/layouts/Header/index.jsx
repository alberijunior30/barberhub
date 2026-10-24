import Logo from "@/assets/images.png";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layouts/Container";
import { business } from "@/config/business";

export function Header({ links = [], actions }) {
  const [state, setState] = useState(false);

  function close() {
    setState(false);
  }

  return (
    <header className="bg-card shadow-xl/30">
      <Container className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <img className="size-10 rounded-full md:size-15" src={Logo} alt="Logo do Sistema" />
          <span className="text-sm leading-none font-bold uppercase md:text-xl">
            {business.name}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.Label}
              </a>
            ))}
          </nav>
          {actions}
          <Sheet open={state} onOpenChange={setState}>
            <SheetTrigger
              aria-label="Abrir menu"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="bg-card">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 text-center">
                {links.map((link) => (
                  <a onClick={close} key={link.href} href={link.href}>
                    {link.Label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
