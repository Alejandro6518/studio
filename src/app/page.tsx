
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Footprints, ShieldCheck, Info, Lock } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-reflection');

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-30"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 font-headline">
            ¿Alguna vez has sentido miedo de tomar decisiones importantes por temor a equivocarte?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Explora cómo la influencia del miedo al error moldea nuestras vidas y descubre el camino hacia una toma de decisiones más consciente y valiente.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" className="rounded-full px-10 py-7 text-xl group shadow-lg" asChild>
              <Link href="/encuesta">
                Comenzar Encuesta
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-xl border-2 hover:bg-muted/50" asChild>
              <Link href="#justificacion">Nuestra Propuesta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Justification Section */}
      <section id="justificacion" className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>JUSTIFICACIÓN DEL PROYECTO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight text-primary">Por qué el miedo nos detiene</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              La toma de decisiones es una parte fundamental de la vida de todas las personas. Sin embargo, el miedo a cometer errores puede generar inseguridad, ansiedad o incluso impedir que las personas actúen y persigan sus metas.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Este tema es relevante porque permite reflexionar sobre cómo enfrentamos la incertidumbre, asumimos responsabilidades y construimos nuestro proyecto de vida. Además, evidencia cómo factores sociales, familiares, culturales o personales influyen en nuestras decisiones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="border-none shadow-xl bg-card/80 backdrop-blur hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-headline text-primary">Confianza Interna</h3>
                  <p className="text-muted-foreground leading-relaxed">Identificar los bloqueos para fortalecer la seguridad al elegir nuestro camino.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl bg-card/80 backdrop-blur hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-accent/10 text-accent">
                  <Footprints className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 font-headline text-primary">Crecimiento Vital</h3>
                  <p className="text-muted-foreground leading-relaxed">Entender que cada error es una pieza clave en la construcción de nuestra identidad.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Banner Section */}
      <section className="bg-primary text-primary-foreground py-24 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Lock className="w-64 h-64 rotate-12" />
        </div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
              <Info className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-10 font-headline leading-relaxed">
            “Este es un espacio seguro donde puedes compartir tus pensamientos sobre temas éticos de manera anónima. Tus respuestas serán analizadas con fines académicos”.
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-1 bg-accent rounded-full opacity-50" />
            <p className="text-lg opacity-90 max-w-2xl">
              Valoramos tu privacidad y honestidad. Cada respuesta contribuye a una mejor comprensión de la ética en la toma de decisiones.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" className="rounded-full px-12 py-8 text-xl font-bold shadow-xl hover:scale-105 transition-transform" asChild>
                <Link href="/encuesta">Ir a la Encuesta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
