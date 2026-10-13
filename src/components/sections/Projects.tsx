import { FeaturedProject } from "../projects/FeaturedProject";
import { CaseStudy } from "../projects/CaseStudy";
import { caseStudies } from "../../data/caseStudies";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="section-title">Projetos</h2>
          <p className="text-gray-400 max-w-2xl mt-6">
            Soluções que já estão em uso no dia a dia de uma operação real,
            e projetos pessoais onde exploro novas tecnologias.
          </p>
        </motion.div>

        <div className="space-y-10">
          {caseStudies.map((caseStudy) => (
            <CaseStudy key={caseStudy.id} {...caseStudy} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Projetos pessoais</h3>
          <FeaturedProject />
        </motion.div>
      </div>
    </section>
  );
}
