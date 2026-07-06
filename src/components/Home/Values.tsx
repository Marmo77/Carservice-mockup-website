import { ShieldCheck, Clock, Settings, Users } from "lucide-react";
import { motion, useInView } from "motion/react";
import { valuesData, contactInfo } from "@/data/company";
import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ from, to, duration, suffix, className }: { from: number, to: number, duration: number, suffix: string, className: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

        // Easing function for smoother animation (easeOutQuart)
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * (to - from) + from));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  const displayCount = count;

  return (
    <span ref={ref} className={className}>
      {displayCount}{count === to ? suffix : ""}
    </span>
  );
}

export default function Values() {
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Settings": return <Settings className={className} />;
      case "Clock": return <Clock className={className} />;
      case "Users": return <Users className={className} />;
      default: return null;
    }
  };

  return (
    <section className="py-24 bg-background border-t border-border relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase">
            Dlaczego <span className="text-primary">{contactInfo.name}?</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mt-6 mb-6"></div>
          <p className="max-w-2xl text-lg text-muted-foreground mx-auto font-medium">
            Jesteśmy zespołem pasjonatów motoryzacji z wieloletnim doświadczeniem. Nasz cel to nie tylko naprawa, ale przede wszystkim zapewnienie Ci bezpieczeństwa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main big card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-accent rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-black/[0.03] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div>
              <h3 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter mb-4">Gwarancja Jakości</h3>
              <p className="text-zinc-600 text-lg font-medium max-w-xl">
                Stawiamy na jasne zasady, brak ukrytych kosztów i precyzję. Naprawiamy z dbałością o każdy szczegół, traktując Twoje auto jak nasze własne.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-zinc-200/60">
              <div>
                <AnimatedCounter from={1} to={15} duration={1} suffix="+" className="text-5xl font-black text-primary mb-2 block" />
                <p className="text-muted-foreground font-bold uppercase tracking-widest text-sm">Lat doświadczenia</p>
              </div>
              <div>
                <AnimatedCounter from={1000} to={10000} duration={1.5} suffix="+" className="text-5xl font-black text-primary mb-2 block" />
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Zadowolonych klientów</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 bg-primary rounded-3xl p-8 py-12 md:p-10 flex flex-col items-start justify-end text-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20"
          >
            <ShieldCheck className="h-12 w-12 mb-6" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Partner DEKRA</h3>
            <p className="font-bold opacity-90">Oficjalna stacja kontroli. Pełen profesjonalizm i certyfikowane usługi.</p>
          </motion.div>

          {valuesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`md:col-span-1 rounded-3xl px-8 py-16 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.bgClass}`}
            >
              {renderIcon(item.icon, `h-8 w-8 mb-2 ${item.iconClass}`)}
              <h3 className="text-xl font-black uppercase tracking-tight mb-1">{item.title}</h3>
              <p className={item.id === "terminowosc" ? "text-zinc-400 font-medium" : "text-zinc-600 font-medium"}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
