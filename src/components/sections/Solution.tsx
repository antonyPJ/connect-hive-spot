import { Laptop, GraduationCap, Briefcase, Heart } from "lucide-react";

export const Solution = () => {
  const pillars = [
    {
      icon: Laptop,
      title: "Acesso à Tecnologia",
      description: "Hubs equipados com computadores, internet de alta velocidade e ferramentas digitais modernas em espaços comunitários acessíveis",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: GraduationCap,
      title: "Capacitação Digital",
      description: "Cursos gratuitos de informática básica, alfabetização digital e desenvolvimento de habilidades profissionais para o mercado atual",
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: Briefcase,
      title: "Oportunidades Reais",
      description: "Conexão com o mercado de trabalho através de parcerias empresariais, networking e programas de empregabilidade",
      gradient: "from-accent to-accent/80"
    },
    {
      icon: Heart,
      title: "Impacto Sustentável",
      description: "Modelo colaborativo que envolve ONGs, empresas e poder público para criar transformação social duradoura",
      gradient: "from-primary/80 to-secondary/80"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Nossa Solução: Hubs Comunitários
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Espaços físicos estrategicamente localizados em comunidades vulneráveis, 
              oferecendo acesso gratuito à tecnologia, educação digital e oportunidades de emprego
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-4`}>
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Value proposition */}
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-10 text-center text-white shadow-xl">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Um Modelo Inovador de Transformação Social
            </h3>
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
              Combinamos infraestrutura física, educação de qualidade e parcerias estratégicas 
              para criar um ecossistema completo de inclusão digital. Não oferecemos apenas 
              acesso à tecnologia, mas sim um caminho estruturado para oportunidades reais de 
              desenvolvimento pessoal e profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
