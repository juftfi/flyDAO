import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const bars = [40, 55, 48, 70, 62, 80, 72, 90, 85, 95, 88, 100];

export const Hero = () => (
  <section className="relative overflow-hidden pt-16 pb-32">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div className="pill pulse-dot">DAO-GRADE TOKEN INTELLIGENCE</div>
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
          Fly<span className="gold-text">DAO</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
          A futuristic Staking Borrowing Governance where staking, borrowing, and governance
          coordinate through one premium swarm.
        </p>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-radial-gold blur-3xl" />
        <div className="relative glass-card rounded-3xl p-6 animate-float">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Live Treasury</div>
              <div className="font-display text-4xl font-bold">$9,624,808</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-glow-gold-sm">
              <BarChart3 className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          <div className="h-48 flex items-end gap-2 mb-6 px-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.05, ease: "easeOut" }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-primary-deep to-primary-glow shadow-[0_0_12px_hsl(45_100%_55%/0.5)]"
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Votes", value: "12.8K" },
              { label: "Stakers", value: "48.2K" },
              { label: "APY", value: "22%" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border/60 bg-background/40 px-3 py-3 text-center">
                <div className="font-display text-xl font-bold gold-text">{s.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
