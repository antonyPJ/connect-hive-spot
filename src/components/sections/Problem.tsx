import { AlertCircle, TrendingDown, Lock, Users } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      stat: "52 milhões",
      description: "de brasileiros sem acesso à internet domiciliar",
      color: "text-secondary"
    },
    {
      icon: TrendingDown,
      stat: "73%",
      description: "das oportunidades de emprego exigem habilidades digitais básicas",
      color: "text-primary"
    },
    {
      icon: Lock,
      stat: "Exclusão",
      description: "digital aprofunda desigualdades sociais e econômicas",
      color: "text-destructive"
    },
    {
      icon: Users,
      stat: "Comunidades",
      description: "vulneráveis sem acesso a cursos e equipamentos tecnológicos",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              O Desafio da Exclusão Digital
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A exclusão digital é uma barreira real que impede milhões de brasileiros 
              de acessarem oportunidades de educação, trabalho e desenvolvimento pessoal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <problem.icon className={`h-12 w-12 ${problem.color} mb-4`} />
                <div className="text-3xl font-bold text-foreground mb-2">{problem.stat}</div>
                <p className="text-muted-foreground text-lg">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Contextual info */}
          <div className="mt-12 bg-muted/50 rounded-2xl p-8 border-l-4 border-primary">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-semibold">A realidade é clara:</span> enquanto a sociedade avança 
              digitalmente, comunidades inteiras ficam para trás. Essa lacuna não afeta apenas o acesso 
              à informação, mas compromete diretamente as oportunidades de emprego, educação e 
              participação social plena.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
