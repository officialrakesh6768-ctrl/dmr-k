import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Fence, PhoneCall, Shovel, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EstimateBand, Eyebrow, SectionHeading } from "@/components/page-elements";
import heroImage from "@/assets/dmr-hero.jpg";
import aboutImage from "@/assets/dmr-about.jpg";
import n1 from "@/assets/n1.jpeg";
import n2 from "@/assets/n2.jpeg";
import n3 from "@/assets/n3.jpeg";
import n4 from "@/assets/n4.jpeg";
import n5 from "@/assets/n5.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "DMR Excavating & Landscaping | Built From the Ground Up" },
    { name: "description", content: "Premium excavation, demolition, grading and landscaping for projects built to last." },
    { property: "og:title", content: "DMR Excavating & Landscaping" },
    { property: "og:description", content: "Building stronger foundations together." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

const previews = [
  {icon:Shovel, n:"01", title:"Landscaping", copy:"Clean, functional outdoor spaces shaped for everyday use, curb appeal and long-term durability."},
  {icon:Trees, n:"02", title:"Artificial Turf", copy:"Low-maintenance turf solutions that keep outdoor areas greener, cleaner and ready for use year-round."},
  {icon:Building2, n:"03", title:"Blocks", copy:"Strong, versatile blockwork for edging, retaining features and neat site finishing details."},
  {icon:Fence, n:"04", title:"Retaining Wall", copy:"Engineered walls that manage elevation changes, improve usability and add structure to the landscape."},
  {icon:Shovel, n:"05", title:"Pavers", copy:"Paver installations that create durable walkways, patios and finished surfaces with a refined look."},
  {icon:Trees, n:"06", title:"Forming", copy:"Precise concrete forming for footings, pads, edges and custom features built to specification."},
];

const galleryImages = [n1, n2, n3, n4, n5];

function HomePage() { return <>
  <section className="relative flex min-h-[92svh] items-end overflow-hidden pt-20">
    <img src={heroImage} alt="Orange excavator working across a rugged construction site at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent"/><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20"/>
    <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20"><div className="max-w-4xl animate-rise">
      <Eyebrow>Groundwork done right</Eyebrow><h1 className="text-6xl font-black uppercase leading-[.83] md:text-8xl lg:text-[8rem]">Building Stronger <span className="text-primary">Foundations</span> Together</h1>
      <p className="mt-7 max-w-xl text-base leading-7 text-foreground/75 md:text-lg">From first cut to final grade, DMR brings disciplined execution, modern equipment, and pride to every property.</p>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <Button asChild variant="industrial" size="xl"><Link to="/enquiry">Get a free estimate <ArrowRight/></Link></Button>
        <Button asChild variant="industrialOutline" size="xl"><Link to="/services">Explore services</Link></Button>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-background/65 px-4 py-3 shadow-[0_0_30px_rgba(240,120,0,0.12)] backdrop-blur-sm">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"><PhoneCall className="h-4 w-4"/></span>
          <a href="tel:6048329094" className="text-sm font-black uppercase tracking-[.16em] text-primary sm:text-base">604-832-9094</a>
        </div>
      </div>
    </div></div>
  </section>
  <section className="border-y border-border bg-surface"><div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">{[["10+","Years built tough"],["9","Core services"],["100%","Committed to quality"],["TOP-TIER","Equipment & service"]].map(([v,l])=><div key={l} className="border-border p-6 odd:border-r lg:border-r lg:p-8"><p className="font-display text-5xl font-black text-primary">{v}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[.16em] text-muted-foreground">{l}</p></div>)}</div></section>
  <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Core capabilities" title="One crew. Every phase." copy="Coordinated earthwork and exterior construction that keeps your project moving without compromise."/><div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4">{previews.map(({icon:Icon,n,title,copy})=><Link to="/services" key={title} className="group border border-border p-7 transition-colors hover:bg-card"><div className="flex items-center justify-between"><Icon className="h-7 w-7 text-primary"/><span className="font-mono text-xs text-muted-foreground">{n}</span></div><h3 className="mt-16 text-3xl font-black uppercase">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p><ArrowRight className="mt-7 transition-transform group-hover:translate-x-2"/></Link>)}</div></div></section>
  <section className="border-t border-border bg-surface px-5 py-24 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Project gallery" title="Recent work in progress." copy="A closer look at the kinds of jobs we tackle across residential, rural and utility-driven sites."/><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{galleryImages.map((image, index)=><div key={index} className="overflow-hidden border border-border bg-card"><img src={image} alt={`DMR project gallery image ${index + 1}`} loading="lazy" className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"/></div>)}</div></div></section>
  <section className="bg-concrete text-background"><div className="mx-auto grid max-w-7xl lg:grid-cols-2"><div className="relative min-h-[440px] overflow-hidden"><img src={aboutImage} loading="lazy" alt="Excavation equipment shaping a landscaped mountain property" width={1600} height={1056} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"/></div><div className="flex flex-col justify-center p-8 md:p-14 lg:p-20"><Eyebrow>Built on accountability</Eyebrow><h2 className="text-5xl font-black uppercase leading-[.9] md:text-7xl">Heavy work.<br/>Refined results.</h2><p className="mt-6 max-w-lg leading-7 text-background/70">We treat every grade, trench, fence line and finished edge as a reflection of our name. That means honest communication, careful planning and no shortcuts.</p><Button asChild variant="industrial" size="xl" className="mt-8 self-start"><Link to="/about">Meet DMR <ArrowRight/></Link></Button></div></div></section>
  <EstimateBand/>
</> }