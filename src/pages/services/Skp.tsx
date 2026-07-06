import Subpage from "@/components/Subpage";
import { services, skpFeatures } from "@/data/company";
import { CheckCircle2, Plus, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function CustomAccordionItem({ title, children }: { title: React.ReactNode, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-accent border-border/50 overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-bold text-lg hover:text-primary py-6 px-6 flex items-center justify-between transition-colors"
      >
        <div>{title}</div>
        <div className="flex-shrink-0 ml-4 rounded-full p-1 bg-white border border-border">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-zinc-600 font-medium leading-relaxed text-base pt-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Skp() {
  const service = services.find(s => s.id === "skp")!;

  return (
    <Subpage title={service.title} bannerImage={service.bannerImage} currentServiceId={service.id}>
      <div className="py-8 md:py-12 space-y-20">

        {/* Sekcja 1: Zakres usług i DEKRA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lewa kolumna: Zakres usług */}
          <div>
            <h2 className="text-3xl font-black uppercase text-zinc-900 mb-3 tracking-tight">Kompleksowe przeglądy techniczne</h2>
            <p className="text-lg text-zinc-600 mb-8 font-medium">Szybko, profesjonalnie i przy filiżance dobrej kawy.</p>

            <ul className="space-y-5">
              {skpFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium text-zinc-700 text-lg leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prawa kolumna: DEKRA */}
          <div className="w-full">
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://www.dekra.pl/pl/uslugi-dla-motoryzacji" target="_blank" rel="noopener noreferrer" className="block max-w-lg mx-auto lg:mx-0">
                  <Card className="bg-green-50/50 border-green-100 overflow-hidden shadow-lg border-2 hover:border-green-300 transition-colors">
                    <CardContent className="p-0">
                      <div className="bg-white p-8 flex justify-center border-b border-green-100">
                        <img
                          src="/dekra.png"
                          alt="Partner DEKRA"
                          loading="lazy"
                          decoding="async"
                          className="max-h-[200px] w-auto object-contain drop-shadow-sm"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-black text-zinc-900 mb-3 uppercase tracking-wide">Gwarancja najwyższej jakości</h3>
                        <p className="text-zinc-600 leading-relaxed font-medium">
                          Jesteśmy oficjalnym partnerem DEKRA – światowego lidera w dziedzinie badań technicznych. Gwarantujemy rzetelność, nowoczesny sprzęt i usługi certyfikowanych specjalistów.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p className="font-bold">Zobacz więcej</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Sekcja 2: UMWELTZONE */}
        <div className="pt-16 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Lewa: Naklejki obrazek */}
            <div className="lg:col-span-2 flex justify-center">
              <img
                src="/umweltzone.png"
                alt="Naklejki ekologiczne UMWELTZONE"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[320px] h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Prawa: Opis i Accordion */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-black uppercase text-zinc-900 mb-4 tracking-tight">
                Naklejki Ekologiczne UMWELTZONE <span className="block text-primary text-2xl mt-1 tracking-tight">Wjazd do Niemiec</span>
              </h2>
              <p className="text-zinc-600 font-medium leading-relaxed mb-8 text-lg">
                Jako jedna z nielicznych stacji w regionie i jedyna w Goleniowie, posiadamy uprawnienia do wydawania oficjalnych niemieckich naklejek ekologicznych (Feinstaubplakette). Są one obowiązkowe przy wjeździe do centrów wielu niemieckich miast (strefy niskiej emisji).
              </p>

              <div className="bg-zinc-50 border border-border rounded-xl p-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4">Kliknij, aby sprawdzić rodzaje naklejek:</h3>
                <div className="w-full">
                  <CustomAccordionItem title={
                    <div className="flex items-center gap-3 cursor-pointer">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white text-sm font-black ring-4 ring-red-100">2</span>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-white text-sm font-black ring-4 ring-yellow-100">3</span>
                      <span className="ml-2">Czerwona i Żółta</span>
                    </div>
                  }>
                    Przeznaczone dla starszych pojazdów (głównie diesli). <strong>Wskazówka:</strong> Obecnie większość miast w Niemczech nie wpuszcza już pojazdów z tymi naklejkami.
                  </CustomAccordionItem>
                  <CustomAccordionItem title={
                    <div className="flex items-center gap-3 cursor-pointer">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white text-sm font-black ring-4 ring-green-100">4</span>
                      <span className="ml-2">Zielona (4)</span>
                    </div>
                  }>
                    <p className="mb-3">Uprawnia do wjazdu do <strong>wszystkich</strong> stref ekologicznych w Niemczech. Przysługuje m.in.:</p>
                    <ul className="space-y-3 list-disc pl-5">
                      <li>Pojazdom benzynowym z normą Euro 1 (lub wyższą) – zazwyczaj produkowanym od 1993 roku.</li>
                      <li>Pojazdom z silnikiem Diesla spełniającym normę Euro 4 (lub wyższą) – zazwyczaj produkowanym od 2006 roku, lub starszym wyposażonym w odpowiedni filtr cząstek stałych (DPF).</li>
                    </ul>
                  </CustomAccordionItem>
                </div>
              </div>
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
