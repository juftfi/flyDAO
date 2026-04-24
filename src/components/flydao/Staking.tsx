import { useState } from "react";
import { Coins, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Staking = () => {
  const [amount, setAmount] = useState("");
  const sFly = amount ? (Number(amount) * 0.985).toFixed(2) : "0.00";

  return (
    <section id="staking" className="container py-24">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="text-xs tracking-[0.3em] text-primary font-semibold">STAKING</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Stake $FLY.<br />
            Earn <span className="gold-text">$sFLY</span>.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Lock $FLY into the swarm vault and receive liquid $sFLY representing your
            share of treasury yield, governance weight, and borrowing collateral.
          </p>
          <div className="grid grid-cols-3 gap-3 pt-4">
            {[
              { l: "Total Staked", v: "184.2M" },
              { l: "APY", v: "22.4%" },
              { l: "Your Balance", v: "0.00" },
            ].map((s) => (
              <div key={s.l} className="glass-card rounded-xl p-4">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                <div className="font-display text-xl font-bold mt-1 gold-text">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="glass-card rounded-3xl p-8 gold-border-glow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <Coins className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold">Stake Vault</div>
                  <div className="text-xs text-muted-foreground">v1.2 · audited</div>
                </div>
              </div>
              <div className="pill">Active</div>
            </div>

            <label className="block">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>You stake</span>
                <span>Balance: 0.00 FLY</span>
              </div>
              <div className="flex items-center gap-3 bg-background/60 rounded-xl border border-border/60 px-4 py-4 focus-within:border-primary/60 transition-colors">
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="border-0 bg-transparent text-2xl font-display font-bold p-0 focus-visible:ring-0"
                />
                <button className="text-xs text-primary font-semibold px-2">MAX</button>
                <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-gold" />
                  <span className="font-semibold text-sm">FLY</span>
                </div>
              </div>
            </label>

            <div className="flex justify-center my-3">
              <div className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center">
                <ArrowDown className="w-4 h-4 text-primary" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span>You receive</span>
              <span>Rate 1 FLY = 0.985 sFLY</span>
            </div>
            <div className="flex items-center gap-3 bg-background/60 rounded-xl border border-border/60 px-4 py-4">
              <div className="text-2xl font-display font-bold flex-1">{sFly}</div>
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-3 py-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-glow to-primary-deep" />
                <span className="font-semibold text-sm text-primary">sFLY</span>
              </div>
            </div>

            <Button className="w-full mt-6 h-14 bg-gradient-gold text-primary-foreground font-semibold text-base hover:opacity-90 shadow-glow-gold-sm">
              Stake $FLY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
