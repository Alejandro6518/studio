
"use client";

import { useState } from "react";
import { generateDilemma, type DilemmaGeneratorOutput } from "@/ai/flows/dilemma-generator";
import { reflectOnDecision, type ReflectionAssistantOutput } from "@/ai/flows/reflection-assistant-flow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles, MessageCircle, RefreshCw, ChevronRight, BrainCircuit, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExploradorPage() {
  const [loading, setLoading] = useState(false);
  const [dilemma, setDilemma] = useState<DilemmaGeneratorOutput | null>(null);
  const [userDecision, setUserDecision] = useState("");
  const [reflectionLoading, setReflectionLoading] = useState(false);
  const [reflection, setReflection] = useState<ReflectionAssistantOutput | null>(null);

  async function handleGenerate() {
    setLoading(true);
    setReflection(null);
    setUserDecision("");
    try {
      const result = await generateDilemma({
        userContext: "Alguien buscando reflexionar sobre la toma de decisiones y el miedo al error."
      });
      setDilemma(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleReflect() {
    if (!dilemma || !userDecision) return;
    setReflectionLoading(true);
    try {
      const result = await reflectOnDecision({
        dilemmaDescription: dilemma.dilemma,
        userDecision: userDecision,
      });
      setReflection(result);
      // Scroll to reflection
      setTimeout(() => {
        document.getElementById('reflection-results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error(error);
    } finally {
      setReflectionLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl min-h-screen">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-bold font-headline">Explorador de Dilemas</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Enfréntate a situaciones hipotéticas diseñadas para retar tu intuición y revelar cómo el miedo al error influye en tus elecciones.
        </p>
      </div>

      {!dilemma && (
        <Card className="border-2 border-dashed bg-card/50 hover:bg-card transition-colors duration-300 cursor-pointer" onClick={handleGenerate}>
          <CardContent className="flex flex-col items-center justify-center py-24 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent animate-pulse">
              <BrainCircuit className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-headline">¿Estás listo para el desafío?</h2>
              <p className="text-muted-foreground">Presiona el botón para que la IA genere un dilema único para ti.</p>
            </div>
            <Button disabled={loading} size="lg" className="rounded-full px-12 py-8 text-lg font-bold shadow-xl">
              {loading ? <Loader2 className="w-5 h-5 mr-3 animate-spin" /> : <RefreshCw className="w-5 h-5 mr-3" />}
              {loading ? "Preparando escenario..." : "Generar Dilema con IA"}
            </Button>
          </CardContent>
        </Card>
      )}

      {dilemma && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Card className="border-none shadow-2xl overflow-hidden bg-card/90 backdrop-blur">
            <div className="h-3 bg-gradient-to-r from-primary to-accent w-full" />
            <CardHeader className="p-8 md:p-12 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-4xl font-headline text-primary mb-2">{dilemma.title}</CardTitle>
              <CardDescription className="text-lg italic leading-relaxed text-muted-foreground pt-4">
                "{dilemma.dilemma}"
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-12 bg-white/50 space-y-8">
              <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Tu Decisión
                </label>
                <Textarea 
                  placeholder="Describe qué harías en esta situación y por qué. No hay respuestas incorrectas..." 
                  className="min-h-[150px] text-lg p-6 bg-white border-2 border-muted focus-visible:ring-accent rounded-2xl shadow-inner"
                  value={userDecision}
                  onChange={(e) => setUserDecision(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="p-8 border-t bg-muted/20 flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button variant="ghost" onClick={handleGenerate} disabled={loading} className="text-muted-foreground hover:text-primary transition-colors">
                <RefreshCw className="w-4 h-4 mr-2" />
                Dilema diferente
              </Button>
              <Button onClick={handleReflect} disabled={!userDecision || reflectionLoading} className="rounded-full px-10 py-7 text-lg font-bold shadow-lg">
                {reflectionLoading ? <Loader2 className="w-5 h-5 mr-3 animate-spin" /> : <MessageCircle className="w-5 h-5 mr-3" />}
                Analizar con Radiografía Social
              </Button>
            </CardFooter>
          </Card>

          {reflection && (
            <div id="reflection-results" className="space-y-8 animate-in fade-in slide-in-from-top-8 duration-1000">
              <div className="flex items-center gap-4 px-6 py-3 bg-accent/20 text-accent rounded-full w-fit mx-auto mb-6 font-bold text-lg shadow-sm">
                <Sparkles className="w-5 h-5" />
                <span>Análisis de la Ruta</span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-none shadow-xl bg-card border-l-8 border-accent">
                  <CardHeader>
                    <CardTitle className="text-2xl font-headline flex items-center gap-3">
                      <HelpCircle className="w-6 h-6 text-accent" />
                      Espejo de Reflexión
                    </CardTitle>
                    <CardDescription>Preguntas para profundizar en tu proceso</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {reflection.reflectiveQuestions.map((q, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-muted/30 group hover:bg-muted/50 transition-colors">
                        <ChevronRight className="w-6 h-6 shrink-0 text-accent group-hover:translate-x-2 transition-transform" />
                        <p className="text-lg leading-relaxed">{q}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-none shadow-xl bg-primary text-primary-foreground relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles className="w-32 h-32" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-headline flex items-center gap-3">
                      <BrainCircuit className="w-6 h-6" />
                      Perspectiva IA
                    </CardTitle>
                    <CardDescription className="text-primary-foreground/70">Observaciones sobre tu elección</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {reflection.insightfulComments.map((c, i) => (
                      <p key={i} className="text-lg leading-relaxed bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                        {c}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center pt-12">
                <Button variant="outline" size="lg" className="rounded-full px-12 py-8 border-2" onClick={() => {
                  setDilemma(null);
                  setReflection(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                  Explorar otra situación
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
