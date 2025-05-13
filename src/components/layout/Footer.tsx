import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white font-bold text-xl">Samuel Muleu</p>

          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/SamuelMuleu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/samuel-muleu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:samuelpereiramuleu@gmail.com"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Samuel Muleu. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}