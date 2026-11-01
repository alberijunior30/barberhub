import monsterWebp from "@/assets/monster-404-animated.webp";
import monsterPoster from "@/assets/monster-404-poster.webp";
import monsterVideo from "@/assets/monster-404.mp4";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const monsterClasses =
  "-mx-4 size-40 object-cover sm:-mx-6 sm:size-60 [mask-image:radial-gradient(circle_closest-side,black_80%,transparent)]";

const digitClasses = "text-[7rem] font-bold text-primary sm:text-[11rem]";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Monster() {
  const videoRef = useRef(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => setAutoplayBlocked(true));
  }, []);

  if (prefersReducedMotion()) {
    return <img src={monsterPoster} alt="" className={monsterClasses} />;
  }

  if (autoplayBlocked) {
    return <img src={monsterWebp} alt="" className={monsterClasses} />;
  }

  return (
    <video
      ref={videoRef}
      src={monsterVideo}
      poster={monsterPoster}
      muted
      loop
      playsInline
      className={monsterClasses}
    />
  );
}

export function ErrorPage() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

    if (!isNotFound) {
      console.error(error);
    }

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 py-10 text-center">
      {isNotFound ? (
        <>
          <div aria-hidden="true" className="flex items-center justify-center">
            <span className={digitClasses}>4</span>
            <Monster />
            <span className={digitClasses}>4</span>
          </div>

          <h1 className="mt-4 font-heading text-2xl leading-snug font-medium">
            Página não encontrada
          </h1>
          <p className="mt-2 max-w-sm text-muted-foreground">
            O endereço que você acessou não existe ou foi removido.
          </p>
        </>
      ) : (
        <>
          <h1 className="font-heading text-2xl leading-snug font-medium">Algo deu errado</h1>
          <p className="mt-2 max-w-sm text-muted-foreground">
            Ocorreu um erro inesperado. Tente novamente em alguns instantes.
          </p>
        </>
      )}

      <Link to="/" className={cn(buttonVariants(), "mt-8 h-11 px-6")}>
        Voltar para o início
      </Link>
    </main>
  );
}
