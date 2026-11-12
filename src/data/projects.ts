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
}

export const projects: ProjectProps[] = [
  {
    title: "Popcorn: guia de filmes e séries",
    description:
      "Guia em português com sinopse, elenco, trailer e onde assistir no Brasil, consumindo a API do TMDB. Páginas renderizadas no servidor com SEO, artigos editoriais e listas pessoais (favoritos, assistidos e episódios) com login Google no Firebase.",
    year: "2024",
    role: "Desenvolvedor Full-Stack",
    image: popcorn,
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/SamuelMuleu/popcorn",
    demo: "https://popcornview.netlify.app",
  },
  {
    title: "Coffee Delivery",
    description:
      "Loja de cafés com catálogo, carrinho e checkout. Carrinho com useReducer e Context API salvo no navegador, formulário validado com react-hook-form e endereço preenchido automaticamente pelo CEP (ViaCEP).",
    year: "2024",
    role: "Desenvolvedor Front-end",
    image: coffeeDelivery,
    technologies: ["React", "TypeScript", "Styled Components", "Context API"],
    github: "https://github.com/SamuelMuleu/coffeeDelivery",
    demo: "https://coffeefastdelivery.netlify.app",
  },
  {
    title: "Weather: previsão do tempo",
    description:
      "Busca de cidades com sugestões e geolocalização, clima atual no fuso da cidade, detalhes do dia e previsão para 5 dias com a API do OpenWeather. Estado global com Redux Toolkit e estados de carregamento e erro.",
    year: "2025",
    role: "Desenvolvedor Front-end",
    image: weather,
    technologies: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/SamuelMuleu/weather-app",
    demo: "https://myweathercities.netlify.app",
  },
  {
    title: "Lista de Tarefas Full-Stack",
    description:
      "Front-end em React com atualizações otimistas e uma API REST própria em Node.js, Express e MongoDB, com validação, códigos HTTP corretos e testes de integração. API em github.com/SamuelMuleu/to-do-api.",
    year: "2024",
    role: "Desenvolvedor Full-Stack",
    image: todo,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/SamuelMuleu/toDo",
    demo: "https://organizelist.netlify.app",
  },
  {
    title: "Catálogo de uma Joalheria",
    description:
      "Catálogo de joias com filtros por categoria, promoções e painel administrativo protegido por login para cadastrar, editar e remover peças. Dados e autenticação no Firebase.",
    year: "2024",
    role: "Desenvolvedor Full-Stack",
    image: saffir,
    technologies: ["React", "TypeScript", "Chakra UI", "Firebase"],
    github: "https://github.com/SamuelMuleu/portfolioSaffir",
    demo: "https://portfolio-saffir.vercel.app",
  },
  {
    title: "Calculadora de Pesos para Alianças",
    description:
      "Ferramenta usada na fundição de alianças: a partir da numeração, altura e largura, calcula a conquilha ideal e o peso de ouro necessário.",
    year: "2025",
    role: "Desenvolvedor Front-end",
    image: calculatorPc,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/SamuelMuleu/AllianceCalculator",
    demo: "https://alliance-calculator.vercel.app",
  },
];
