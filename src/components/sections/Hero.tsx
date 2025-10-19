import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Wifi, GraduationCap } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Tecnologia que Transforma
              <span className="block text-secondary mt-2">Comunidades</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Democratizando o acesso à tecnologia e educação digital em comunidades vulneráveis 
              através de hubs equipados e capacitação profissional
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                onClick={scrollToContact}
              >
                Seja um Parceiro
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white font-semibold px-8 py-6 text-lg backdrop-blur-sm"
                onClick={scrollToContact}
              >
                Quero Participar
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 animate-scale-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <Users className="h-10 w-10 text-accent mb-3 mx-auto" />
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">52 milhões</div>
              <div className="text-white/80 text-sm">de brasileiros sem internet</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <Wifi className="h-10 w-10 text-secondary mb-3 mx-auto" />
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">73%</div>
              <div className="text-white/80 text-sm">das vagas exigem habilidades digitais</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <GraduationCap className="h-10 w-10 text-accent mb-3 mx-auto" />
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm">gratuito para a comunidade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
