import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactInfo } from "@/data/company";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold tracking-tight text-foreground uppercase flex items-center gap-2"><span className="w-4 h-4 bg-primary block"></span>Dane Kontaktowe</h3>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-accent border border-border p-3 h-12 w-12 flex items-center justify-center">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div className="text-muted-foreground mt-1 font-medium">
            <p className="font-bold text-zinc-900 uppercase tracking-wider">{contactInfo.name}</p>
            <p>{contactInfo.street}</p>
            <p>{contactInfo.city}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-zinc-50 border border-zinc-200 p-3 h-12 w-12 flex items-center justify-center">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-zinc-900 hover:text-primary font-bold transition-colors text-lg">
            {contactInfo.phone}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-zinc-50 border border-zinc-200 p-3 h-12 w-12 flex items-center justify-center">
            <Mail className="h-6 w-6 text-amber-500" />
          </div>
          <a href={`mailto:${contactInfo.email}`} className="text-zinc-900 hover:text-amber-500 transition-colors font-medium">
            {contactInfo.email}
          </a>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-zinc-50 border border-zinc-200 p-3 h-12 w-12 flex items-center justify-center">
            <Clock className="h-6 w-6 text-amber-500" />
          </div>
          <div className="text-zinc-600 mt-1 font-medium">
            <p><span className="font-bold text-zinc-900 w-16 inline-block">PN - PT:</span> {contactInfo.hours.weekdays}</p>
            <p><span className="font-bold text-zinc-900 w-16 inline-block">SOB:</span> {contactInfo.hours.saturday}</p>
            <p><span className="font-bold text-zinc-900 w-16 inline-block">NDZ:</span> <span className="text-amber-500">{contactInfo.hours.sunday}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
