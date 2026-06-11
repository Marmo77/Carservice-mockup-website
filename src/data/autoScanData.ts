export const contactInfo = {
  name: "Auto-Scan",
  street: "ul. Maszewska 23a",
  city: "72-100 Goleniów",
  phone: "512 322 485",
  phoneRoadAssistance: "606-475-204",
  email: "biuro@auto-scan.pl",
  phones: {
    sprzedaz: ["608-123-332", "503-839-639"],
    serwis: ["(091)-419-02-88", "512-322-485"]
  },
  emails: {
    sprzedaz: "salon@auto-scan.pl",
    serwis: "serwis@auto-scan.pl"
  },
  hours: {
    weekdays: "8:00 - 17:00",
    saturday: "8:00 - 14:00",
    sunday: "Zamknięte"
  }
};

export const navLinks = [
  { name: "Strona główna", path: "/" },
  { name: "Nasza Oferta", path: "/#oferta" },
  { name: "Chiptuning", path: "/uslugi/chiptuning" },
  { name: "Kontakt", path: "/kontakt" }
];

export const bookingServices = [
  "Badanie techniczne samochodu do dowodu rejestracyjnego",
  "Wymiana kół / opon z wyważeniem",
  "Obsługa / nabicie klimatyzacji",
  "Odgrzybianie klimatyzacji z wymianą filtra kabinowego",
  "Ozonowanie klimatyzacji (70 zł)",
  "Duży przegląd zgodnie z programem serwisowym",
  "Mały przegląd zgodnie z programem serwisowym",
  "Wymiana oleju i filtra oleju",
  "Wymiana oleju w automatycznej skrzyni biegów",
  "Wymiana paska rozrządu z pompą wody",
  "Wymiana / naprawa układu hamulcowego",
  "Naprawa zawieszenia",
  "Ustawienie geometrii / zbieżności kół"
];

export const services = [
  {
    id: "skp",
    title: "Stacja Kontroli Pojazdów (SKP)",
    description: "Oficjalny partner firmy DEKRA. Wykonujemy zaawansowane badania. Jesteśmy jednymi z nielicznych uprawnionych do wydawania naklejek UMWELTZONE (strefy eko w Niemczech).",
    icon: "CarFront",
    bannerImage: "https://images.unsplash.com/photo-1599474151975-1f978922fa02?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "serwis",
    title: "Serwis Samochodów",
    description: "Oferujemy wszelkiego rodzaju naprawy bieżące, wymianę rozrządu, klocków hamulcowych oraz profesjonalną diagnostykę komputerową.",
    icon: "Wrench",
  },
  {
    id: "chiptuning",
    title: "Chip tuning / V-tech",
    description: "Profesjonalne strojenie elektroniki, podniesienie mocy silnika oraz redukcja spalania przy wykorzystaniu oprogramowania V-tech.",
    icon: "Zap",
    bannerImage: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1600&auto=format&fit=crop",
    partnerText: "Jesteśmy oficjalnym parnterem firmy V-tech. Oferujemy szeroką gamę rozwiązań z dziedziny elelktroniki pojazdowej.",
    featuresList: [
      "Chip tuning",
      "PowerBox (dla posiadaczy aut na gwarancji)",
      "Usuwanie filtrów FAP/DPF",
      "Hamownie"
    ],
    faq: [
      {
        question: "1. Czym jest chip tuning i jakie daje korzyści?",
        answer: "Chip tuning to elektroniczne zwiększenie mocy silnika, polegające na bezpiecznym uwolnieniu rezerw zostawionych przez producenta. Pozwala to odkryć potencjał Twojego samochodu na nowo. Auto staje się szybsze, płynniej przyspiesza (co ułatwia wyprzedzanie i podnosi bezpieczeństwo), a przy tym spala mniej paliwa. Największe efekty widać w autach z turbosprężarkami, ale modyfikacje przynoszą świetne rezultaty również w silnikach wolnossących."
      },
      {
        question: "2. Czy chip tuning jest bezpieczny dla mojego samochodu?",
        answer: "Tak, pod warunkiem, że jest wykonany profesjonalnie. Negatywne opinie w internecie najczęściej wynikają z amatorskich modyfikacji (tzw. \"gotowców z Allegro\"). Profesjonalny chip tuning to zupełnie inna usługa: opiera się na wcześniejszej diagnostyce technicznej, pomiarach na hamowni i jest indywidualnie dopasowany do stanu Twojego auta. Jeśli regularnie dbasz o samochód (wymieniasz olej, filtry i tankujesz paliwo z pewnych stacji), modyfikacja jest w pełni bezpieczna i wolna od przeciwwskazań."
      },
      {
        question: "3. Jak to działa od strony technicznej?",
        answer: "Sercem układu napędowego jest sterownik silnika (ECU). To komputer, który na bieżąco zarządza dawką paliwa, kątem wtrysku i zapłonem. Fabryczne oprogramowanie w ECU jest napisane tak, by auto miało jak najwyższą tolerancję na zaniedbania eksploatacyjne, a nie po to, by silnik rozwijał optymalną moc czy spalał najmniej paliwa. Chip tuning polega na modyfikacji tych parametrów, aby silnik pracował wydajniej."
      },
      {
        question: "4. Dlaczego producenci celowo obniżają osiągi silnika?",
        answer: "Producenci dławią potencjał silników z kilku głównych powodów:\n\nZabezpieczenie przed usterkami: Fabryka zakłada, że część kierowców ignoruje wymiany oleju lub tankuje paliwo złej jakości. Zapas wytrzymałości ma chronić silnik przed awarią.\n\nTesty homologacyjne: Auta muszą wykazywać niskie spalanie przy konkretnych prędkościach testowych (np. 90 i 120 km/h). Producenci sztucznie tłumią tam osiągi, tworząc tzw. \"dziury w gazie\".\n\nKwestie podatkowe: W wielu krajach Zachodu opłaty i ubezpieczenia zależą od mocy auta. Dlatego wersje na rynek niemiecki są często słabsze niż ich odpowiedniki np. w USA.\n\nPolityka sprzedaży: Taniej jest wyprodukować jeden mocny silnik i oferować go w różnych wersjach cenowych. Tańsze modele są po prostu ograniczone elektronicznie w sterowniku ECU."
      },
      {
        question: "5. Jakich przyrostów mocy mogę się spodziewać?",
        answer: "Efekty zależą od konstrukcji Twojego silnika. Dzielimy je na dwie główne kategorie:\n\nSilniki z turbiną lub kompresorem: Tutaj uwolniony potencjał jest największy. Po strojeniu na hamowni zyskujesz średnio od 20% do 25% więcej mocy i momentu obrotowego.\n\nSilniki wolnossące (bez kompresora): Po optymalizacji uzyskasz około 5-10% przyrostu mocy i momentu. Dodatkową zaletą będzie wyraźny spadek zużycia paliwa oraz znacznie lepsza reakcja na pedał gazu."
      }
    ]
  },
  {
    id: "autoholowanie",
    title: "Pomoc drogowa i Autoholowanie",
    description: "Dowóz paliwa, uruchamianie auta, holowanie. Uwaga: pobieramy opłatę za holowanie jedynie za jedną stronę trasy!",
    icon: "Truck",
    bannerImage: "/autoholowanie_bg.jpg",
  },
  {
    id: "sprzedaz",
    title: "Sprzedaż Samochodów",
    description: "Dzięki wieloletniemu doświadczeniu oferujemy sprawdzone samochody Volvo pochodzące z sieci dealerskiej z Polski i Europy.",
    icon: "CheckCircle",
  }
];

export const autoholowaniePricing = [
  { id: 1, area: "Na terenie Goleniowa", priceLoyal: "100,00 zł", priceStandard: "150,00 zł" },
  { id: 2, area: "Do 20 km", priceLoyal: "150,00 zł", priceStandard: "200,00 zł" },
  { id: 3, area: "Powyżej 20 km", priceLoyal: "70,00 zł + 4,00 zł / km", priceStandard: "70,00 zł + 5,00 zł / km" },
  { id: 4, area: "Trasa 200 km - 500 km", priceLoyal: "4,00 zł / km", priceStandard: "5,00 zł / km" },
  { id: 5, area: "Trasa powyżej 500 km", priceLoyal: "3,70 zł / km", priceStandard: "4,00 zł / km" },
];

export const skpFeatures = [
  "Przeglądy rejestracyjne aut osobowych i dostawczych.",
  "Badania pojazdów z instalacją gazową (LPG).",
  "Przeglądy aut po naprawach blacharskich (powypadkowych).",
  "Pierwsze badania techniczne pojazdów sprowadzonych z zagranicy."
];

export const holowanieServices = [
  {
    id: "holowanie",
    icon: "Truck",
    title: "Autoholowanie i zabezpieczenie",
    description: "Bezpieczne holowanie pojazdów powypadkowych i uszkodzonych (ochrona przed dalszymi uszkodzeniami). Wyciąganie aut z rowów."
  },
  {
    id: "naprawy",
    icon: "Wrench",
    title: "Drobne naprawy mobilne",
    description: "Pomoc w uruchomieniu samochodu na miejscu oraz odkręcanie zapieczonych śrub kół."
  },
  {
    id: "paliwo",
    icon: "Fuel",
    title: "Problemy z paliwem",
    description: "Dowóz paliwa we wskazane miejsce oraz bezpieczne spuszczanie źle zatankowanego paliwa z baku."
  }
];

export const mechanikaUdogodnienia = [
  {
    id: "auta",
    icon: "🚗",
    title: "Auta Zastępcze",
    description: "Awaria nie musi psuć Twoich planów! Oferujemy samochody zastępcze na czas naprawy, aby zminimalizować Twoje niedogodności. Zostaw auto u nas i jedź dalej."
  },
  {
    id: "door",
    icon: "🔄",
    title: "Door to Door",
    description: "Szanujemy Twój czas. Oferujemy usługę odbioru samochodu spod wskazanego adresu, a po zakończonej naprawie dostarczamy go z powrotem."
  },
  {
    id: "floty",
    icon: "🏢",
    title: "Obsługa Flot",
    description: "Zapewniamy kompleksową opiekę serwisową dla samochodów firmowych. Gwarantujemy krótkie terminy realizacji, auta zastępcze oraz dedykowane umowy serwisowe."
  }
];

export const mechanikaCzesci = [
  {
    id: "oem",
    color: "bg-green-500",
    title: "Części oryginalne (OEM)",
    description: "najwyższa jakość fabryczna."
  },
  {
    id: "high",
    color: "bg-yellow-400",
    title: "Zamienniki wysokiej klasy",
    description: "jakość porównywalna z oryginałem w rozsądnej cenie."
  },
  {
    id: "budget",
    color: "bg-red-500",
    title: "Zamienniki klasy budżetowej",
    description: "tańsze alternatywy",
    warning: "nie polecamy ich ze względu na trwałość, montujemy je wyłącznie na wyraźne życzenie klienta"
  }
];

export const mechanikaServices = [
  {
    id: "diagnostyka",
    title: "Diagnostyka i Elektronika",
    icon: "Cpu",
    items: [
      "Komputerowy test układów, diagnoza czujników.",
      "Naprawa instalacji elektrycznych, montaż alarmów."
    ],
    className: "md:col-span-2 lg:col-span-2"
  },
  {
    id: "silnik",
    title: "Silnik i Rozrząd",
    icon: "Wrench",
    description: "Naprawy silnika, wymiana pasków rozrządu i pomp wody."
  },
  {
    id: "zawieszenie",
    title: "Zawieszenie i Geometria",
    icon: "Car",
    description: "Test i wymiana amortyzatorów, wahaczy, łożysk. Ustawianie pełnej geometrii."
  },
  {
    id: "hamulce",
    title: "Układ Hamulcowy",
    icon: "ShieldAlert",
    description: "Wymiana klocków, tarcz, płynu. Kontrola skuteczności na rolkach."
  },
  {
    id: "klimatyzacja",
    title: "Serwis Klimatyzacji",
    icon: "Snowflake",
    description: "Pełna obsługa, dezynfekcja (odgrzybianie), wymiana filtrów."
  },
  {
    id: "wydech",
    title: "Układ Wydechowy / DPF",
    icon: "Wind",
    description: "Wymiana tłumików, regeneracja filtrów cząstek stałych (DPF/FAP)."
  }
];

export const heroData = {
  titleLine1: "KOMPLEKSOWY SERWIS",
  titleLine2: "AUTO-SCAN",
  subtitle: "Zadbaj o swój samochód w nowoczesnym serwisie. Gwarantujemy rzetelność, najwyższą jakość napraw oraz kompleksową obsługę Twojego pojazdu.",
};

export const bookingData = {
  title: "Szybka Rezerwacja",
  subtitle: "Wypełnij formularz rezerwacyjny, a nasz pracownik skontaktuje się z Tobą w najszybszym możliwym terminie.",
  contactTitle: "Dane Kontaktowe",
  openText: "Teraz otwarte",
  closedText: "Aktualnie zamknięte"
};

export const trustBadges = [
  { id: 1, title: "Gwarantujemy Niezawodność", icon: "CheckCircle" },
  { id: 2, title: "Szybka Realizacja", icon: "CheckCircle" },
  { id: 3, title: "Profesjonalna Obsługa", icon: "CheckCircle" },
];

export const valuesData = [
  {
    id: "transparentnosc",
    title: "Transparentność",
    description: "Informujemy o wszystkich kosztach zanim zaczniemy pracę.",
    icon: "Settings",
    bgClass: "bg-accent text-foreground border border-border",
    iconClass: "text-primary",
  },
  {
    id: "terminowosc",
    title: "Terminowość",
    description: "Szanujemy Twój czas. Naprawy zawsze kończymy w umówionym terminie.",
    icon: "Clock",
    bgClass: "bg-foreground text-primary-foreground border-transparent",
    iconClass: "text-primary",
  },
  {
    id: "fachowy-zespol",
    title: "Fachowy Zespół",
    description: "Nasi mechanicy są regularnie szkoleni z najnowszych technologii.",
    icon: "Users",
    bgClass: "bg-accent text-foreground border border-border",
    iconClass: "text-primary",
  }
];
