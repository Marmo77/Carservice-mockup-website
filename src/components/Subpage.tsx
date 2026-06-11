import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/data/autoScanData";

interface SubpageProps {
  title: string;
  bannerImage?: string;
  currentServiceId?: string;
  children: React.ReactNode;
}

export default function Subpage({ title, bannerImage, currentServiceId, children }: SubpageProps) {
  const otherServices = services.filter(s => s.id !== currentServiceId).slice(0, 3);
  const bannerImg = bannerImage || "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1600&auto=format&fit=crop";

  return (
    <div className="flex-1 bg-background w-full overflow-hidden">
      {/* Banner Section */}
      <div className="relative pt-24 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full bg-zinc-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center  scale-105 blur-[2px]"
          style={{ backgroundImage: `url('${bannerImg}')` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Title Box */}
        <div className="absolute bottom-0 left-0 w-full md:w-auto bg-white pt-6 pb-6 sm:pt-8 sm:pb-8 md:pt-12 md:pb-12 pr-4 sm:pr-6 md:pr-32 pl-[max(1rem,calc(50vw-40rem+1rem))] sm:pl-[max(1.5rem,calc(50vw-40rem+1.5rem))] lg:pl-[max(2rem,calc(50vw-40rem+2rem))] text-left md:rounded-tr-[3rem]">
          <Link to="/#oferta" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-primary transition-colors mb-4 group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Powrót na stronę główną
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-foreground break-words md:whitespace-nowrap">
            {title}
          </h1>
        </div>
      </div>

      <div className="py-12 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>

        {/* Recommended Services Section */}
        {otherServices.length > 0 && currentServiceId && (
          <div className="mt-24 pt-16 border-t border-border">
            <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900 mb-8 text-center">Sprawdź również inne nasze usługi</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((s) => (
                <Link
                  key={s.id}
                  to={s.id === "sprzedaz" ? "/sprzedaz" : `/uslugi/${s.id}`}
                  className="group block p-6 bg-accent border border-border/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30"
                >
                  <h4 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-primary transition-colors">{s.title}</h4>
                  <p className="text-sm text-zinc-600 line-clamp-2 mb-4">{s.description}</p>
                  <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider">
                    <span>Przejdź</span>
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
