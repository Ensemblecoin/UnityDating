export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-foreground">🎵 Unity Dating</div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">Features</a>
            <a href="#music-room" className="text-sm font-medium text-muted-foreground hover:text-foreground">Music Room</a>
            <a href="#matches" className="text-sm font-medium text-muted-foreground hover:text-foreground">Matches</a>
            <button className="landing-nav-cta">Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  )
}
