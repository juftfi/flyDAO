import { Wallet } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Staking", href: "#staking" },
  { label: "Borrowing", href: "#borrowing" },
  { label: "Governance", href: "#governance" },
];
export const Navbar = () => (
  <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
    <div className="container flex items-center justify-between h-20">
      <Logo />
      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {l.label}
          </a>
        ))}
      </nav>
      <Button title="DEV MODE ONLY !!! Will available when bonding curve 100%" variant="outline" className="gold-border-glow bg-transparent hover:bg-primary/10 text-foreground gap-2">
        <Wallet className="w-4 h-4 text-primary" />
        Connect Wallet
      </Button>
    </div>
  </header>
);
