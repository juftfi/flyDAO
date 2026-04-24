import { Globe, Github, Link as LinkIcon } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-16">
    <div className="container py-10 flex flex-wrap items-center justify-between gap-6">
      <Logo />
      <div className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} FlyDAO · On-chain command layer
      </div>
      <div className="flex items-center gap-3">
        {[Globe, Github, LinkIcon].map((Icon, i) => (
          <a key={i} href="#" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-primary/40 transition-colors">
            <Icon className="w-4 h-4 text-muted-foreground" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
