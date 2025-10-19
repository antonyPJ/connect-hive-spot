import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Antes eu não sabia nem ligar um computador. Hoje trabalho com atendimento digital e ajudo minha família.",
      author: "Maria Silva",
      role: "Beneficiária - São Paulo",
      insight: "Necessidade de cursos básicos e práticos"
    },
    {
      quote: "O hub mudou minha vida. Consegui meu primeiro emprego formal depois do curso de informática.",
      author: "João Santos",
      role: "Beneficiário - Rio de Janeiro",
      insight: "Importância da conexão com empregabilidade"
    },
    {
      quote: "Ter acesso gratuito à internet e computadores perto de casa fez toda diferença para estudar e procurar emprego.",
      author: "Ana Costa",
      role: "Beneficiária - Belo Horizonte",
      insight: "Necessidade de proximidade e gratuidade"
    },
    {
      quote: "Investir em inclusão digital é investir no futuro do país. Os hubs são a ponte necessária.",
      author: "Carlos Mendes",
      role: "Diretor de Responsabilidade Social - Empresa Parceira",
      insight: "Visão estratégica de parceiros empresariais"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Histórias que Inspiram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vozes reais de quem vivencia a transformação digital nas comunidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="h-10 w-10 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />
                
                <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary/70 mt-2 font-medium">
                    Insight: {testimonial.insight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full">
              <span className="text-2xl font-bold">500+</span>
              <span className="text-sm">vidas transformadas através da inclusão digital</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
