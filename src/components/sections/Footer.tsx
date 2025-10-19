import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Hubs Comunitários</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Democratizando o acesso à tecnologia e criando oportunidades reais 
                para comunidades vulneráveis em todo o Brasil.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Como Funciona</a></li>
                <li><a href="#contato" className="hover:text-accent transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Seja Parceiro</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/70 text-sm flex items-center justify-center gap-2">
              Feito com <Heart className="h-4 w-4 text-accent fill-accent" /> para transformar vidas através da tecnologia
            </p>
            <p className="text-white/50 text-xs mt-2">
              © 2025 Hubs Comunitários. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
