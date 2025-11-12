export function Footer() {
  return (
    <div className="py-8 text-sm text-muted-foreground flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} Aaron Guckian for Governor. All rights
        reserved.
      </p>
      <div className="flex gap-4">
        <a href="/privacy" className="hover:opacity-80">
          Privacy
        </a>
        <a href="/terms" className="hover:opacity-80">
          Terms
        </a>
        <a href="/contact" className="hover:opacity-80">
          Contact
        </a>
      </div>
    </div>
  );
}
