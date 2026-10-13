import saffir from "../assets/saffir.webp";
import popcorn from "../assets/popcorn.webp";
import todo from "../assets/todo.webp";
import coffeeDelivery from "../assets/coffeeDelivery.webp";
import weather from "../assets/weather.webp";
import calculatorPc from "../assets/calculatorPc.webp";

export interface ProjectProps {
  title: string;
  description: string;
  year: string;
  role: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  credentials?: {
    login: string;
    senha: string;
  };
}

export const projects: ProjectProps[] = [
  {
    title: "Calculadora de Pesos Para Alianças",
    description:
      "Aplicação desenvolvida para otimizar o processo de fundição de alianças. O usuário informa variáveis como circunferência interna, altura e largura, e a aplicação calcula automaticamente a conquila ideal e o peso sugerido para a fundição.",
    year: "2025",
    role: "Desenvolvedor Front-end",
    image: calculatorPc,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/SamuelMuleu/AllianceCalculator",
    demo: "https://alliance-calculator.vercel.app",
  },
  {
    title: "Site para Visualização Climática",
    description:
      "Aplicação web que exibe a previsão do tempo em tempo real, consumindo a API OpenWeatherMap. Permite consultar informações detalhadas sobre o clima em diferentes localidades.",
    year: "2025",
    role: "Desenvolvedor Front-end",
    image: weather,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Axios"],
    github: "https://github.com/SamuelMuleu/weather-app",
    demo: "https://myweathercities.netlify.app",
  },
  {
    title: "Site para favoritar Filmes e Séries",
    description:
      "Aplicação web que consome a API The Movie Database (TMDB), com autenticação e lista de favoritos implementadas com Firebase. Front-end em Next.js e TypeScript, estilizado com Tailwind CSS.",
    year: "2024",
    role: "Desenvolvedor Front-end",
    image: popcorn,
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/SamuelMuleu/popcorn",
    demo: "https://popcornview.netlify.app",
  },
  {
    title: "Site Para Portfólio de uma Joalheria",
    description:
      "Site feito para uma joalheria apresentar seu portfólio de joias. Feito com React e TypeScript, usando Firebase como back-end.",
    year: "2024",
    role: "Desenvolvedor Full-Stack",
    image: saffir,
    technologies: ["React", "TypeScript", "Firebase"],
    github: "https://github.com/SamuelMuleu/portfolioSaffir",
    demo: "https://portfolio-saffir.vercel.app",
    credentials: { login: "saffir@joias.com", senha: "190225" },
  },
  {
    title: "Site de Entrega de Café",
    description:
      "Aplicação de delivery de café que simula a experiência completa, da seleção do produto à confirmação do pedido. Desenvolvida para aprofundar React, especialmente o gerenciamento de estado com Context API.",
    year: "2024",
    role: "Desenvolvedor Front-end",
    image: coffeeDelivery,
    technologies: ["React", "TypeScript", "Styled Components", "Context API"],
    github: "https://github.com/SamuelMuleu/coffeeDelivery",
    demo: "https://coffeefastdelivery.netlify.app",
  },
  {
    title: "Lista de Tarefas Full-Stack",
    description:
      "Aplicativo de lista de tarefas com front-end em React e back-end em Node.js, Express e MongoDB. Permite criar, excluir e concluir tarefas, com os dados persistidos no banco.",
    year: "2024",
    role: "Desenvolvedor Full-Stack",
    image: todo,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/SamuelMuleu/toDo",
    demo: "https://organizelist.netlify.app",
  },
];
