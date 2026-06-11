import Subpage from "@/components/Subpage";
import { services, mechanikaServices, mechanikaUdogodnienia, mechanikaCzesci } from "@/data/autoScanData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Wrench, Car, ShieldAlert, Snowflake, Wind, CircleDot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  Cpu, Wrench, Car, ShieldAlert, Snowflake, Wind
};

export default function Mechanika() {
  const service = services.find(s => s.id === "serwis")!;

  return (
    <Subpage title={service.title} bannerImage={service.bannerImage} currentServiceId={service.id}>
      <div className="py-8 md:py-12 space-y-20">

        {/* Sekcja 1: Usługi (Bento Grid) */}
        <div>
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-black uppercase text-zinc-900 mb-3 tracking-tight">Kompleksowy serwis Twojego samochodu</h2>
            <p className="text-lg text-zinc-600 font-medium">Od diagnostyki po naprawy główne. Sprawdź, co możemy dla Ciebie zrobić.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {mechanikaServices.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <Card key={item.id} className={`${item.className || ''} bg-zinc-50 border-border hover:border-zinc-500 hover:shadow-md transition-all`}>
                  <CardHeader className="pb-2">
                    {Icon && <Icon className="h-8 w-8 text-primary mb-2" />}
                    <CardTitle className="text-xl font-bold uppercase tracking-tight">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.items ? (
                      <ul className="space-y-2 text-zinc-600 font-medium">
                        {item.items.map((listItem: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span> {listItem}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-zinc-600 font-medium">{item.description}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}

            {/* Kafel 7 - Wyróżniony (Serwis Ogumienia) */}
            <Card className="md:col-span-2 bg-primary/5 border-primary/20 hover:border-zinc-500 hover:shadow-md transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <CircleDot className="w-32 h-32" />
              </div>
              <CardHeader className="pb-2 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <CircleDot className="h-8 w-8 text-primary" />
                  <Badge variant="secondary" className="bg-white text-primary border-primary/20 font-bold uppercase tracking-wide">Gratis</Badge>
                </div>
                <CardTitle className="text-xl font-bold uppercase tracking-tight">Serwis Ogumienia</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-zinc-600 font-medium mb-1">Wymiana, wyważanie, naprawa opon.</p>
                <p className="text-primary font-bold">Uwaga: Przechowujemy opony gratis!</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sekcja 2: Udogodnienia dla Klienta */}
        <div>
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-black uppercase text-zinc-900 tracking-tight">Udogodnienia dla Ciebie</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mechanikaUdogodnienia.map((item) => (
              <Card key={item.id} className="border-border hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold flex items-center gap-3 space-y-0">
                      <span className="text-2xl pt-1">{item.icon}</span> {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-600 leading-relaxed font-medium">{item.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Pomoc drogowa */}
          <div className="flex justify-center mt-10">
            <Link to="/uslugi/autoholowanie" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-primary-hover hover:underline underline-offset-4 transition-colors p-3">
              Potrzebujesz asysty na drodze? Zadzwoń po pomoc drogową
            </Link>
          </div>
        </div>

        {/* Sekcja 3: Części Zamienne i Nasi Partnerzy */}
        <div className="pt-10 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

            {/* Lewa: Części */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black uppercase text-zinc-900 mb-4 tracking-tight">Części zamienne dopasowane do Twoich potrzeb</h2>
              <p className="text-lg text-zinc-600 mb-8 font-medium">
                Dzięki współpracy z siecią <strong className="text-zinc-900">Intercars</strong>, oferujemy dostęp do szerokiego asortymentu części zamiennych. To Ty decydujesz, co montujemy:
              </p>

              <div className="space-y-4 mb-8">
                {mechanikaCzesci.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${item.color} shrink-0 mt-1`}></span>
                    <div>
                      <h4 className="font-bold text-zinc-900 leading-tight">{item.title}</h4>
                      <p className="text-zinc-600 font-medium">
                        {item.description}
                        {item.warning && (
                          <> (<strong className="text-red-500">Uwaga:</strong> {item.warning})</>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-50 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="font-medium text-zinc-700">Wycena opiera się na platformie <strong className="text-zinc-900">Motointegrator.pl</strong>, jednak ceny w naszym serwisie są często znacznie niższe!</p>
              </div>
            </div>

            {/* Prawa: Oponeo */}
            <div className="lg:col-span-1">
              <a href="https://www.oponeo.pl" target="_blank" rel="noopener noreferrer" className="block w-full max-w-sm mx-auto group">
                <Card className="border-2 border-transparent hover:border-blue-500/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white text-center">
                  <CardHeader className="bg-zinc-50 border-b border-border pb-4">
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-zinc-500">Nasz Partner Oponiarski</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 md:p-12">
                    {/* Placeholder loga Oponeo */}
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-black text-[#0066cc] tracking-tighter flex items-center gap-1 group-hover:scale-105 transition-transform duration-300"><CircleDot className="h-8 w-8" /> OPONEO</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>

          </div>
        </div>

        <div className="pt-8 flex justify-center">
          <Link to="/#kontakt">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover cursor-pointer text-primary-foreground font-bold uppercase tracking-widest shadow-md transition-all hover:-translate-y-1 h-14 md:h-16 px-12 md:px-16 text-base md:text-lg">
              <span>Umów wizytę w tej sprawie</span>
            </Button>
          </Link>
        </div>
      </div>
    </Subpage>
  );
}
