import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/nlp.png";

export function Logo() {
  return <Link to="/" aria-label="DMR home" className="group flex items-center">
    <img src={logo} alt="DMR Excavating & Landscaping" className="h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]" />
  </Link>;
}

const links = [["/","Home"],["/about","About"],["/services","Services"],["/why-choose-us","Why Us"],["/enquiry","Enquiry"]] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map(([to,label]) => <Link key={to} to={to} className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary" activeProps={{className:"text-primary"}}>{label}</Link>)}
          <Button asChild variant="industrial" size="lg"><Link to="/enquiry"><Phone/>Free estimate</Link></Button>
        </nav>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden">{links.map(([to,label]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-display text-2xl font-bold uppercase">{label}</Link>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div><Logo/><p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">Heavy-duty excavation and refined landscaping, delivered with care from the first cut to the final grade.</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Navigate</p><div className="mt-4 grid gap-3">{links.map(([to,label])=><Link key={to} to={to} className="text-sm text-muted-foreground hover:text-foreground">{label}</Link>)}</div></div>
        <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Start a project</p><p className="mt-4 text-sm text-muted-foreground">Tell us what needs moving, shaping, clearing, or building.</p><div className="mt-4 grid gap-2 text-sm"><a href="tel:6047236226" className="text-muted-foreground transition-colors hover:text-foreground">604-723-6226</a><a href="tel:6048329094" className="text-muted-foreground transition-colors hover:text-foreground">604-832-9094</a><a href="mailto:dmrexcavatingitd@gmail.com" className="text-muted-foreground transition-colors hover:text-foreground">dmrexcavatingitd@gmail.com</a></div><Button asChild variant="industrialOutline" className="mt-5"><Link to="/enquiry">Request estimate</Link></Button></div>
      </div>
      <div className="border-t border-border px-5 py-5 text-center text-[10px] uppercase tracking-[0.14em] text-muted-foreground">© 2026 DMR Excavating & Landscaping. Groundwork done right.</div>
    </footer>
  </div>;
}