import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck, Bot, BriefcaseBusiness, CheckCircle, CreditCard, GraduationCap,
  LockKeyhole, Mail, MapPin, MessageCircle, Phone, PlayCircle, ShieldCheck,
  ShoppingCart, Star, Store, Truck, ArrowRight
} from "lucide-react";

function Button({ children, className = "", variant = "default" }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2";
  const styles = variant === "outline"
    ? "border border-slate-300 bg-white text-slate-950 hover:bg-slate-100"
    : "bg-slate-950 text-white hover:bg-blue-900";
  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl bg-white ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const services = [
  { title: "Business Coaching", description: "Strategic guidance for entrepreneurs, startups, and growing businesses ready to move from vision to execution.", icon: BriefcaseBusiness },
  { title: "Ecommerce Solutions", description: "TikTok Shop, Shopify, Amazon, product listings, store setup, digital selling strategy, and ecommerce growth support.", icon: ShoppingCart },
  { title: "Logistics Support", description: "Operational support for delivery, transportation, dispatch coordination, and logistics improvement.", icon: Truck },
  { title: "AI Academy", description: "AI training, video courses, certifications, quizzes, and private learning access for individuals and businesses.", icon: Bot },
  { title: "Workplace & Safety Training", description: "Professional safety training, workplace awareness, leadership, compliance, and prevention-focused education.", icon: ShieldCheck },
  { title: "Credit Management & Repair", description: "Credit education, credit management guidance, financial organization, and repair support services.", icon: CreditCard },
];

const courseFeatures = [
  { title: "Video Courses", icon: PlayCircle },
  { title: "Certifications", icon: BadgeCheck },
  { title: "Quizzes", icon: GraduationCap },
  { title: "Private Member Access", icon: LockKeyhole },
];

const paymentMethods = ["Credit/Debit Card", "PayPal", "CashApp", "Zelle"];
const storeTags = ["TikTok Shop", "Shopify", "Amazon", "Digital Courses", "Memberships"];

function runSelfTests() {
  console.assert(services.length === 6, "Expected 6 core services.");
  console.assert(services.some((service) => service.title === "Ecommerce Solutions"), "Expected Ecommerce Solutions service to be present.");
  console.assert(courseFeatures.length === 4, "Expected 4 course feature cards.");
  console.assert(paymentMethods.includes("Credit/Debit Card") && paymentMethods.includes("PayPal"), "Expected primary payment methods to be present.");
  console.assert(typeof CheckCircle === "function" || typeof CheckCircle === "object", "Expected CheckCircle icon import to be available.");
  console.assert(storeTags.includes("TikTok Shop") && storeTags.includes("Shopify"), "Expected store integrations to include TikTok Shop and Shopify.");
}

if (typeof window !== "undefined") runSelfTests();

function SocialIcon({ label }) {
  return (
    <div aria-label={label} title={label} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-black text-white transition hover:bg-yellow-500 hover:text-slate-950">
      {label.charAt(0)}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-blue-900 to-yellow-500 text-white shadow-lg"><Star size={23} /></div>
            <div>
              <p className="text-lg font-extrabold tracking-tight">J-LEE FANTASY SERVICES LLC</p>
              <p className="text-xs font-medium text-slate-500">Your Vision. Our Execution.</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#home" className="hover:text-blue-800">Home</a>
            <a href="#services" className="hover:text-blue-800">Services</a>
            <a href="#academy" className="hover:text-blue-800">AI Academy</a>
            <a href="#store" className="hover:text-blue-800">Store</a>
            <a href="#pricing" className="hover:text-blue-800">Pricing</a>
            <a href="#contact" className="hover:text-blue-800">Contact</a>
          </nav>
          <a href="#contact"><Button>Book Consultation</Button></a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden px-6 py-20 md:py-28">
          <div className="absolute inset-0 -z-10 opacity-40">
            <div className="absolute left-10 top-20 h-56 w-56 rounded-full bg-blue-300 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-yellow-300 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                <CheckCircle size={16} /> Professional services for modern growth
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Helping people and businesses grow through coaching, training, ecommerce, and smart solutions.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                J-LEE FANTASY SERVICES LLC provides business coaching, logistics support, ecommerce guidance, AI certification, workplace safety training, credit management, and more.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact"><Button className="bg-blue-700 px-7 py-6 text-base hover:bg-blue-800">Request a Consultation <ArrowRight className="ml-2" size={18} /></Button></a>
                <a href="#services"><Button variant="outline" className="px-7 py-6 text-base">Explore Services</Button></a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Card className="overflow-hidden rounded-[2rem] border-0 shadow-2xl">
                <CardContent className="p-0">
                  <div className="flex h-[430px] items-center justify-center bg-gradient-to-br from-blue-800 via-indigo-700 to-slate-900 p-8 text-center text-white">
                    <div>
                      <BriefcaseBusiness className="mx-auto mb-5" size={58} />
                      <h2 className="text-4xl font-bold">Your Growth Partner</h2>
                      <p className="mt-4 text-lg text-white/90">Coaching • Ecommerce • Logistics • AI • Safety • Credit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="services" className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-bold text-yellow-600">Our Services</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Premium solutions for growth, success, and execution</h2>
              <p className="mt-4 text-slate-600">Built for small business owners, Amazon and TikTok sellers, logistics companies, young entrepreneurs, students, corporate clients, and individuals needing credit support.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div key={service.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }}>
                    <Card className="h-full border border-slate-100 shadow-md transition hover:-translate-y-1 hover:shadow-2xl">
                      <CardContent className="p-7">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-slate-950 p-3 text-yellow-400"><Icon size={25} /></div>
                        <h3 className="text-xl font-black">{service.title}</h3>
                        <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <p className="font-bold text-yellow-600">About J-LEE</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Built from leadership, operations, safety, technology, and vision.</h2>
            </div>
            <div className="text-lg leading-8 text-slate-600">
              <p>J-LEE FANTASY SERVICES LLC was created because the world is evolving, and technology and ecommerce are in high demand. With experience as an Amazon WHS Specialist and Operations Manager, our founder brings real-world leadership, safety, operations, and business execution experience to help others grow while creating services that generate income and serve people.</p>
              <p className="mt-5">What makes J-LEE different is vision, leadership principles, and a commitment to helping the future generation build confidence, opportunity, and success.</p>
            </div>
          </div>
        </section>

        <section id="academy" className="px-6 py-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="font-bold text-yellow-400">AI Academy</p>
                <h2 className="mt-2 text-3xl font-black md:text-4xl">Learn AI. Earn certificates. Build future-ready skills.</h2>
                <p className="mt-4 text-slate-300">The AI Academy will offer video courses, quizzes, certifications, and private member access designed for students, entrepreneurs, workers, and business owners.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {courseFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return <div key={feature.title} className="rounded-3xl bg-white/10 p-5 backdrop-blur-sm"><Icon className="mb-3 text-yellow-400" size={28} /><p className="font-bold">{feature.title}</p></div>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="store" className="bg-white px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="font-bold text-yellow-600">Ecommerce Store</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">A future-ready online store for products, services, courses, and memberships.</h2>
                <p className="mt-4 text-slate-600">The platform will be designed to sell physical products, digital courses, consulting packages, and memberships while connecting with TikTok Shop and Shopify.</p>
                <div className="mt-6 flex flex-wrap gap-3">{storeTags.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700">{item}</span>)}</div>
              </div>
              <Card className="border-0 bg-gradient-to-br from-blue-900 to-slate-950 text-white shadow-2xl">
                <CardContent className="p-8">
                  <Store className="mb-5 text-yellow-400" size={48} />
                  <h3 className="text-2xl font-black">Product Showcase Coming Soon</h3>
                  <p className="mt-3 text-slate-300">Featured products, courses, and service packages will appear here.</p>
                  <Button className="mt-6 bg-yellow-500 text-slate-950 hover:bg-yellow-400">View Store Preview</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="font-bold text-yellow-600">Pricing & Payments</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Flexible ways to work with us</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">Service pricing will be customized based on client needs. Payments will support multiple convenient options.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {paymentMethods.map((method) => <Card key={method} className="border-0 text-center shadow-md"><CardContent className="p-6"><CreditCard className="mx-auto mb-3 text-blue-900" size={28} /><p className="font-black">{method}</p></CardContent></Card>)}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white px-6 py-16">
          <div className="mx-auto max-w-7xl text-center">
            <p className="font-bold text-yellow-600">Testimonials</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Client success stories will be featured here</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">As J-LEE grows, this section will showcase reviews, business wins, course graduates, and client transformations.</p>
          </div>
        </section>

        <section id="contact" className="px-6 py-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="font-bold text-yellow-400">Contact</p>
                <h2 className="mt-2 text-3xl font-black md:text-4xl">Ready to turn your vision into execution?</h2>
                <p className="mt-4 text-slate-300">Book a consultation, request service information, join the AI Academy, or connect with us for ecommerce, logistics, safety, credit, and business growth solutions.</p>
                <div className="mt-6 flex gap-3"><SocialIcon label="Facebook" /><SocialIcon label="Instagram" /><SocialIcon label="TikTok" /></div>
              </div>
              <div className="space-y-4 text-slate-200">
                <div className="flex items-center gap-3"><Phone size={20} className="text-yellow-400" /> +1 786 762 5663</div>
                <div className="flex items-center gap-3"><MessageCircle size={20} className="text-yellow-400" /> WhatsApp: +1 786 762 5663</div>
                <div className="flex items-center gap-3"><Mail size={20} className="text-yellow-400" /> Business email: Coming Soon</div>
                <div className="flex items-center gap-3"><MapPin size={20} className="text-yellow-400" /> 137 N Olympic Ave, Arlington, WA</div>
                <div className="rounded-3xl bg-white/10 p-5"><p className="font-bold text-yellow-400">Planned Domain</p><p className="mt-1">jleefantasy.com</p></div>
                <Button className="mt-4 bg-yellow-500 px-7 py-6 text-base font-bold text-slate-950 hover:bg-yellow-400">Request Consultation</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} J-LEE FANTASY SERVICES LLC. All rights reserved. | Your Vision. Our Execution.
      </footer>
    </div>
  );
}
