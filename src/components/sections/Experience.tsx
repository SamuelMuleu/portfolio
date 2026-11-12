import { motion } from 'framer-motion';
import { BadgeCheck, MapPin } from 'lucide-react';

// Conteúdo idêntico à seção Experiência do LinkedIn (linkedin.com/in/samuel-muleu)
const experiences = [
  {
    company: "Barcelos",
    role: "Analista de Sistemas",
    type: "Tempo integral",
    start: "2025-08",
    end: null,
    location: "Campos dos Goytacazes, Rio de Janeiro, Brasil · Presencial",
    description:
      "Analista de Sistemas no Grupo Barcelos (varejo supermercadista), responsável pela sustentação do ERP TOTVS Consinco e pelo desenvolvimento de soluções internas que integram o banco Oracle, as lojas e a gestão.",
    achievements: [
      "Desenvolvi a Central de Aplicativos, app Android que instala e atualiza automaticamente os apps dos coletores de dados das lojas a partir de um servidor interno",
      "Desenvolvo consultas, procedures e relatórios em Oracle PL/SQL para extrair dados do ERP e apoiar decisões da gestão",
      "Criei e implantei aplicações web internas em Node.js/Express integradas ao Oracle, publicadas em servidor próprio com PM2 e nginx",
      "Automatizei rotinas de integração e envio de dados com Node.js e N8N, eliminando trabalho manual",
      "Atendo usuários, levanto requisitos, faço homologação e cuido do relacionamento com o suporte do sistema",
    ],
  },
  {
    company: "Data Campos Sistemas",
    role: "Desenvolvedor Fullstack Trainee",
    type: "Tempo integral",
    start: "2025-05",
    end: "2025-08",
    location: "Campos dos Goytacazes, Rio de Janeiro, Brasil · Presencial",
    description:
      "Desenvolvimento e manutenção de aplicações web e mobile para clientes da software house, no ecossistema Angular, Ionic e Laravel (PHP).",
    achievements: [
      "Implementei novas funcionalidades em aplicações web (Angular) e mobile (Ionic)",
      "Desenvolvi e mantive endpoints e regras de negócio no back-end em Laravel",
      "Integrei aplicações com APIs REST",
      "Corrigi bugs e trabalhei com versionamento em Git em equipe ágil",
    ],
  },
];

const MONTHS = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

function parse(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return { y, m };
}

const formatMonth = (ym: string) => {
  const { y, m } = parse(ym);
  return `${MONTHS[m - 1]} de ${y}`;
};

/** Same rule as LinkedIn: counts both the start and the end month. */
function duration(start: string, end: string | null) {
  const s = parse(start);
  const now = new Date();
  const e = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() + 1 };
  const total = (e.y - s.y) * 12 + (e.m - s.m) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  if (months) parts.push(`${months} ${months === 1 ? "mês" : "meses"}`);
  return parts.join(" e ");
}

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-primary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="section-title">Experiência Profissional</h2>
        </motion.div>

        <div className="timeline-container mt-16 pb-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="experience-item pb-16"
            >
              <article className="experience-content">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  {!exp.end && (
                    <span className="rounded-full border border-success/40 px-2.5 py-0.5 text-xs font-medium text-success">
                      Atual
                    </span>
                  )}
                </div>
                <p className="text-secondary font-medium mt-1">
                  {exp.company} · {exp.type}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {formatMonth(exp.start)} - {exp.end ? formatMonth(exp.end) : "o momento"} · {duration(exp.start, exp.end)}
                </p>
                <p className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
                  <MapPin size={14} className="shrink-0" aria-hidden />
                  {exp.location}
                </p>

                <p className="text-gray-300 mt-4">{exp.description}</p>

                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <BadgeCheck className="flex-shrink-0 text-secondary mt-0.5" size={18} aria-hidden />
                      <span className="text-sm text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
