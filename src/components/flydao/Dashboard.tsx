import { TrendingUp, Wallet } from "lucide-react";

const stats = [
  { label: "FLY Price", value: "$0.000012", change: "+18.4%", positive: true },
  { label: "Market Cap", value: "$4.8K", change: "+6.7%", positive: true },
  { label: "Circulating Supply", value: "200M", change: "20% unlocked" },
  { label: "DAO Treasury", value: "$23K", change: "+$20K 24h", positive: true },
];

export const Dashboard = () => (
  <section id="dashboard" className="container py-24">
    <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
      <div>
        <div className="text-xs tracking-[0.3em] text-primary font-semibold mb-3">DASHBOARD</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Token command center</h2>
      </div>
      <div className="glass-card rounded-full px-4 py-2 text-sm flex items-center gap-2">
        <Wallet className="w-4 h-4 text-muted-foreground" />
        Wallet: <span className="text-primary font-semibold">Not connected</span>
      </div>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((s) => (
        <div key={s.label} className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-colors group">
          <div className="text-xs text-muted-foreground mb-3">{s.label}</div>
          <div className="font-display text-3xl font-bold mb-2">{s.value}</div>
          <div className={`text-xs flex items-center gap-1 ${s.positive ? 'text-primary' : 'text-muted-foreground'}`}>
            {s.positive && <TrendingUp className="w-3 h-3" />}
            {s.change}
          </div>
        </div>
      ))}
    </div>
  </section>
);
