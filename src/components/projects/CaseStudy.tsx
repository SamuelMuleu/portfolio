import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Lock } from "lucide-react";
import { Badge } from "../ui/badge";
import { CaseStudyProps } from "../../data/caseStudies";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "../ui/carousel";

function ScreenshotCaption({ screenshots }: Pick<CaseStudyProps, "screenshots">) {
  const { selectedIndex } = useCarousel();

  return (
    <p className="text-sm text-gray-400 text-center min-h-[2.5rem] mt-4" aria-live="polite">
      {screenshots[selectedIndex]?.caption}
    </p>
  );
}

function PhoneGallery({ title, screenshots }: Pick<CaseStudyProps, "title" | "screenshots">) {
  return (
    <Carousel opts={{ loop: true }} className="w-full max-w-[290px] mx-auto" aria-label={`Telas do ${title}`}>
      <div className="relative rounded-[2.25rem] border-[10px] border-[#05050c] bg-[#05050c] shadow-2xl shadow-secondary/10">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-1.5 w-16 rounded-full bg-gray-800" />
        <div className="rounded-[1.6rem] overflow-hidden">
          <CarouselContent>
            {screenshots.map((shot) => (
              <CarouselItem key={shot.src}>
                <img
                  src={shot.src}
                  alt={shot.caption}
                  width={600}
                  height={944}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-auto block select-none"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </div>

      <ScreenshotCaption screenshots={screenshots} />

      <div className="flex items-center justify-between mt-2">
        <CarouselPrevious className="static translate-y-0 bg-border/50 text-secondary border-secondary/30 hover:bg-secondary hover:text-black" />
        <CarouselDots />
        <CarouselNext className="static translate-y-0 bg-border/50 text-secondary border-secondary/30 hover:bg-secondary hover:text-black" />
      </div>
    </Carousel>
  );
}

export function CaseStudy({
  id,
  title,
  tagline,
  company,
  year,
  role,
  status,
  problem,
  solution,
  result,
  highlights,
  technologies,
  screenshots,
  confidentialityNote,
}: CaseStudyProps) {
  const story = [
    { label: "O problema", text: problem },
    { label: "A solução", text: solution },
    { label: "O resultado", text: result },
  ];

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14 items-start bg-border/70 border border-secondary/10 rounded-2xl p-6 sm:p-8 lg:p-12"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <Badge className="bg-secondary text-black border-transparent hover:bg-secondary gap-1.5">
            <Briefcase size={12} />
            Projeto profissional
          </Badge>
          <Badge variant="outline" className="border-success/40 text-success gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {status}
          </Badge>
          <span className="text-sm text-gray-400">
            {company} · {year}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
        <p className="text-lg text-gray-300 mt-3 max-w-2xl">{tagline}</p>
        <p className="text-sm text-gray-500 mt-2">{role}</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {story.map((item) => (
            <div key={item.label}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                {item.label}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 pt-8 border-t border-white/5">
          {highlights.map((highlight) => (
            <li key={highlight.title} className="flex gap-3">
              <CheckCircle2 className="shrink-0 text-secondary mt-0.5" size={18} />
              <div>
                <p className="text-sm font-semibold text-white">{highlight.title}</p>
                <p className="text-sm text-gray-400">{highlight.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-8">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-primary/50 text-gray-300 border-secondary/20">
              {tech}
            </Badge>
          ))}
        </div>

        <p className="flex items-start gap-2 text-xs text-gray-500 mt-6">
          <Lock size={14} className="shrink-0 mt-0.5" />
          {confidentialityNote}
        </p>
      </div>

      <PhoneGallery title={title} screenshots={screenshots} />
    </motion.article>
  );
}
