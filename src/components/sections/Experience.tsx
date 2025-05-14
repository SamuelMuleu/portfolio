import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const experiences = [
  {
    company: "Data Campos Sistemas",
    role: " Estagiario Desenvolvedor FullStack",
    period: "2025 - atualmente",
    description: "Início da carreira profissional com foco em aprendizado e desenvolvimento de habilidades técnicas. Colaboração em projetos de front-end e back-end básicos.",
    achievements: [
      "Aprendi frameworks modernos como React, Next.js,laravel e Node.js",
      "Participei no desenvolvimento de projetos completos e colaborei em ajustes de bugs",
      "Implementei recursos de UX/UI que melhoraram a interação do usuário"
    ]
  }
];

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
          <p className="text-gray-400 max-w-2xl mt-6">
            Minha trajetória profissional inclui experiências que me permitiram
            desenvolver habilidades técnicas e soft skills essenciais para entregar
            projetos de qualidade.
          </p>
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
              <div className={`experience-content ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <div className="flex items-center mb-2 justify-start md:justify-end">
                  <span className="text-secondary font-medium">{exp.role}</span>
                </div>
                <div className="text-sm text-gray-400 mb-4 md:justify-end">{exp.period}</div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className={`space-y-2 ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                  {exp.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                      <BadgeCheck className="flex-shrink-0 text-secondary mt-0.5" size={18} />
                      <p className="text-sm text-gray-400">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}