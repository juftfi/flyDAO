import { Flame, ShoppingCart, Coins } from "lucide-react";

const items = [
  { icon: Coins, label: "Total fees collected", value: "$284,120", sub: "lifetime" },
  { icon: ShoppingCart, label: "$FLY bought back", value: "32.4M FLY", sub: "≈ $2.72M deployed" },
  { icon: Flame, label: "$FLY burned", value: "18.6M FLY", sub: "permanently removed", glow: true },
];

export const Tokenomics = () => (
  <section className="container py-24">
    <div className="text-xs tracking-[0.3em] text-primary font-semibold mb-3">TOKENOMICS LOOP</div>
    <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">Fees → Buyback → Burn</h2>
    <p className="text-muted-foreground max-w-2xl mb-10">
      Every borrowing fee and protocol reward routes back into the treasury,
      compresses circulating supply, and rewards long-term holders.
    </p>
    <div className="grid md:grid-cols-3 gap-5">
      {items.map(({ icon: Icon, label, value, sub, glow }) => (
        <div
          key={label}
          className={`relative glass-card rounded-2xl p-7 overflow-hidden ${glow ? 'gold-border-glow' : ''}`}
        >
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-radial-gold opacity-50" />
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-glow-gold-sm">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-xs text-muted-foreground mb-2">{label}</div>
            <div className="font-display text-3xl font-bold mb-2">{value}</div>
            <div className="text-xs text-muted-foreground">{sub}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
