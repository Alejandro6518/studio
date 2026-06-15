export default function ResultadoEncuestaPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold font-headline">Tus Resultados</h1>
          <p className="text-xl text-muted-foreground">
            Análisis detallado de tu perfil de toma de decisiones y la influencia del miedo al error.
          </p>
        </div>
        <div className="grid gap-8">
          <div className="p-12 border-2 border-dashed rounded-[2rem] bg-card/50 text-center">
            <p className="text-muted-foreground italic">Los resultados aparecerán aquí una vez completada la encuesta.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
