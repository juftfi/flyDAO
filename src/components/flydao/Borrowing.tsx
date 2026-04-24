import { useState } from "react";
import { Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const FLY_PRICE = 0.00004;
const BNB_PRICE = 600;
const LTV = 0.5;

export const Borrowing = () => {
  const [collateral, setCollateral] = useState(1_000_000);
  const collateralUSD = collateral * FLY_PRICE;
  const maxBorrowUSD = collateralUSD * LTV;
  const maxBorrowBNB = maxBorrowUSD / BNB_PRICE;
  const [borrowed, setBorrowed] = useState([0]);
  const borrowedUSD = (borrowed[0] / 100) * maxBorrowUSD;
  const borrowedBNB = borrowedUSD / BNB_PRICE;
  const utilization = borrowed[0];
  const healthFactor = borrowed[0] === 0 ? "∞" : ((LTV * 100) / Math.max(borrowed[0] * LTV / 100, 0.01)).toFixed(2);

  return (
    <section id="borrowing" className="container py-24">
      <div className="text-xs tracking-[0.3em] text-primary font-semibold mb-3">BORROWING</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">Borrow $BNB against $FLY</h2>
      <p className="text-muted-foreground max-w-2xl mb-10">
        Use your staked $FLY as collateral. 50% LTV. Liquid, transparent, on-chain.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display font-bold">Borrowing Position</div>
              <div className="text-xs text-muted-foreground">50% LTV · liquidation @ 80%</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div>
              <label className="text-xs text-muted-foreground">Collateral ($FLY)</label>
              <div className="mt-2 flex items-center gap-3 bg-background/60 rounded-xl border border-border/60 px-4 py-3">
                <Input
                  type="number"
                  value={collateral}
                  onChange={(e) => setCollateral(Number(e.target.value) || 0)}
                  className="border-0 bg-transparent text-lg font-display font-bold p-0 focus-visible:ring-0"
                />
                <span className="text-xs text-muted-foreground">FLY</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                ≈ <span className="text-primary font-semibold">${collateralUSD.toFixed(2)}</span>
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Max borrow</label>
              <div className="mt-2 bg-background/60 rounded-xl border border-border/60 px-4 py-3">
                <div className="text-lg font-display font-bold gold-text">{maxBorrowBNB.toFixed(4)} BNB</div>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                ≈ <span className="text-primary font-semibold">${maxBorrowUSD.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="mb-3 flex justify-between text-xs text-muted-foreground">
            <span>Borrow utilization</span>
            <span className="font-mono text-primary">{borrowed[0]}%</span>
          </div>
          <Slider value={borrowed} onValueChange={setBorrowed} max={100} step={1} className="mb-8" />

          <div className="space-y-3 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Borrowed</span>
              <span className="font-mono">{borrowedBNB.toFixed(5)} BNB · ${borrowedUSD.toFixed(2)}</span>
            </div>
            <div className="relative h-3 rounded-full bg-secondary overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-gold rounded-full transition-all"
                style={{ width: `${utilization}%` }}
              />
              <div
                className="absolute inset-y-0 w-px bg-destructive"
                style={{ left: '80%' }}
                title="Liquidation"
              />
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>0%</span><span>50% safe</span><span className="text-destructive">80% liq.</span><span>100%</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-background/60 border border-border/60">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm">Health factor</span>
            </div>
            <span className={`font-display text-2xl font-bold ${utilization > 70 ? 'text-destructive' : 'gold-text'}`}>
              {healthFactor}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <Button variant="outline" className="h-12 gold-border-glow bg-transparent">Repay</Button>
            <Button className="h-12 bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 shadow-glow-gold-sm">
              Borrow $BNB
            </Button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass-card rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">FLY Price</div>
            <div className="font-display text-2xl font-bold">${FLY_PRICE.toFixed(5)}</div>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">BNB Price</div>
            <div className="font-display text-2xl font-bold">${BNB_PRICE}</div>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Loan-to-Value</div>
            <div className="font-display text-2xl font-bold gold-text">{LTV * 100}%</div>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Borrow APR</div>
            <div className="font-display text-2xl font-bold">3.8%</div>
          </div>
        </div>
      </div>
    </section>
  );
};
