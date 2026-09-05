import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bike,
  ChefHat,
  CheckCircle2,
  ClipboardList,
  Crown,
  Flame,
  MapPin,
  Package,
  Radio,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UserRound,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const JOURNEY: { icon: LucideIcon; label: string; title: string; text: string }[] = [
  {
    icon: ShoppingBag,
    label: "01 · Order",
    title: "Pick from the live menu",
    text: "Browse the menu book, add slices & platters to your cart and check out with your saved address.",
  },
  {
    icon: CheckCircle2,
    label: "02 · Confirmed",
    title: "Kitchen accepts the ticket",
    text: "Your order lands on the staff console as a ticket. Once confirmed you get an estimated time.",
  },
  {
    icon: Flame,
    label: "03 · In the kitchen",
    title: "Fired over open charcoal",
    text: "The kitchen marks the ticket as cooking, then packed & sealed hot — you see every step live.",
  },
  {
    icon: Bike,
    label: "04 · On the way",
    title: "A rider picks it up",
    text: "The admin assigns a nearby rider. Track them on the map and call them from your profile.",
  },
  {
    icon: MapPin,
    label: "05 · Delivered",
    title: "Hot at your door",
    text: "The rider confirms delivery, cash or card is settled, and the order is saved to your history.",
  },
];

const ROLES: { icon: LucideIcon; title: string; points: string[] }[] = [
  {
    icon: UserRound,
    title: "Customer",
    points: ["Order & reorder favourites", "Live status + rider tracking", "Saved addresses & receipts"],
  },
  {
    icon: ChefHat,
    title: "Kitchen staff",
    points: ["Ticket queue in arrival order", "One-tap: confirm → cooking → packed", "Prep timers & notes per item"],
  },
  {
    icon: Bike,
    title: "Delivery rider",
    points: ["Accept jobs near you", "Turn-by-turn drop details", "Cash-in-hand & earnings ledger"],
  },
  {
    icon: Crown,
    title: "Owner / admin",
    points: ["Every order, customer & rider", "Assign riders, resolve issues", "Payments, payouts & reports"],
  },
];

const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Radio, title: "Live order status", text: "Pending, kitchen, packed, on the way, delivered — updated in real time." },
  { icon: ClipboardList, title: "One order, one ticket", text: "Every order becomes a single ticket that kitchen, rider and admin share." },
  { icon: Wallet, title: "Clear payments", text: "Cash or card per order, with rider cash-in-hand reconciled by the admin." },
  { icon: ShieldCheck, title: "Role-based access", text: "Staff and rider accounts are verified by the admin before they go live." },
  { icon: Package, title: "Sealed-hot packing", text: "Packed status is only set once the box is sealed, so timings stay honest." },
  { icon: Sparkles, title: "Built for phones", text: "Order, cook and deliver from a phone — no desk required." },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const fade = (i = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
});

export function PlatformGuide({ variant = "login" }: { variant?: "login" | "signup" }) {
  return (
    <section aria-labelledby="guide-title" className="relative mx-auto mt-14 w-full max-w-6xl pb-6 lg:mt-20">
      {/* Heading */}
      <motion.div {...fade()} className="mx-auto max-w-2xl text-center">
        <p className="font-display text-[11px] font-extrabold tracking-[0.28em] text-flame uppercase">
          {variant === "signup" ? "Before you join" : "How Kennedy works"}
        </p>
        <h2
          id="guide-title"
          className="mt-2 font-display text-2xl leading-tight font-black tracking-tight text-charcoal uppercase sm:text-3xl"
        >
          One order. One ticket. Kitchen, rider and you — all on the same page.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
          Kennedy Moon Grill runs on a single order pipeline. Whatever your role, your account opens the console
          that moves the order forward — here is the whole journey in five steps.
        </p>
      </motion.div>

      {/* Journey */}
      <ol className="relative mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {JOURNEY.map((s, i) => (
          <motion.li
            key={s.label}
            {...fade(i)}
            className="guide-step group relative rounded-[1.5rem] border-2 border-charcoal/8 bg-white/80 p-4 backdrop-blur-sm"
          >
            <span className="guide-step-num">{i + 1}</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-flame/12 text-flame transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <s.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-3 font-display text-[10px] font-extrabold tracking-[0.2em] text-flame uppercase">{s.label}</p>
            <h3 className="mt-1 font-display text-sm font-extrabold text-charcoal">{s.title}</h3>
            <p className="mt-1 text-[12px] leading-relaxed text-charcoal/65">{s.text}</p>
            {i < JOURNEY.length - 1 && <span className="guide-step-link" aria-hidden="true" />}
          </motion.li>
        ))}
      </ol>

      {/* Roles */}
      <div className="mt-12">
        <motion.p {...fade()} className="text-center font-display text-[11px] font-extrabold tracking-[0.28em] text-charcoal/55 uppercase">
          Who does what
        </motion.p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r, i) => (
            <motion.div
              key={r.title}
              {...fade(i)}
              className="rounded-[1.5rem] border-2 border-charcoal/8 bg-cream/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-flame/40 hover:shadow-[0_18px_40px_-24px_rgba(200,60,30,0.45)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-charcoal text-cream">
                  <r.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xs font-extrabold tracking-[0.14em] text-charcoal uppercase">{r.title}</h3>
              </div>
              <ul className="mt-3 space-y-1.5">
                {r.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[12px] leading-snug text-charcoal/70">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-flame" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-12">
        <motion.p {...fade()} className="text-center font-display text-[11px] font-extrabold tracking-[0.28em] text-charcoal/55 uppercase">
          Core features
        </motion.p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              {...fade(i)}
              className="flex gap-3 rounded-[1.25rem] border border-charcoal/8 bg-white/70 p-4"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-flame/12 text-flame">
                <f.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-[12px] font-extrabold text-charcoal">{f.title}</h3>
                <p className="mt-0.5 text-[12px] leading-relaxed text-charcoal/65">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footnote / CTA */}
      <motion.div
        {...fade()}
        className={cn(
          "mt-10 flex flex-col items-center justify-between gap-3 rounded-[1.5rem] bg-charcoal px-5 py-4 text-cream sm:flex-row",
        )}
      >
        <p className="text-center text-[12px] leading-relaxed text-cream/80 sm:text-left">
          {variant === "signup"
            ? "Customers are live instantly. Staff and rider applications are reviewed by the admin before the console unlocks."
            : "Your account role decides where you land: profile, kitchen console, rider console or admin."}
        </p>
        <Link
          to="/"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-flame px-5 py-2.5 font-display text-[11px] font-extrabold tracking-[0.16em] text-cream uppercase transition hover:bg-flame-dark"
        >
          <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" /> Browse the menu
        </Link>
      </motion.div>
    </section>
  );
}
