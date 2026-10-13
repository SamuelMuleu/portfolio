import { useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function FeaturedProject() {
  // O plugin precisa ser a mesma instância entre renders, senão o Embla reinicia
  const autoplay = useRef(
    Autoplay({
      delay: 6000,
      active: !prefersReducedMotion,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );

  return (
    <Carousel
      className="w-full"
      opts={{ align: "start", loop: true }}
      plugins={[autoplay.current]}
      aria-label="Outros projetos"
    >
      <CarouselContent className="py-2">
        {projects.map((project) => (
          <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
            <ProjectCard {...project} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex items-center justify-between gap-4 mt-6">
        <CarouselDots />
        <div className="flex gap-2">
          <CarouselPrevious className="static translate-y-0 bg-border/50 text-secondary border-secondary/30 hover:bg-secondary hover:text-black" />
          <CarouselNext className="static translate-y-0 bg-border/50 text-secondary border-secondary/30 hover:bg-secondary hover:text-black" />
        </div>
      </div>
    </Carousel>
  );
}
