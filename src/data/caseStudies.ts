import centralInicio from "../assets/central/central-inicio.webp";
import centralBaixando from "../assets/central/central-baixando.webp";
import centralCompatibilidade from "../assets/central/central-compatibilidade.webp";
import centralAtualizado from "../assets/central/central-atualizado.webp";

export interface CaseStudyProps {
  id: string;
  title: string;
  tagline: string;
  company: string;
  year: string;
  role: string;
  status: string;
  problem: string;
  solution: string;
  result: string;
  highlights: { title: string; text: string }[];
  technologies: string[];
  screenshots: { src: string; caption: string }[];
  confidentialityNote: string;
}

export const caseStudies: CaseStudyProps[] = [
  {
    id: "central-aplicativos",
    title: "Central de Aplicativos",
    tagline:
      "App Android nativo que instala e atualiza os aplicativos dos coletores de dados do centro de distribuição, sem depender da Play Store.",
    company: "Grupo Barcelos",
    year: "2026",
    role: "Concepção, desenvolvimento e implantação",
    status: "Em produção",
    problem:
      "Os coletores do CD usam apps de fornecedores que não estão na Play Store. Cada versão nova precisava ser instalada à mão, aparelho por aparelho, em uma frota que mistura coletores antigos (Android 5) com modelos recentes.",
    solution:
      "Um app em Kotlin e Jetpack Compose que lê um registro JSON publicado em um servidor interno, compara com o que está instalado e mostra para cada app se ele precisa ser instalado, atualizado ou se já está em dia. No servidor, um monitor em Node.js gera esse registro sozinho a partir dos APKs.",
    result:
      "Publicar uma versão nova passou a ser copiar o APK para o servidor. O registro se atualiza sozinho e o operador instala com um toque, direto no coletor.",
    highlights: [
      {
        title: "Instalação segura",
        text: "Antes de instalar, confere hash SHA-256, nome do pacote, assinatura e bloqueia downgrade.",
      },
      {
        title: "Atualização silenciosa",
        text: "No Android 12+ atualiza sem pedir confirmação, via PackageInstaller API.",
      },
      {
        title: "Frota heterogênea",
        text: "Roda do Android 5.0 ao 15 e avisa quando uma versão exige um Android mais novo que o do aparelho.",
      },
      {
        title: "Publicação automática",
        text: "Script Node.js sem dependências lê versão e minSdk direto do AndroidManifest binário dentro do APK.",
      },
    ],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Coroutines",
      "PackageInstaller API",
      "Node.js",
    ],
    screenshots: [
      { src: centralInicio, caption: "Lista de apps com o status de cada um" },
      { src: centralBaixando, caption: "Download com progresso por app" },
      { src: centralCompatibilidade, caption: "Aviso quando o Android do coletor não é compatível" },
      { src: centralAtualizado, caption: "App instalado e em dia" },
    ],
    confidentialityNote:
      "Projeto interno da empresa. O código é proprietário, mas posso apresentar a arquitetura e as decisões técnicas em uma conversa.",
  },
];
