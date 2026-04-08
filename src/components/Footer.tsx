const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span 
  className="font-display text-xl font-bold text-gradient-gold cursor-pointer hover:opacity-80 transition-opacity"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  Rimsha
</span>
      <p className="text-muted-foreground font-body text-sm">
        © 2026 Risha. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
