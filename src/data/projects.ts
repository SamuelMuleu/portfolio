import saffir from "../assets/saffir.png";
import popcorn from "../assets/popcorn.png";
import todo from "../assets/todo.png";
import coffeeDelivery from "../assets/coffeeDelivery.png";
import weather from "../assets/weather.png";
import weatherMobile from "../assets/weatherMobile.png";
import calculatorMobile from "../assets/calculatorMobile.png";
import calculatorPc from "../assets/calculatorPc.png";

export interface ProjectProps {
  title: string;
  description: string;
  year: string;
  role: string;
  image: string;
  image2: string;
  technologies?: string[];
  site: string;
  platform: "vercel" | "netlify";
  demo: string;
  email?: string;
  senha?: string;
}

export const projects: ProjectProps[] = [
  {

    title: "Calculadora de Pesos Para Alianças",
    description: "Aplicação desenvolvida para otimizar o processo de fundição de alianças. O usuário informa variáveis como circunferência interna, altura e largura, e a aplicação calcula automaticamente a conquila ideal e o peso sugerido para a fundição.",
    year: '2025',
    role: "Desenvolvedor Front-end",
    image: calculatorMobile,
    image2: calculatorPc,
    platform: "vercel",
    site: "AllianceCalculator",
    demo: "alliance-calculator",
    email: "----",
    senha: "----",
  },
  {
    title: "Site para Visualização Climática",
    description: "Este projeto consiste em uma aplicação web desenvolvida para exibir a previsão do tempo em tempo real, utilizando a API OpenWeatherMap para consumo de dados. A aplicação permite que os usuários consultem informações detalhadas sobre a previsão do tempo em diferentes localidades.O front-end foi desenvolvido com React.js e TypeScript.",
    year: '2025',
    role: "Desenvolvedor Front-end",
    image: weatherMobile,
    image2: weather,
    platform: "netlify",
    site: "weather-app",
    demo: "myweathercities",
    email: "----",
    senha: "----",
  },
  {
    title: "Site para favoritar Filmes e Séries",
    description:
      "Este projeto consiste em uma aplicação web que consome dados da API The Movie Database (TMDB). A aplicação inclui um sistema de autenticação e uma funcionalidade para favoritar filmes e séries, ambos implementados usando Firebase. O front-end foi desenvolvido com Next.js e TypeScript,  utilizando Tailwind CSS para estilização, garantindo um design responsivo e de rapida manutenção. ",
    year: '2024',
    role: "Desenvolvedor Front-end",
    image: popcorn,
    image2: popcorn,
    platform: "netlify",
    site: "popcorn",
    demo: "popcornview",
    email: "crie você mesmo",
    senha: "----",

  },
  {
    title: "Site Para Portfólio de uma Joalheria",
    description:
      "Site feito para uma joalheria para ser um portfólio de joias. Feito com React e TypeScript e Firebase para Back-end",
    year: '2024',
    role: "Desenvolvedor Full-Stack",
    image: saffir,
    image2: saffir,

    site: "portfolioSaffir",
    demo: "portfolio-saffir",
    platform: "vercel",
    email: "saffir@joias.com",
    senha: "190225",

  },
  {
    title: "Site de Entrega de Café: Da Seleção ao Pedido Confirmado",
    description:
      "Coffee Delivery é uma aplicação de delivery de café, desenvolvida com o objetivo de aprimorar conhecimentos em React, especialmente o uso do hook useContext. Este projeto simula uma experiência completa de entrega de café, desde a seleção do produto até a confirmação do pedido",
    year: '2024',
    role: "Desenvolvedor Front-end",
    image: coffeeDelivery,
    image2: coffeeDelivery,
    platform: "netlify",
    site: "coffeeDelivery",
    demo: "coffeefastdelivery",
    email: "samuel@email.com",
    senha: "123",

  },
  {
    title: "Site to-do",
    description:
      "Este é um aplicativo de lista de tarefas desenvolvido com React para o front-end e Node.js, Express e MongoDB para o backend. O aplicativo permite que os usuários criem, deletem e marquem suas tarefas como concluídas, com dados persistidos no MongoDB.",
    year: '2024',
    role: "Desenvolvedor Full-stack",
    image: todo,
    image2: todo,
    platform: "netlify",
    site: "toDo",
    demo: "organizelist",
    email: "não é necessario ",
    senha: "não é necessario",

  },
];