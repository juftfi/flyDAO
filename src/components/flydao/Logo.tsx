export const Logo = ({ size = 36 }: { size?: number }) => (
  <div className="flex items-center gap-3">
    <div
      className="relative flex items-center justify-center rounded-xl bg-gradient-gold shadow-glow-gold-sm"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" width={size * 0.6} height={size * 0.6} fill="none">
        <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="hsl(0 0% 5%)" />
        <path d="M12 6 L18 12 L12 18 L6 12 Z" fill="hsl(45 100% 60%)" />
        <circle cx="12" cy="12" r="2" fill="hsl(0 0% 5%)" />
      </svg>
    </div>
    <div className="leading-tight">
      <div className="font-display font-bold text-base tracking-tight">FlyDAO</div>
      <div className="text-[10px] tracking-[0.25em] text-primary/80 font-medium">premium swarm signal</div>
    </div>
  </div>
);
