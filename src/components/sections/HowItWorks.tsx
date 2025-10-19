import { MapPin, Users, Rocket, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MapPin,
      title: "Identificação e Estruturação",
      description: "Mapeamos comunidades com maior necessidade e estabelecemos parcerias com ONGs locais para instalação dos hubs em espaços acessíveis e seguros"
    },
    {
      number: "02",
      icon: Users,
      title: "Equipamento e Capacitação",
      description: "Instalamos infraestrutura tecnológica completa e iniciamos programas de formação com instrutores qualificados e metodologia adaptada à realidade local"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Conexão com Oportunidades",
      description: "Estabelecemos pontes com empresas parceiras para programas de empregabilidade, estágios e vagas de trabalho direcionadas aos formandos"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Acompanhamento e Expansão",
      description: "Monitoramos indicadores de impacto, coletamos histórias de sucesso e expandimos o modelo para novas comunidades de forma sustentável"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um processo estruturado e colaborativo para garantir impacto real e sustentável
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-20" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center animate-fade-in-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className={`bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <div className={`inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        <span className="text-5xl font-bold text-primary/20 font-heading">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3 mt-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 animate-pulse" />
                  </div>

                  {/* Spacing */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="mt-16 bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl p-10 text-center text-white">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Seja Parte desta Transformação
            </h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Empresas, ONGs e instituições públicas podem se tornar parceiros estratégicos 
              e contribuir para a expansão dos Hubs Comunitários
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
