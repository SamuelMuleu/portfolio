import React from 'react';
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function FeaturedProject() {
  return (
    <div className="overflow-hidden">
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-6 px-4">
          <CarouselPrevious className="static bg-border/50 text-secondary hover:bg-secondary hover:text-black transform-none mx-0" />
          <CarouselNext className="static bg-border/50 text-secondary hover:bg-secondary hover:text-black transform-none mx-0" />
        </div>
      </Carousel>
    </div>
  );
}