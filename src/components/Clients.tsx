"use client";

const clients = [
  "TechStart",
  "NovaMEI",
  "Fluxo Digital",
  "Conta Fácil",
  "Venda Mais",
  "GestorPro",
  "Crédito Ágil",
  "Fiscal Online",
  "Micro Capital",
  "Empreenda+",
];

function ClientLogo({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 px-10 flex items-center opacity-30 hover:opacity-80 transition-opacity duration-300 cursor-default">
      <span className="text-primary text-sm font-serif font-bold tracking-wider whitespace-nowrap uppercase">
        {name}
      </span>
    </div>
  );
}

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section className="bg-secondary border-t border-b border-border py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-muted font-medium">
          MEIs e pequenas empresas que já usam a 10pm
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        <div className="flex">
          <div className="flex animate-marquee">
            {doubled.map((name, i) => (
              <ClientLogo key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
