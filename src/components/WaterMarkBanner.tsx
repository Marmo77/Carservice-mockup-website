
const WaterMarkBanner = ({
  creatorName = "Marmo77",
  email = "aleksydobrodziej@gmail.com",
  phone = "+48 510 378 629",
}) => {
  return (
    <div className="sticky hidden lg:block  bottom-0 right-0 w-full z-50 bg-yellow-400/90 text-yellow-950 px-4 py-1.5 shadow-sm backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-medium tracking-wide uppercase">
        {/* Left Side: Warning Label */}
        <div className="font-bold flex items-center gap-2 mb-1 sm:mb-0">
          <span className="w-2 h-2 rounded-full bg-yellow-700 animate-pulse"></span>
          Strona poglądowa.

        </div>

        {/* Right Side: Creator Info */}
        <div className="flex flex-wrap justify-center gap-4 opacity-90">
          <span className="text-[11px] font-semibold ">ZLECENIA I WSPÓŁPRACA:</span>
          <span>
            Autor:{" "}
            <a
              href="https://github.com/Marmo77"
              className="font-bold hover:underline hover:text-black transition-colors"
              target="_blank"
            >
              {creatorName}
            </a>
          </span>
          <span className="hidden sm:inline">|</span>
          <a
            href={`mailto:${email}`}
            className="hover:underline hover:text-black transition-colors"
          >
            {email}
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="hover:underline hover:text-black transition-colors"
          >
            {phone}
          </a>
        </div>
      </div>
    </div >
  );
};

export default WaterMarkBanner;
