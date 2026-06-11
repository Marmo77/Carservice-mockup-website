import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="w-full flex-1 pt-32 pb-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8 text-muted-foreground hover:text-primary -ml-4">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Wróć do strony głównej
          </Link>
        </Button>
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">Regulamin</h1>
        <div className="prose prose-zinc max-w-none text-muted-foreground font-medium">
          <p className="mb-4">
            Regulamin świadczenia usług przez warsztat samochodowy AUTO-SCAN oraz zasady korzystania ze strony internetowej.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">1. Postanowienia ogólne</h2>
          <p className="mb-4">
            Usługodawcą jest AUTO-SCAN. Regulamin określa zasady, na jakich firma świadczy usługi serwisowe i blacharskie pojazdów.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900">2. Rezerwacja wizyt</h2>
          <p className="mb-4">
            Rezerwacji można dokonywać telefonicznie, mailowo lub osobiście na miejscu. Termin staje się wiążący po jego potwierdzeniu przez pracownika Warsztatu.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-zinc-900">3. Naprawy i Gwarancje</h2>
          <p className="mb-4">
            Warsztat udziela gwarancji na montowane części zgodnie z warunkami producenta części. O zakresach napraw Klient informowany jest przed ich rozpoczęciem, chyba że wymaga to pilnej interwencji uzgodnionej z Klientem telefonicznie.
          </p>
        </div>
      </div>
    </div>
  );
}
