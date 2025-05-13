import { motion } from 'framer-motion';
import { ArrowDownCircle, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Samuel <span className="text-secondary">Muleu</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mt-4">
              Desenvolvedor FullStack
            </h2>
            <p className="text-gray-400 max-w-xl mt-6 text-lg">
              Sou um desenvolvedor apaixonado por criar sistemas modernos e interativos.
              Com foco em resolução de problemas, busco sempre entregar experiências
              de usuário excepcionais.
            </p>

            <div className="flex space-x-4 mt-8">
              <a
                href="https://github.com/SamuelMuleu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-border rounded-full text-white hover:text-secondary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-muleu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-border rounded-full text-white hover:text-secondary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:samuelpereiramuleu@gmailcom"
                className="p-2 bg-border rounded-full text-white hover:text-secondary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="mt-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-secondary font-medium hover:underline"
              >
                Ver meus projetos
                <ArrowDownCircle size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full h-full absolute -inset-2 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="bg-border p-8 rounded-2xl shadow-xl relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm">samuel_dev.jsx</div>
                </div>
                <pre className="text-sm text-gray-300 font-mono bg-primary/50 p-6 rounded-lg overflow-hidden">
                  <code>
                    <div><span className="text-blue-400">const</span> <span className="text-green-400">developer</span> = {'{'}</div>
                    <div>  <span className="text-yellow-400">name</span>: <span className="text-orange-400">'Samuel Muleu'</span>,</div>
                    <div>  <span className="text-yellow-400">role</span>: <span className="text-orange-400">'Frontend Developer'</span>,</div>
                    <div>  <span className="text-yellow-400">skills</span>: [</div>
                    <div>    <span className="text-orange-400">'React'</span>,</div>
                    <div>    <span className="text-orange-400">'TypeScript'</span>,</div>
                    <div>    <span className="text-orange-400">'JavaScript'</span>,</div>
                    <div>    <span className="text-orange-400">'Express'</span>,</div>
                    <div>    <span className="text-orange-400">'Tailwind CSS'</span>,</div>
                    <div>    <span className="text-orange-400">'Laravel'</span></div>

                    <div>  ],</div>
                    <div>{'}'}</div>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}