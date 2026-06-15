
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { CheckCircle2, Quote, Brain, Heart, Zap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PerspectivasPage() {
  const growthImage = PlaceHolderImages.find(img => img.id === 'strategy-growth');

  const strategies = [
    {
      title: "Mentalidad de Crecimiento",
      description: "Ver los errores como oportunidades para aprender en lugar de fracasos personales.",
      icon: Brain,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Autocompasión Radital",
      description: "Tratarse con la misma amabilidad que tratarías a un ser querido que se ha equivocado.",
      icon: Heart,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "La Regla del 10-10-10",
      description: "¿Cómo te sentirás con esta decisión en 10 minutos? ¿10 meses? ¿10 años?",
      icon: Zap,
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const quotes = [
    { text: "No he fracasado. Simplemente he encontrado 10.000 formas que no funcionan.", author: "Thomas Edison" },
    { text: "El único error real es aquel del que no aprendemos nada.", author: "Henry Ford" },
    { text: "Tu vida se expande o se contrae en proporción a tu coraje.", author: "Anaïs Nin" }
  ];

  return (
    <div className="container mx-auto px-4 py-20 space-y-24">
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold font-headline">Sabiduría para el Camino</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Herramientas prácticas y pensamientos inspiradores para reencuadrar tu relación con el error y transformar el miedo en acción.
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
          {growthImage && (
            <Image 
              src={growthImage.imageUrl} 
              alt={growthImage.description} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              data-ai-hint={growthImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-2xl font-bold font-headline mb-2">Crecer entre grietas</h3>
            <p className="opacity-90">La resiliencia surge de la imperfección.</p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold font-headline">Tres Pilares de la Resiliencia</h2>
            <p className="text-muted-foreground">Pequeños cambios en la perspectiva pueden desbloquear grandes decisiones.</p>
          </div>
          <div className="space-y-6">
            {strategies.map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className={cn("p-4 rounded-2xl shrink-0 transition-transform group-hover:rotate-6", s.color)}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 font-headline">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-card rounded-[4rem] p-12 md:p-24 shadow-2xl border border-accent/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
            <Quote className="w-64 h-64" />
        </div>
        <h2 className="text-4xl font-bold font-headline mb-16 text-center">Inspiración Seleccionada</h2>
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {quotes.map((q, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6 p-6 rounded-3xl hover:bg-white/50 transition-colors">
              <Quote className="w-10 h-10 text-accent/30" />
              <p className="text-2xl font-headline italic leading-relaxed text-primary">"{q.text}"</p>
              <div className="w-12 h-1 bg-accent/40 rounded-full" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">— {q.author}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold font-headline">Guía de Acción</h2>
            <p className="text-muted-foreground">Pasos concretos para aplicar hoy mismo.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Identifica el peor escenario posible (raramente es irreversible).",
            "Celebra el acto de decidir, independientemente del resultado.",
            "Busca mentores, no jueces, para contrastar tus dudas.",
            "Acepta que la incertidumbre es el hábitat natural de la libertad.",
            "Recuerda que no decidir es ceder tu poder a las circunstancias.",
            "Diferencia entre precaución prudente y miedo paralizante."
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md border border-muted hover:border-accent transition-colors group">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <span className="text-primary font-medium leading-snug">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center pt-10">
        <Card className="bg-primary text-primary-foreground p-12 rounded-[3rem] shadow-xl">
            <CardContent className="space-y-8">
                <Sparkles className="w-12 h-12 mx-auto" />
                <h3 className="text-3xl font-bold font-headline">"Tu proyecto de vida no es un examen que aprobar, sino una historia que escribir."</h3>
                <p className="text-xl opacity-80">Radiografía Social está aquí para recordarte que cada borrón es parte de la obra maestra.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
