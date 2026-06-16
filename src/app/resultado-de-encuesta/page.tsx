
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
  Tooltip as RechartsTooltip,
  Area,
  AreaChart
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
  TrendingUp, 
  Info,
  ArrowUpRight,
  Users,
  Lightbulb,
  Clock
} from "lucide-react";

import surveyData from "@/app/lib/survey-results.json";

const chartConfig = {
  level: {
    label: "Porcentaje (%)",
    color: "hsl(var(--primary))",
  },
  count: {
    label: "Respuestas",
    color: "hsl(var(--accent))",
  }
} satisfies ChartConfig;

export default function ResultadoEncuestaPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-12 max-w-7xl animate-in fade-in duration-700">
      {/* Header con Branding de Grupo 4 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 border-b pb-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide">
            <TrendingUp className="w-4 h-4" />
            <span>RESULTADOS REALES - GRUPO 4</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-headline">Radiografía de Datos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Análisis de las 63 respuestas obtenidas sobre el impacto del miedo al error en la toma de decisiones.
          </p>
        </div>
        <Card className="bg-primary/5 border-primary/20 p-6 flex items-center gap-6 rounded-3xl">
          <div className="p-3 bg-primary rounded-2xl text-white">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Muestra Analizada</p>
            <p className="text-4xl font-bold font-headline">{surveyData.totalResponses} pers.</p>
          </div>
        </Card>
      </div>

      {/* Grid de Métricas Principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-primary text-primary-foreground border-none shadow-xl overflow-hidden relative group p-8 rounded-[2.5rem]">
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <Brain className="w-32 h-32" />
          </div>
          <h3 className="font-bold uppercase tracking-widest text-xs opacity-80 mb-4">Visión Positiva (Futuro)</h3>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-6xl font-bold font-headline">{surveyData.keyMetrics.resilienceIndex}%</span>
            <ArrowUpRight className="w-8 h-8 mb-2 text-accent" />
          </div>
          <p className="text-primary-foreground/80 leading-snug">Encuestados que sienten esperanza o motivación.</p>
        </Card>

        <Card className="bg-accent text-accent-foreground border-none shadow-xl p-8 rounded-[2.5rem]">
          <h3 className="font-bold uppercase tracking-widest text-xs opacity-80 mb-4">Presión Social por Edad</h3>
          <div className="text-6xl font-bold font-headline mb-4">{surveyData.keyMetrics.perfectionismBias}%</div>
          <p className="opacity-90 leading-snug">Sienten presión alta o mucha por 'resolver' su vida pronto.</p>
        </Card>

        <Card className="bg-card border-2 border-muted p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold uppercase tracking-widest text-xs text-muted-foreground mb-2">Estado de Decisión</h3>
          <p className="text-4xl font-bold font-headline text-primary">{surveyData.keyMetrics.averageDecisionTime}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Gráfico de Barras - Ámbitos */}
        <Card className="lg:col-span-8 border-none shadow-2xl bg-white rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-10 border-b bg-muted/10">
            <CardTitle className="text-3xl font-headline flex items-center gap-3">
              <ShieldAlert className="w-8 h-8 text-accent" />
              Prevalencia del Miedo por Ámbito
            </CardTitle>
            <CardDescription className="text-lg">Frecuencia de mención de miedos específicos en la muestra.</CardDescription>
          </CardHeader>
          <CardContent className="p-10">
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <BarChart data={surveyData.fearByCategory}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.2} />
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
                  fill="hsl(var(--primary))"
                  radius={[12, 12, 0, 0]} 
                  barSize={80}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Hallazgos Clave */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="h-full border-none shadow-2xl bg-muted/20 rounded-[2.5rem] p-10">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold font-headline">Análisis Cualitativo</h3>
            </div>
            <div className="space-y-6">
              {surveyData.keyInsights.map((insight, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Distribución de Presión por Edad */}
        <Card className="lg:col-span-5 border-none shadow-2xl bg-white rounded-[2.5rem]">
          <CardHeader className="p-10">
            <CardTitle className="text-3xl font-headline">Presión por la Edad</CardTitle>
            <CardDescription className="text-lg">¿Cuánto sientes que debes tener resuelto hoy?</CardDescription>
          </CardHeader>
          <CardContent className="p-10">
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <AreaChart data={surveyData.ageDistribution}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="range" axisLine={false} tickLine={false} />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area 
                  type="monotone" 
                  dataKey="count" 
                  stroke="hsl(var(--accent))" 
                  fill="hsl(var(--accent))" 
                  fillOpacity={0.2} 
                  strokeWidth={4}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Respuesta Emocional */}
        <Card className="lg:col-span-7 border-none shadow-2xl bg-white rounded-[2.5rem]">
          <CardHeader className="p-10">
            <CardTitle className="text-3xl font-headline">Impacto Emocional</CardTitle>
            <CardDescription className="text-lg">Emoción predominante al pensar en el futuro.</CardDescription>
          </CardHeader>
          <CardContent className="p-10 flex flex-col md:flex-row items-center gap-10">
            <div className="h-[300px] w-full max-w-[300px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={surveyData.emotionalImpact}
                    innerRadius={80}
                    outerRadius={120}
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
                <span className="text-xs font-bold text-muted-foreground uppercase">Principal</span>
                <span className="text-xl font-bold font-headline text-primary">Ansiedad</span>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full">
              {surveyData.emotionalImpact.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border bg-muted/5">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="font-bold text-primary">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer del Grupo 4 */}
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="bg-primary/5 p-12 rounded-[3.5rem] border border-primary/10 space-y-6">
          <Info className="w-12 h-12 text-primary mx-auto opacity-40" />
          <h2 className="text-3xl font-bold font-headline italic text-primary">
            "Este estudio revela que el miedo al error no es solo una barrera individual, sino una presión social colectiva."
          </h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proyecto Realizado por</p>
            <p className="text-2xl font-bold font-headline">Grupo 4 - Ética</p>
          </div>
        </div>
      </div>
    </div>
  );
}
