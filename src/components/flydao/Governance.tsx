import { Vote, Lock, Clock, CheckCircle2, Hourglass } from "lucide-react";
import { Button } from "@/components/ui/button";

const proposals = [
  {
    id: "FIP-014",
    title: "Launch $FLY on Launchpad",
    desc: "Expand token exposure by launching on platforms like four.meme or flap.sh.",
    status: "Active",
    yes: 68, no: 32, time: "2d 14h left",
  },
  {
    id: "FIP-013",
    title: "Increase Staking Rewards",
    desc: "Adjust APY from 22% → 28% to attract deeper liquidity into sFLY vaults.",
    status: "Passed",
    yes: 81, no: 19, time: "Executed",
  },
  {
    id: "FIP-015",
    title: "Treasury Allocation for Marketing",
    desc: "Allocate 250K USDC for ecosystem growth, partnerships, and content.",
    status: "Pending",
    yes: 0, no: 0, time: "Voting in 1d 3h",
  },
];

const statusStyle = (s: string) => {
  if (s === "Active") return { cls: "text-primary border-primary/40 bg-primary/10", Icon: Vote };
  if (s === "Passed") return { cls: "text-success border-success/40 bg-success/10", Icon: CheckCircle2 };
  return { cls: "text-muted-foreground border-border bg-secondary", Icon: Hourglass };
};

export const Governance = () => (
  <section id="governance" className="container py-24">
    <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
      <div>
        <div className="text-xs tracking-[0.3em] text-primary font-semibold mb-3">GOVERNANCE</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold">DAO Proposals</h2>
        <p className="text-muted-foreground mt-3 max-w-xl">
          Vote with your sFLY. Voting power scales with locked commitment.
        </p>
      </div>
      <div className="glass-card rounded-2xl p-5 flex items-center gap-5">
        <div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Lock className="w-3 h-3" /> Min lock to propose
          </div>
          <div className="font-display text-xl font-bold gold-text">1,000,000 FLY</div>
        </div>
        <Button className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 shadow-glow-gold-sm">
          Create Proposal
        </Button>
      </div>
    </div>

    <div className="grid gap-4">
      {proposals.map((p) => {
        const { cls, Icon } = statusStyle(p.status);
        return (
          <div key={p.id} className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-muted-foreground">{p.id}</span>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${cls}`}>
                    <Icon className="w-3 h-3" /> {p.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground max-w-2xl">{p.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" /> {p.time}
              </div>
            </div>

            {p.status !== "Pending" ? (
              <>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-success font-mono">YES {p.yes}%</span>
                  <span className="text-destructive font-mono">NO {p.no}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden bg-secondary flex">
                  <div className="bg-gradient-to-r from-success/70 to-success" style={{ width: `${p.yes}%` }} />
                  <div className="bg-destructive/60" style={{ width: `${p.no}%` }} />
                </div>
              </>
            ) : (
              <div className="h-2 rounded-full bg-secondary" />
            )}

            {p.status === "Active" && (
              <div className="flex gap-3 mt-5">
                <Button variant="outline" className="flex-1 border-success/40 text-success hover:bg-success/10 bg-transparent">
                  Vote Yes
                </Button>
                <Button variant="outline" className="flex-1 border-destructive/40 text-destructive hover:bg-destructive/10 bg-transparent">
                  Vote No
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </section>
);
