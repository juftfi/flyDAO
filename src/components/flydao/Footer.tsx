import {Users, X, Globe, Github, Link as LinkIcon } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-16">
    <div className="container py-10 flex flex-wrap items-center justify-between gap-6">
      <Logo />
      <div className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} FlyDAO · Staking Borrowing Governance
      </div>
      <div className="flex items-center gap-3">
        {[X].map((Icon, i) => (
          <a key={i} href="https://x.com/flyDAO" target="_blank" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-primary/40 transition-colors">
            <Icon className="w-4 h-4 text-muted-foreground" />
          </a>
          
        ))}
        {[Users].map((Icon, i) => (
          <a key={i} href="https://x.com/flyDAO" target="_blank" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-primary/40 transition-colors">
            <Icon className="w-4 h-4 text-muted-foreground" />
          </a>
          
        ))}
        {[Github].map((Icon, i) => (
          <a key={i} href="https://github.com" target="_blank" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-primary/40 transition-colors">
            <Icon className="w-4 h-4 text-muted-foreground" />
          </a>
          
        ))}
      </div>
    </div>
  </footer>
);
