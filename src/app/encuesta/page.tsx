
"use client";

import { Card } from "@/components/ui/card";
import { ShieldCheck, Info } from "lucide-react";

export default function EncuestaPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header de la Encuesta */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
            <ShieldCheck className="w-4 h-4" />
            <span>ESPACIO SEGURO Y ANÓNIMO</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
            Encuesta de Toma de Decisiones
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
            "Tu perspectiva nos ayuda a entender cómo la influencia del miedo al error moldea nuestras elecciones éticas."
          </p>
        </div>

        {/* Contenedor de la Encuesta (Iframe) */}
        <Card className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden bg-white">
          <div className="w-full relative" style={{ minHeight: "800px" }}>
            <iframe 
              src="https://forms.office.com/r/cTMyypLP3K?origin=lprLink" 
              width="100%" 
              height="800px" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              style={{ border: "none", maxWidth: "100%" }} 
              allowFullScreen 
              title="Encuesta Radiografía Social"
            />
          </div>
        </Card>

        {/* Nota de Privacidad al pie */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-muted/30 p-8 rounded-[2rem] border border-muted flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-full bg-background shadow-sm shrink-0">
              <Info className="w-8 h-8 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg font-headline">Nota Importante</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Esta encuesta es parte del proyecto académico <strong>Radiografía Social</strong>. Todas tus respuestas son completamente anónimas y se procesarán únicamente con fines de investigación ética y académica. No recopilamos nombres, correos electrónicos ni datos de contacto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
