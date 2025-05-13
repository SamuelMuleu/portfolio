import React from 'react';
import { FeaturedProject } from "../projects/FeaturedProject";
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
            Aqui estão alguns dos projetos que demonstram minha paixão
            pelo desenvolvimento e minha capacidade de criar soluções
            funcionais e esteticamente agradáveis.
          </p>
        </motion.div>
        
        <FeaturedProject />
      </div>
    </section>
  );
}