import { trustBadges } from "@/data/autoScanData";
import { CheckCircle, ShieldCheck, ThumbsUp, Zap } from "lucide-react";

export default function TrustBadges() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "CheckCircle": return <CheckCircle className="h-6 w-6 text-primary" />;
      case "ShieldCheck": return <ShieldCheck className="h-6 w-6 text-primary" />;
      case "ThumbsUp": return <ThumbsUp className="h-6 w-6 text-primary" />;
      case "Zap": return <Zap className="h-6 w-6 text-primary" />;
      default: return <CheckCircle className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <div className="bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustBadges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center justify-center gap-3 bg-accent rounded-md p-5 border border-border shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex-shrink-0">
                {getIcon(badge.icon)}
              </div>
              <span className="font-bold text-foreground uppercase tracking-wider text-sm">{badge.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
