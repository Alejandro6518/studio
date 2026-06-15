import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { MessageSquare, User, Heart, Share2, Quote, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ComunidadPage() {
  const communityImage = PlaceHolderImages.find(img => img.id === 'community-support');

  const testimonials = [
    {
      text: "Durante años no me atreví a cambiar de carrera por miedo a que fuera 'demasiado tarde' o a equivocarme de vocación. Finalmente lo hice y descubrí que el error hubiera sido quedarme donde no era feliz.",
      tag: "Crecimiento Profesional",
      color: "bg-blue-500"
    },
    {
      text: "Me daba pánico decir lo que sentía por miedo al rechazo. Aprendí que el silencio también era una decisión, y una que me hacía más daño que cualquier posible 'error' al hablar.",
      tag: "Relaciones Personales",
      color: "bg-accent"
    },
    {
      text: "Emprender me enseñó que los fallos son solo datos. Cada vez que algo salía mal, simplemente tenía más información para la siguiente vez. El fracaso es solo información.",
      tag: "Resiliencia",
      color: "bg-primary"
    },
    {
      text: "El miedo a equivocarme con la crianza de mis hijos me paralizaba. Ahora entiendo que ser vulnerable frente a ellos y admitir mis errores es la mejor lección que les puedo dar.",
      tag: "Vida Familiar",
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20 space-y-24">
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold font-headline">Experiencias Compartidas</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          No estás solo en tus dudas. Lee cómo otros han enfrentado sus miedos y han transformado la incertidumbre en un motor de cambio.
        </p>
      </section>

      <section className="relative h-[400px] rounded-[4rem] overflow-hidden shadow-2xl">
        {communityImage && (
          <Image 
            src={communityImage.imageUrl} 
            alt={communityImage.description} 
            fill 
            className="object-cover"
            data-ai-hint={communityImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/50 backdrop-blur-[1px] flex items-center justify-center p-8">
          <div className="text-center text-primary-foreground max-w-2xl space-y-6">
            <Quote className="w-16 h-16 mx-auto opacity-40" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold italic leading-tight">
                "La vulnerabilidad no es ganar o perder; es tener el coraje de presentarse cuando no tienes control sobre el resultado."
            </h2>
            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-[1px] bg-white/50" />
                <p className="text-lg font-bold tracking-widest uppercase">Brené Brown</p>
                <div className="w-12 h-[1px] bg-white/50" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10">
        {testimonials.map((t, i) => (
          <Card key={i} className="border-none shadow-xl bg-card group hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className={cn("h-2 w-full", t.color)} />
            <CardContent className="p-10 space-y-8">
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-primary shadow-inner">
                  <User className="w-6 h-6" />
                </div>
                <span className={cn("text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-white shadow-sm", t.color)}>
                  {t.tag}
                </span>
              </div>
              <p className="text-2xl font-headline leading-relaxed text-primary/90 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-muted">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium uppercase tracking-tight">
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <span>Relato Anónimo Curado</span>
                </div>
                <div className="flex gap-4">
                    <button className="text-muted-foreground hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center py-20 bg-card rounded-[4rem] border-4 border-dashed border-accent/20 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold font-headline">¿Quieres compartir tu ruta?</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
                Estamos construyendo una comunidad de valientes. Pronto habilitaremos un espacio seguro y anónimo para que puedas contar tu experiencia con el miedo al error.
            </p>
            <div className="flex flex-col items-center gap-4">
                <div className="px-8 py-4 bg-accent/10 rounded-full text-accent font-bold flex items-center gap-3 animate-bounce">
                    <Sparkles className="w-5 h-5" />
                    <span>Próximamente Disponible</span>
                </div>
                <p className="text-sm text-muted-foreground">Tu historia puede ser la brújula de alguien más.</p>
            </div>
        </div>
      </section>
    </div>
  );
}
