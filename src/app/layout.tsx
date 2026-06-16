import type {Metadata} from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import { Alegreya, Inter } from 'next/font/google';

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-headline',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

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
    <html lang="es" className={`${alegreya.variable} ${inter.variable}`}>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background text-foreground">
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
