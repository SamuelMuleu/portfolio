import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ProjectProps } from "../../data/projects";
import { Github, ExternalLink } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export function ProjectCard({
  title,
  description,
  year,
  image2,
  technologies,
  site,
  platform,
  demo,
  email,
  senha,
}: ProjectProps) {
  return (
    <div className="h-full bg-border rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10 group">
      <div className="h-48 overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">

            <CarouselItem className="h-full">
              <img
                src={image2}
                alt={title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-sm font-medium text-secondary">{year}</span>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies && technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-primary/50 text-gray-300 border-secondary/20">
              {tech}
            </Badge>
          ))}
        </div>

        {(email || senha) && (
          <div className="mb-4 p-3 bg-primary/50 rounded-lg">
            <p className="text-xs text-gray-400 mb-1">Credenciais de teste:</p>
            {email && <p className="text-xs text-gray-300">Login: <span className="text-secondary">{email}</span></p>}
            {senha && <p className="text-xs text-gray-300">Senha: <span className="text-secondary">{senha}</span></p>}
          </div>
        )}

        <div className="flex justify-between gap-3 mt-4">
          <a
            href={`https://github.com/SamuelMuleu/${site}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" className="w-full bg-transparent text-white border-secondary/50 hover:bg-secondary hover:text-black flex items-center justify-center gap-2">
              <Github size={16} />
              <span>GitHub</span>
            </Button>
          </a>
          <a
            href={`https://${demo}.${platform === "vercel" ? "vercel.app" : "netlify.app"
              }`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full bg-secondary text-black hover:bg-secondary/80 flex items-center justify-center gap-2">
              <ExternalLink size={16} />
              <span>Demo</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}