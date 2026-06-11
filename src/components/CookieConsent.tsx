import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 p-4 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm flex-1 font-medium">
          Nasza strona internetowa używa plików cookies w celach funkcjonalnych, analitycznych i marketingowych.
          Korzystając z naszej strony, wyrażasz zgodę na używanie plików cookies.
          Możesz zarządzać plikami cookies w ustawieniach przeglądarki.{" "}
          <Link to="/polityka-prywatnosci" className="text-primary hover:text-primary-hover underline whitespace-nowrap">
            Czytaj więcej
          </Link>
        </p>
        <div className="flex shrink-0">
          <Button
            onClick={acceptCookies}
            className="bg-foreground hover:bg-zinc-800 text-primary-foreground px-8 py-2 rounded-sm font-bold uppercase tracking-wider h-auto text-xs"
          >
            Akceptuję
          </Button>
        </div>
      </div>
    </div>
  );
}
