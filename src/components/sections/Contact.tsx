import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {


  const form = useForm<FormValues>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const [sending, setSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const sendEmail: SubmitHandler<FormValues> = (data) => {
    setSending(true);
    emailjs
      .send(
        "service_9xrj56b",
        "template_m1bnr41",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "hKxZa4VyPSjePL6bz"
      )
      .then(
        (result) => {
          console.log("E-mail enviado com sucesso:", result.text);
          setFeedbackMessage("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log("Erro ao enviar e-mail:", error.text);
          setFeedbackMessage("Erro ao enviar mensagem. Tente novamente.");
        }
      )
      .finally(() => {
        setSending(false);
      });
  };


  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="section-title">Contato</h2>
          <p className="text-gray-400 max-w-2xl mt-6">
            Interessado em trabalhar juntos ou tem alguma pergunta?
            Entre em contato comigo através dos canais abaixo ou
            preencha o formulário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-border p-3 rounded-full text-secondary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-400 mt-1">samuelpereiramuleu@gmail.com</p>
                </div>

              </div>

              <div className="flex items-start gap-4">
                <div className="bg-border p-3 rounded-full text-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Telefone</h3>
                  <p className="text-gray-400 mt-1">(22) 99810-9506</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-border p-3 rounded-full text-secondary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Localização</h3>
                  <p className="text-gray-400 mt-1">Campos dos Goytacazes, RJ - Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form className="space-y-6" onSubmit={handleSubmit(sendEmail)} >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Seu nome"
                    {...register("name", { required: "Nome é obrigatório" })}
                  />
                  {errors.name && (
                    <div>{errors.name.message}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="seu.email@exemplo.com"
                    {...register("email", {
                      required: "Email é obrigatório",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Email inválido",
                      },
                    })}
                  />
                  {errors.email && (
                    <div>{errors.email.message}</div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Assunto da mensagem"
                  {...register("message", {
                    required: "Mensagem é obrigatória",
                  })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Sua mensagem..."
                ></textarea>
                {errors.message && (
                  <div>{errors.message.message}</div>
                )}
              </div>

              <Button className="bg-secondary text-black hover:bg-secondary/80 font-medium px-6 py-3 rounded-lg transition-all w-full sm:w-auto">
                {sending ? "Enviando..." : "Enviar"}
              </Button>
              {feedbackMessage && (
                <div className="mt-4 text-white">{feedbackMessage}</div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section >
  );
}