import { TrendingUp, Users, Briefcase, Award } from "lucide-react";

export const Impact = () => {
  const metrics = [
    {
      icon: Users,
      number: "500+",
      label: "Pessoas Capacitadas",
      description: "em cursos de inclusão digital"
    },
    {
      icon: Briefcase,
      number: "200+",
      label: "Inserções no Mercado",
      description: "através de parcerias empresariais"
    },
    {
      icon: Award,
      number: "85%",
      label: "Taxa de Satisfação",
      description: "dos beneficiários do programa"
    },
    {
      icon: TrendingUp,
      number: "12",
      label: "Hubs Ativos",
      description: "em comunidades vulneráveis"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Nosso Impacto
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Resultados concretos que comprovam a eficácia do modelo de Hubs Comunitários
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <metric.icon className="h-12 w-12 text-accent mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2 font-heading">
                    {metric.number}
                  </div>
                  
                  <div className="text-lg font-semibold text-white mb-2">
                    {metric.label}
                  </div>
                  
                  <div className="text-sm text-white/80">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact statement */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20">
              <p className="text-2xl text-white font-light leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold">Cada número representa uma vida transformada.</span> Através 
                da inclusão digital, estamos criando pontes reais entre comunidades vulneráveis e 
                oportunidades concretas de desenvolvimento pessoal e profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
