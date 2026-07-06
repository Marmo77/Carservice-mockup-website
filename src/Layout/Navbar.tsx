import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="bg-foreground text-zinc-300 py-2.5 text-sm hidden md:flex items-center">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-primary-foreground font-medium transition-colors">
                {contactInfo.phone}
              </a>
            </span>
            <span className="hidden lg:block text-zinc-400">
              {contactInfo.street}, {contactInfo.city}
            </span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400 font-medium">
            <span>PN-PT: <span className="text-white">{contactInfo.hours.weekdays}</span></span>
            <span>SOB: <span className="text-white">{contactInfo.hours.saturday}</span></span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 py-2">
                <div className="flex flex-col">
                  <span className="font-black text-3xl tracking-tighter text-foreground uppercase leading-none">
                    {contactInfo.name.split(" ")[0]}<span className="text-primary">{contactInfo.name.split(" ")[1]}</span>
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1">
                    Serwis Samochodowy
                  </span>
                </div>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center space-x-6 lg:space-x-8">
                <Link to="/" className={`hidden lg:block font-semibold tracking-wide uppercase text-[13px] lg:text-sm transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-zinc-500 hover:text-foreground'}`}>
                  Strona główna
                </Link>
                <Link to="/sprzedaz" className={`font-semibold tracking-wide uppercase text-[13px] lg:text-sm transition-colors ${location.pathname === '/sprzedaz' ? 'text-primary' : 'text-zinc-500 hover:text-zinc-900'}`}>
                  Sprzedaż samochodów
                </Link>
                <Link to="/#oferta" className="font-semibold tracking-wide uppercase text-[13px] lg:text-sm transition-colors text-zinc-500 hover:text-zinc-900">
                  Oferta Serwisu
                </Link>

                <div className="relative group">
                  <button className={`font-semibold tracking-wide uppercase text-[13px] lg:text-sm transition-colors flex items-center gap-1 h-full py-8 ${location.pathname.includes('/uslugi/') && !location.pathname.includes('sprzedaz') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                    Serwis <ChevronDown className="h-4 w-4 relative top-[1px]" />
                  </button>
                  <div className="absolute top-20 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background border border-border shadow-xl rounded-md w-64 flex flex-col p-2">
                      <Link to="/#kontakt" className="px-4 py-3 text-sm font-bold text-foreground uppercase hover:bg-accent hover:text-primary rounded-sm flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Umów wizytę
                      </Link>
                      <Link to="/uslugi/serwis" className={`px-4 py-3 text-sm font-medium rounded-sm transition-colors ${location.pathname === '/uslugi/serwis' ? 'bg-accent text-primary' : 'text-muted-foreground hover:bg-accent hover:text-primary'}`}>Serwis mechaniczny</Link>
                      <Link to="/uslugi/skp" className={`px-4 py-3 text-sm font-medium rounded-sm transition-colors ${location.pathname === '/uslugi/skp' ? 'bg-accent text-primary' : 'text-muted-foreground hover:bg-accent hover:text-primary'}`}>Stacja Kontroli Pojazdów</Link>
                      <Link to="/uslugi/autoholowanie" className={`px-4 py-3 text-sm font-medium rounded-sm transition-colors ${location.pathname === '/uslugi/autoholowanie' ? 'bg-accent text-primary' : 'text-muted-foreground hover:bg-accent hover:text-primary'}`}>Autoholowanie</Link>
                      <Link to="/uslugi/chiptuning" className={`px-4 py-3 text-sm font-medium rounded-sm transition-colors ${location.pathname === '/uslugi/chiptuning' ? 'bg-accent text-primary' : 'text-muted-foreground hover:bg-accent hover:text-primary'}`}>Chiptuning</Link>
                    </div>
                  </div>
                </div>

                <Link to="/#kontakt" className="font-semibold tracking-wide uppercase text-[13px] lg:text-sm transition-colors text-zinc-500 hover:text-zinc-900">
                  Kontakt
                </Link>
              </nav>
              <div className="flex items-center gap-4 lg:gap-6 border-l border-zinc-200 pl-4 lg:pl-6">
                <Link to="/#kontakt" className="flex flex-col w-full h-full relative">
                  <Button className="group cursor-pointer relative bg-primary hover:bg-primary-hover text-white rounded-md p-0 font-bold uppercase tracking-wide border border-transparent shadow-sm overflow-hidden h-10 w-40">
                    <span className="flex items-center justify-center h-full w-full absolute inset-0 transition-transform duration-300 transform group-hover:-translate-y-full">Umów wizytę</span>
                    <span className="flex items-center justify-center h-full w-full absolute inset-0 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 text-white font-bold">{contactInfo.phone}</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <Button asChild size="sm" className="bg-primary hover:bg-primary-hover text-white rounded-md font-bold uppercase shadow-sm">
                <Link to="/#kontakt">Rezerwacja</Link>
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-zinc-900 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-zinc-200 bg-white shadow-xl absolute w-full inset-x-0">
            <div className="space-y-1 px-4 pb-4 pt-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-semibold text-zinc-600 hover:bg-accent hover:text-primary uppercase tracking-wide border-b border-border">
                Strona główna
              </Link>
              <Link to="/sprzedaz" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-semibold text-zinc-600 hover:bg-accent hover:text-primary uppercase tracking-wide border-b border-zinc-100">
                Sprzedaż samochodów
              </Link>
              <Link to="/#oferta" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-amber-500 uppercase tracking-wide border-b border-zinc-100">
                Oferta Serwisu
              </Link>
              <div className="px-3 py-3 border-b border-zinc-100">
                <p className="text-sm font-bold text-zinc-900 uppercase tracking-wide mb-2">Serwis</p>
                <div className="flex flex-col gap-2 pl-4">
                  <Link to="/#kontakt" onClick={() => setIsOpen(false)} className="text-amber-500 font-semibold text-sm">Umów wizytę</Link>
                  <Link to="/uslugi/serwis" onClick={() => setIsOpen(false)} className="text-zinc-600 font-medium text-sm">Serwis mechaniczny</Link>
                  <Link to="/uslugi/skp" onClick={() => setIsOpen(false)} className="text-zinc-600 font-medium text-sm">Stacja Kontroli Pojazdów</Link>
                  <Link to="/uslugi/autoholowanie" onClick={() => setIsOpen(false)} className="text-zinc-600 font-medium text-sm">Autoholowanie</Link>
                  <Link to="/uslugi/chiptuning" onClick={() => setIsOpen(false)} className="text-zinc-600 font-medium text-sm">Chiptuning</Link>
                </div>
              </div>
              <Link to="/#kontakt" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-amber-500 uppercase tracking-wide border-b border-zinc-100">
                Kontakt
              </Link>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="block px-3 py-3 mt-2 text-base font-bold text-zinc-900 bg-zinc-50 rounded-md text-center"
              >
                Zadzwoń: <span className="text-amber-500">{contactInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
