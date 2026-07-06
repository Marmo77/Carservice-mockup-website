import { Link } from "react-router-dom";
import { services } from "@/data/company";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CarFront, ShieldAlert, Wrench, Zap, Truck, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "CarFront": return <CarFront className="h-6 w-6 text-primary" />;
      case "ShieldAlert": return <ShieldAlert className="h-6 w-6 text-primary" />;
      case "Wrench": return <Wrench className="h-6 w-6 text-primary" />;
      case "Zap": return <Zap className="h-6 w-6 text-primary" />;
      case "Truck": return <Truck className="h-6 w-6 text-primary" />;
      case "CheckCircle": return <CheckCircle className="h-6 w-6 text-primary" />;
      default: return <Wrench className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section className="py-24 bg-background scroll-mt-20" id="oferta">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase">Nasza Oferta</h2>
          <div className="h-1 w-24 bg-primary mx-auto mt-6 mb-6"></div>
          <p className="max-w-2xl text-lg text-muted-foreground mx-auto font-medium">
            Oferujemy pełen zakres usług motoryzacyjnych. Zadbamy o Twój samochód od A do Z, z największą precyzją.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative h-full flex"
            >
              <Card className="relative overflow-hidden bg-accent border-0 rounded-none shadow-none hover:bg-muted transition-colors group flex-1">
                <Link to={service.id === "sprzedaz" ? "/sprzedaz" : `/uslugi/${service.id}`} className="absolute inset-0 z-20"><span className="sr-only">{service.title}</span></Link>
                {/* Left Accent Bar on Hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-border group-hover:bg-primary transition-colors" />

                <CardHeader className="pl-8 pb-3 pt-8 relative z-10">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-background p-3 border border-border group-hover:border-primary transition-colors">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-4xl font-black text-border group-hover:text-primary/20 transition-colors">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-black tracking-tight text-foreground uppercase group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="pl-8 relative z-10 pb-8">
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed font-medium mb-6 line-clamp-3">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                    Dowiedz się więcej <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
