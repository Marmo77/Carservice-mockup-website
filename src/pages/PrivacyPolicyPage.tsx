import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { privacyData } from "@/data/companyPrivacy";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full flex-1 pt-6 pb-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Button
          asChild
          variant="ghost"
          className="mb-8 text-muted-foreground hover:text-primary -ml-4"
        >
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Wróć do strony głównej
          </Link>
        </Button>
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">
          Polityka Prywatności
        </h1>
        <div className="prose prose-zinc max-w-none text-muted-foreground font-medium">
          <p className="mb-4">
            {privacyData.companyInfo.map((line, idx) => (
              <span key={idx}>
                {idx === 0 ? <strong>{line}</strong> : line}
                <br />
              </span>
            ))}
          </p>

          {privacyData.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                {section.title}
              </h2>

              {section.content?.map((text, i) => (
                <p key={`c-${i}`} className="mb-4">
                  {text}
                </p>
              ))}

              {section.showCompanyInfo && (
                <p className="mb-4">
                  {privacyData.companyInfo.map((line, i) => (
                    <span key={i}>
                      {i === 0 ? <strong>{line}</strong> : line}
                      <br />
                    </span>
                  ))}
                </p>
              )}

              {section.list && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={`l-${i}`}>{item}</li>
                  ))}
                </ul>
              )}

              {section.postContent?.map((text, i) => (
                <p key={`pc-${i}`} className="mb-4">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
