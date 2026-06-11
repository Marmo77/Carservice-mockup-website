import { Phone, MapPin, Mail } from "lucide-react";
import BookingForm from "./Booking/BookingForm";
import { contactInfo, bookingData } from "@/data/autoScanData";

export default function BookingSection() {
  const checkIsOpen = () => {
    const now = new Date();
    // basic approximation. 
    const day = now.getDay();
    const hour = now.getHours();

    // Mon-Fri: 8:00 - 17:00
    if (day >= 1 && day <= 5) return hour >= 8 && hour < 17;
    // Sat: 8:00 - 14:00
    if (day === 6) return hour >= 8 && hour < 14;
    // Sun: Closed
    return false;
  };

  const isOpen = checkIsOpen();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">
      {/* Left Column: Quick Info */}
      <div className="lg:col-span-5 flex flex-col space-y-10 lg:pr-12 relative">
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-zinc-200"></div>

        <div>
          <h3 className="text-4xl md:text-[2.5rem] font-black tracking-tighter text-foreground uppercase flex items-center gap-3 leading-none">
            <span className="w-5 h-5 bg-primary block"></span>{bookingData.contactTitle}
          </h3>
        </div>

        <div className="space-y-6 text-muted-foreground font-medium">
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
            <div>
              <p className="uppercase tracking-widest text-sm text-zinc-900">{contactInfo.street}</p>
              <p className="uppercase tracking-widest text-sm text-zinc-900 mb-2">{contactInfo.city}</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${contactInfo.name}, ${contactInfo.street}, ${contactInfo.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary-hover hover:text-primary transition-colors"
              >
                Nawiguj do nas
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-3">Serwis</h4>
            <div className="space-y-2">
              {contactInfo.phones.serwis.map((phone, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Phone className="h-4 w-4 text-primary fill-primary shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="uppercase tracking-widest text-sm hover:text-amber-500 transition-colors">
                    {phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-4 mt-2">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <a href={`mailto:${contactInfo.emails.serwis}`} className="block uppercase tracking-widest text-sm hover:text-amber-500 transition-colors">
                  {contactInfo.emails.serwis}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-3">Sprzedaż Samochodów</h4>
            <div className="space-y-2">
              {contactInfo.phones.sprzedaz.map((phone, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Phone className="h-4 w-4 text-amber-500 fill-primary shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="uppercase tracking-widest text-sm hover:text-amber-500 transition-colors">
                    {phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-4 mt-2">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <a href={`mailto:${contactInfo.emails.sprzedaz}`} className="block uppercase tracking-widest text-sm hover:text-amber-500 transition-colors">
                  {contactInfo.emails.sprzedaz}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-3 h-3 rounded-full shadow-sm ${isOpen ? 'bg-green-500 shadow-green-500/50' : 'bg-red-500 shadow-red-500/50'}`}></div>
            <span className="font-bold uppercase tracking-wider text-sm text-zinc-900">
              {isOpen ? bookingData.openText : bookingData.closedText}
            </span>
          </div>
          <div className="space-y-3 text-sm text-zinc-600 font-medium">
            <p className="flex justify-between max-w-[240px]"><span>PN - PT</span> <span className="font-bold text-zinc-900">{contactInfo.hours.weekdays}</span></p>
            <p className="flex justify-between max-w-[240px]"><span>SOB</span> <span className="font-bold text-zinc-900">{contactInfo.hours.saturday}</span></p>
            <p className="flex justify-between max-w-[240px]"><span>NDZ</span> <span className="font-bold text-zinc-400">{contactInfo.hours.sunday}</span></p>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="lg:col-span-7 lg:pl-4">
        <div className="mb-8">
          <h2 className="text-3xl font-black tracking-tighter text-zinc-900 uppercase">{bookingData.title}</h2>
          <div className="h-1 w-16 bg-amber-500 mt-4 mb-4"></div>
          <p className="text-zinc-600 font-medium text-sm max-w-sm">
            {bookingData.subtitle}
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
}
