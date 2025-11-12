export function Navbar() {
  return (
    <nav className="h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
        <span className="font-semibold">Aaron Guckian</span>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a href="/about" className="hover:opacity-80">
          About
        </a>
        <a href="/issues" className="hover:opacity-80">
          Issues
        </a>
        <a href="/news" className="hover:opacity-80">
          News
        </a>
        <a href="/volunteer" className="hover:opacity-80">
          Volunteer
        </a>
        <a href="/donate" className="px-4 py-2 rounded-full border">
          Donate
        </a>
      </div>

      <button className="md:hidden px-3 py-2 rounded border">Menu</button>
    </nav>
  );
}
