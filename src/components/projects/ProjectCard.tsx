import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ProjectProps } from "../../data/projects";
import { Github, ExternalLink } from 'lucide-react';

export function ProjectCard({
  title,
  description,
  year,
  image,
  technologies,
  github,
  demo,
}: ProjectProps) {
  return (
    <article className="h-full flex flex-col bg-border rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-secondary/10 group">
      <div className="h-48 overflow-hidden bg-primary/40">
        <img
          src={image}
          alt={`Tela do projeto ${title}`}
          width={1280}
          height={720}
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-sm font-medium text-secondary shrink-0">{year}</span>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-primary/50 text-gray-300 border-secondary/20">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-2">
          {github && (
            <Button asChild variant="outline" className="flex-1 bg-transparent text-white border-secondary/50 hover:bg-secondary hover:text-black gap-2">
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`Código de ${title} no GitHub`}>
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </Button>
          )}
          {demo && (
            <Button asChild className="flex-1 bg-secondary text-black hover:bg-secondary/80 gap-2">
              <a href={demo} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demo de ${title}`}>
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
