
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  Pie, 
  PieChart, 
  Cell,
  Line,
  LineChart,
  Tooltip as RechartsTooltip
} from "recharts";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartConfig
} from "@/components/ui/chart";
import { 
  Brain, 
  ShieldAlert, 
  Target, 
  TrendingUp, 
  Info,
  ArrowUpRight
} from "lucide-react";

// Importamos los datos desde el archivo JSON
import surveyData from "@/app/lib/survey-results.json";

const chartConfig = {
  level: {
    label: "Nivel de Miedo",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function ResultadoEncuestaPage() {
  // Mapeamos los datos del JSON para los gráficos
  const fearData = surveyData.fearByCategory.map(item => ({
    ...item,
    fill: "var(--color-level)"
  }));

  return (
    <div className="container mx-auto px-4 py-16 space-y-12 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
            <TrendingUp className="w-4 h-4" />
            <span>ANÁLISIS EN TIEMPO REAL</span>
          </div>
          <h1 className="text-5xl font-bold font-headline">Radiografía de Datos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Explora las tendencias colectivas sobre cómo el miedo al error influye en nuestra capacidad de decisión y ética social.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Gráfico de Barras - Niveles por Categoría */}
        <Card className="md:col-span-8 border-none shadow-2xl bg-white overflow-hidden">
          <CardHeader className="p-8 border-b bg-muted/10">
            <CardTitle className="text-2xl font-headline flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-accent" />
              Prevalencia del Miedo por Ámbito
            </CardTitle>
            <CardDescription>Puntuación media de ansiedad percibida al tomar decisiones críticas.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <ChartContainer config={chartConfig} className="h-[350px] w-full">
              <BarChart data={fearData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
                <XAxis 
                  dataKey="category" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 14 }}
                />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="level" 
                  radius={[8, 8, 0, 0]} 
                  barSize={60}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Métricas Rápidas */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <Card className="flex-1 bg-primary text-primary-foreground border-none shadow-xl overflow-hidden relative group">
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform">
              <Brain className="w-48 h-48" />
            </div>
            <CardContent className="p-8 space-y-4">
              <h3 className="font-bold uppercase tracking-widest text-sm opacity-80">Índice de Resiliencia</h3>
              <div className="flex items-end gap-2">
                <span className="text-6xl font-bold font-headline">{surveyData.keyMetrics.resilienceIndex}%</span>
                <ArrowUpRight className="w-8 h-8 mb-2 text-accent" />
              </div>
              <p className="text-primary-foreground/80 leading-snug">
                La mayoría de los usuarios reportan una tendencia a aprender tras el error después de un análisis consciente.
              </p>
            </CardContent>
          </Card>

          <Card className="flex-1 border-none shadow-xl bg-accent text-accent-foreground overflow-hidden relative">
            <CardContent className="p-8 space-y-4">
              <h3 className="font-bold uppercase tracking-widest text-sm opacity-80">Sesgo de Perfeccionismo</h3>
              <div className="text-6xl font-bold font-headline">{surveyData.keyMetrics.perfectionismBias}%</div>
              <p className="opacity-90 leading-snug">
                Personas que admiten que el miedo a no ser perfectos retrasa su toma de decisiones más de 48 horas.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Gráfico Circular - Impacto Emocional */}
        <Card className="md:col-span-5 border-none shadow-2xl bg-white">
          <CardHeader className="p-8">
            <CardTitle className="text-2xl font-headline">Respuesta Ante el Error</CardTitle>
            <CardDescription>Distribución de reacciones emocionales predominantes.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 flex flex-col items-center">
            <div className="h-[300px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={surveyData.emotionalImpact}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {surveyData.emotionalImpact.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-sm font-bold text-muted-foreground uppercase">Top Reacción</span>
                <span className="text-2xl font-bold font-headline">Duda</span>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 mt-6 w-full">
              {surveyData.emotionalImpact.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-medium">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gráfico de Líneas - Tendencia de Confianza */}
        <Card className="md:col-span-7 border-none shadow-2xl bg-white">
          <CardHeader className="p-8">
            <CardTitle className="text-2xl font-headline flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              Evolución de la Confianza Ética
            </CardTitle>
            <CardDescription>Incremento en la seguridad al decidir tras participar en el proyecto.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={surveyData.confidenceTrend}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <YAxis hide />
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="val" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: 'hsl(var(--primary))', strokeWidth: 2, stroke: '#fff' }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Info */}
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="bg-muted/30 p-10 rounded-[3rem] border border-muted/50 space-y-6">
          <Info className="w-12 h-12 text-primary mx-auto opacity-40" />
          <h2 className="text-3xl font-bold font-headline italic">
            "Los datos nos dicen qué sucede; la reflexión nos dice por qué importa."
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Este panel se actualiza periódicamente basándose en las respuestas registradas en el sistema de datos. Cada dato es una oportunidad para entender mejor la condición humana frente a la incertidumbre.
          </p>
        </div>
      </div>
    </div>
  );
}
