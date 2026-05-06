import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dice6, Scroll, Sparkles, Swords, Crown, Users, Mail, Star, Anvil, Skull, Mountain, Flame, Trophy, Map, Compass, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-table.jpg";

const services = [
  {
    icon: Scroll,
    title: "One-Shot Adventures",
    desc: "A complete 3–4 hour story crafted for your group. Perfect for first-timers, birthdays, or a single epic night.",
    price: "From $25",
    unit: "per player",
  },
  {
    icon: Swords,
    title: "Ongoing Campaigns",
    desc: "Weekly or biweekly sessions with persistent characters, deep world-building, and consequences that matter.",
    price: "From $30",
    unit: "per player / session",
  },
  {
    icon: Crown,
    title: "Private Parties & Events",
    desc: "Custom-themed sessions for bachelor/bachelorette parties, corporate team-building, or a special celebration.",
    price: "Custom",
    unit: "quote on request",
  },
];

const systems = [
  { name: "Dungeons & Dragons 5e/5.5E", note: "Classic high fantasy. Heroic arcs, tactical combat, deep lore." },
  { name: "Daggerheart", note: "Cinematic, narrative-first storytelling driven by Hope and Fear." },
  { name: "Candela Obscura", note: "Gothic horror investigations in the shadow of the Flame." },
  { name: "Vampire: The Masquerade 5th Edition", note: "Personal horror and political intrigue among the eternal undead." },
];

const testimonials = [
  {
    quote: "I'm so impressed by how he rolls with our decisions and stories. I'm not a fan of combat, but he found ways to make encounters about more than just hit points",
    name: "Becky R.",
    role: "Player, Three-Year Campaign",
  },
  {
    quote: "Welcoming for total beginners. My partner went from 'dice are weird' to obsessed.",
    name: "John W.",
    role: "Multiple Campaigns",
  },
  {
    quote: "Worldbuilding so rich I started taking notes. A truly professional GM.",
    name: "Kevin R.",
    role: "Daggerheart Campaign",
  },
];

const modules = [
  {
    icon: Skull,
    title: "Curse of Strahd",
    tag: "D&D Module",
    desc: "Gothic horror in the misty land of Barovia. Outwit a vampire lord across a sprawling, atmospheric campaign.",
  },
  {
    icon: Mountain,
    title: "Storm King's Thunder",
    tag: "D&D Module",
    desc: "Giants rampage across the Sword Coast. An epic, sandbox-style adventure for heroes ready to think big.",
  },
  {
    icon: Flame,
    title: "Lost Mine of Phandelver",
    tag: "D&D Module",
    desc: "The perfect introduction to D&D. Mystery, banditry, and a forgotten mine — ideal for new players.",
  },
  {
    icon: Compass,
    title: "Tomb of Annihilation",
    tag: "D&D Module",
    desc: "A deadly jungle expedition to stop a death curse. Pulpy, perilous, and unforgettable.",
  },
  {
    icon: Trophy,
    title: "Custom Battle Royale",
    tag: "Original",
    desc: "Friend vs. friend in a high-stakes arena. Custom characters, escalating hazards, last party standing wins glory.",
  },
  {
    icon: Map,
    title: "Custom Obstacle Course",
    tag: "Original",
    desc: "A gauntlet of puzzles, traps, and trials designed to test your group's wit, teamwork, and bravado.",
  },
  {
    icon: Scroll,
    title: "The Sablewood Messengers",
    tag: "Daggerheart Intro",
    desc: "There's no way to \"win\" D&D... Right? See which of your party will stand tall in the end. Friend vs. friend in a high-stakes arena. Custom characters, escalating hazards, last person standing takes the glory!",
  },
  {
    icon: Sparkles,
    title: "The Dying Spire",
    tag: "Daggerheart Module",
    desc: "A crumbling tower, ancient secrets, and high-stakes choices. Cinematic Daggerheart at its finest.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container mx-auto flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-2 font-display text-xl text-parchment">
            <Dice6 className="h-6 w-6 text-gold" />
            <span>Chaotic goof</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-parchment/80">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#systems" className="hover:text-gold transition-colors">Systems</a>
            <a href="#modules" className="hover:text-gold transition-colors">Adventures</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <Button asChild variant="default" className="bg-gradient-gold text-gold-foreground hover:opacity-90 border-0">
            <a href="#contact">Book a Session</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Candlelit table with dice, spellbook and maps"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container relative mx-auto py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/10 px-4 py-1.5 text-xs uppercase tracking-widest text-gold backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Professional Game Master for Hire
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold text-parchment text-balance leading-[1.05]">
              Unforgettable stories,<br />
              rolled at <span className="text-gold">your table</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-parchment/80 text-balance">
              Ten years of running Dungeons & Dragons and Daggerheart for players of every level.
              Tailored worlds, vivid NPCs, and nights you'll quote for years.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground hover:opacity-90 border-0 shadow-glow">
                <a href="#contact">Reserve Your Session</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-parchment/40 bg-transparent text-parchment hover:bg-parchment/10 hover:text-parchment">
                <a href="#services">View Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">What I Offer</p>
            <h2 className="mt-3 font-display md:text-5xl text-3xl text-foreground">Sessions crafted around you</h2>
            <p className="mt-4 text-muted-foreground">From a single legendary night to a saga that lasts a year. Every campaign is shaped by your group's tastes, pacing, and content preferences.</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="group relative overflow-hidden border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <CardContent className="p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold text-gold-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 flex items-baseline gap-2 border-t border-border pt-4">
                    <span className="font-display text-2xl text-foreground">{s.price}</span>
                    <span className="text-xs text-muted-foreground">{s.unit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Systems */}
      <section id="systems" className="bg-gradient-night py-24 md:py-32 text-parchment">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gold">Game Systems</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Uncharted Worlds. Unending stories.</h2>
              <p className="mt-4 text-parchment/70 max-w-md">
                Whether you crave the structured heroics of D&D or the cinematic flow of Daggerheart, I'll guide your party through it with care and craft.
              </p>
            </div>
            <div className="space-y-5">
              {systems.map((sys) => (
                <div key={sys.name} className="rounded-lg border border-parchment/15 bg-parchment/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Dice6 className="h-5 w-5 text-gold" />
                    <h3 className="font-display text-xl">{sys.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-parchment/70">{sys.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gold">About</p>
              <h2 className="mt-3 font-display text-4xl text-foreground">Your Game Master</h2>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a full-time Game Master with over a decade behind the screen. I've run hundreds of sessions — from one-shot heists to multi-year campaigns — for everyone from first-time rollers to veterans of the hobby. I've worked for Darrington Press as a GM and performed live at San Diego Comic Con, WonderCon, and LA Comic Con as well as in a variety of actual plays.
              </p>
              <p>
                My tables prioritize <span className="text-foreground font-medium">safety, inclusion, and great storytelling</span>. We use session zeros, consent tools, and pacing that gives everyone room to shine. My acting and improv skills ensure an epic, frequently surprising, immersive experience. Expect complex combat, 3D and 2D visuals of the world, and NPCs you'll genuinely miss when they're gone. I'm also a game designer, and can build you a custom subclass if you're interested in a unique gaming experience.
              </p>
              <br />
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { icon: Users, label: "200+", sub: "Players hosted" },
                  { icon: Scroll, label: "10 yrs", sub: "Behind the screen" },
                  { icon: Anvil, label: "1000+", sub: "Sessions run" },
                ].map((s) => (
                  <div key={s.sub} className="rounded-lg border border-border bg-card p-4 text-center">
                    <s.icon className="mx-auto h-5 w-5 text-gold" />
                    <div className="mt-2 font-display text-2xl text-foreground">{s.label}</div>
                    <div className="text-xs text-muted-foreground">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">Tales From The Table</p>
            <h2 className="mt-3 font-display text-4xl text-foreground">What players are saying</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border/60 bg-card">
                <CardContent className="p-7">
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-foreground leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <div className="font-medium text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-24 md:py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">Featured Adventures</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground">Popular modules I run</h2>
            <p className="mt-4 text-muted-foreground">From iconic published campaigns to bespoke arenas built for your friend group, here's a taste of what's on the menu.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <Card key={m.title} className="group border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <CardContent className="p-7">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-gold text-gold-foreground">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-gold">{m.tag}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-foreground">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-gradient-night py-24 md:py-32 text-parchment">
        <div className="container mx-auto max-w-3xl text-center">
          <Sparkles className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">Ready to roll initiative?</h2>
          <p className="mt-4 text-parchment/70 text-balance">
            Tell me about your group, the system you'd like to play, and the kind of story you're chasing. I'll reply within 48 hours with availability and a tailored proposal.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground hover:opacity-90 border-0 shadow-glow">
              <a href="mailto:dmchaoticgoof@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> dmchaoticgoof@gmail.com
              </a>
            </Button>
            <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground hover:opacity-90 border-0 shadow-glow">
              <a href="https://www.instagram.com/dmchaoticgoof/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" /> @dmchaoticgoof
              </a>
            </Button>
          </div>
          <p className="mt-6 text-xs text-parchment/50">Online sessions worldwide · In-person within Santa Barbara/LA area</p>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="container mx-auto flex flex-col gap-2 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
          <div className="flex items-center justify-center gap-2">
            <Dice6 className="h-4 w-4 text-gold" />
            <span className="font-display text-foreground">DM CHAOTIC GOOF</span>
          </div>
          <div>© {new Date().getFullYear()} · Crafted with d20s and care.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
