import type {Metadata} from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Radiografía Social',
  description: 'Un proyecto sobre la influencia del miedo al error en la toma de decisiones.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Alegreya:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-12 border-t bg-card/30 backdrop-blur-sm text-center">
          <div className="container mx-auto px-4">
            <p className="font-headline text-lg font-semibold text-primary mb-2">Radiografía Social</p>
            <p className="text-sm text-muted-foreground">Grupo 4</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
