
import { Calendar, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroData } from "@/data/autoScanData";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-32 overflow-hidden bg-background">
      {/* Background Image subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1632&auto=format&fit=crop')" }}
      ></motion.div>
      {/* Light Overlay to ensure text legibility without being too white */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-12">
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-foreground mb-6 uppercase leading-[0.95]"
          >
            {heroData.titleLine1} <br className="hidden sm:block" />
            <span className="text-primary">{heroData.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-xl md:text-2xl text-zinc-700/80 mb-10 max-w-3xl mx-auto font-medium"
          >
            {heroData.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <a href="/#kontakt" className="flex items-center gap-2">
              <Button asChild size="lg" className="w-full hover:cursor-pointer  sm:w-auto h-14 px-14 py-4 rounded text-primary-foreground font-bold uppercase tracking-widest shadow-md transition-all hover:-translate-y-1 text-sm bg-primary hover:bg-primary-hover border border-primary hover:border-primary-hover">
                <div>
                  <Calendar className="h-5 w-5" />
                  <span>Umów wizytę</span>
                </div>
              </Button>
            </a>

            <a href="/#oferta" className="flex items-center gap-2 justify-center">
              <Button asChild size="lg" variant="outline" className="w-full hover:cursor-pointer sm:w-auto h-14 px-10 py-4 rounded border border-border bg-white text-foreground hover:bg-accent hover:text-foreground font-bold uppercase tracking-widest shadow-sm transition-all hover:-translate-y-1 text-sm">
                <div>

                  <Wrench className="h-5 w-5" />
                  <span>Nasza Oferta</span>
                </div>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
