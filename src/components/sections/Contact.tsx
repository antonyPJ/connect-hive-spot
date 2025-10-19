import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, User, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "parceiro",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      email: "",
      organization: "",
      interest: "parceiro",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Vamos Transformar Juntos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entre em contato para se tornar um parceiro, beneficiário ou conhecer mais sobre os Hubs Comunitários
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="organization" className="text-base flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Organização (opcional)
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Nome da empresa/instituição"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="interest" className="text-base">
                    Interesse
                  </Label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full mt-2 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="parceiro">Ser Parceiro/Investidor</option>
                    <option value="beneficiario">Participar como Beneficiário</option>
                    <option value="informacao">Solicitar Mais Informações</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-base flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos mais sobre seu interesse..."
                    className="mt-2 min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Info Cards */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-white">
                <h3 className="font-heading text-2xl font-bold mb-4">Para Empresas e Investidores</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Oportunidades de parceria estratégica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Responsabilidade social corporativa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Acesso a talentos qualificados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Impacto social mensurável</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 text-white">
                <h3 className="font-heading text-2xl font-bold mb-4">Para Beneficiários</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-white text-xl">✓</span>
                    <span>100% gratuito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white text-xl">✓</span>
                    <span>Cursos certificados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white text-xl">✓</span>
                    <span>Equipamentos de qualidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white text-xl">✓</span>
                    <span>Conexão com o mercado de trabalho</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Informações de Contato</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>📧 contato@hubscomunitarios.org.br</p>
                  <p>📱 (11) 98765-4321</p>
                  <p>📍 São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
