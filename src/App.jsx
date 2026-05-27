import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck, Bot, BriefcaseBusiness, CalendarDays, CheckCircle, CreditCard,
  GraduationCap, LockKeyhole, Mail, MapPin, MessageCircle, Phone, PlayCircle,
  ShieldCheck, ShoppingCart, Sparkles, Store, Truck, ArrowRight
} from "lucide-react";

const PHONE = "+17867625663";
const EMAIL = "info@jleefantasy.com";
const WHATSAPP_URL = "https://wa.me/17867625663";
const EMAIL_URL = "mailto:info@jleefantasy.com?subject=Consultation Request - J-LEE Fantasy Services";
const CALENDLY_URL = "https://calendly.com/j-lee-fantasy-services";
const FACEBOOK_URL = "https://www.facebook.com/";
const INSTAGRAM_URL = "https://www.instagram.com/";
const TIKTOK_URL = "https://www.tiktok.com/";

function Button({ children, className = "", variant = "default", type = "button", ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2";
  const styles = variant === "outline"
    ? "border border-slate-300 bg-white text-slate-950 hover:bg-slate-100"
    : "bg-slate-950 text-white hover:bg-blue-900";
  return <button type={type} className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl bg-white ${className}`}>{children}</div>;
}
function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
function LinkButton({ href, children, className = "", variant = "default", external = false }) {
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><Button variant={variant} className={className}>{children}</Button></a>;
}

const services = [
  { title: "Business Coaching", description: "Strategic guidance for entrepreneurs, startups, and growing businesses ready to move from vision to execution.", icon: BriefcaseBusiness },
  { title: "Ecommerce Solutions", description: "TikTok Shop, Shopify, Amazon, product listings, store setup, digital selling strategy, and ecommerce growth support.", icon: ShoppingCart },
  { title: "Logistics Support", description: "Operational support for delivery, transportation, dispatch coordination, and logistics improvement.", icon: Truck },
  { title: "AI Academy", description: "AI training, video courses, certifications, quizzes, and private learning access for individuals and businesses.", icon: Bot },
  { title: "Workplace & Safety Training", description: "Professional safety training, workplace awareness, leadership, compliance, and prevention-focused education.", icon: ShieldCheck },
  { title: "Credit Management & Repair", description: "Credit education, credit management guidance, financial organization, and repair support services.", icon: CreditCard },
];

const packages = [
  { name: "Starter Consultation", price: "$149", description: "For individuals, new entrepreneurs, or first-time sellers.", items: ["1-on-1 discovery session", "Basic business direction", "Ecommerce recommendations", "AI tool introduction", "Credit improvement tips"] },
  { name: "Professional Growth", price: "$499", description: "For growing entrepreneurs and ecommerce sellers ready to execute.", items: ["Business coaching session", "TikTok/Shopify/Amazon guidance", "Store setup roadmap", "Logistics/safety consultation", "Priority support"], featured: true },
  { name: "Elite Enterprise", price: "Custom", description: "For full business transformation, training, and long-term support.", items: ["Full strategy plan", "Advanced ecommerce support", "Team training", "AI integration planning", "VIP consulting"] },
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
  console.assert(packages.length === 3, "Expected 3 service packages.");
  console.assert(CALENDLY_URL === "https://calendly.com/j-lee-fantasy-services", "Expected Calendly URL to match user link.");
  console.assert(WHATSAPP_URL === "https://wa.me/17867625663", "Expected WhatsApp URL to be formatted correctly.");
  console.assert(EMAIL_URL.includes("mailto:"), "Expected email link to use mailto.");
}
if (typeof window !== "undefined") runSelfTests();

function SocialIcon({ label, href }) {
  return <a aria-label={label} title={label} href={href} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-black text-white transition hover:bg-[#D4AF37] hover:text-slate-950">{label.charAt(0)}</a>;
}

function CalendlyEmbed() {
  return (
    <iframe
      title="Schedule a consultation with J-LEE FANTASY SERVICES LLC"
      src={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=0f2d5c`}
      className="h-[760px] w-full rounded-[1.25rem] border-0 bg-white"
      loading="lazy"
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="J-LEE FANTASY SERVICES LLC Logo" className="h-14 w-14 rounded-2xl object-cover shadow-lg" />
            <div>
              <p className="text-lg font-extrabold tracking-tight">J-LEE FANTASY SERVICES LLC</p>
              <p className="text-xs font-medium text-slate-500">Your Vision. Our Execution.</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#home" className="hover:text-blue-800">Home</a>
            <a href="#services" className="hover:text-blue-800">Services</a>
            <a href="#academy" className="hover:text-blue-800">AI Academy</a>
            <a href="#store" className="hover:text-blue-800">Store</a>
            <a href="#pricing" className="hover:text-blue-800">Pricing</a>
            <a href="#booking" className="hover:text-blue-800">Booking</a>
            <a href="#contact" className="hover:text-blue-800">Contact</a>
          </nav>
          <LinkButton href="#booking" className="bg-slate-950 text-white hover:bg-blue-900">Book Consultation</LinkButton>
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
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm"><CheckCircle size={16} /> Professional services for modern growth</div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">Helping people and businesses grow through coaching, training, ecommerce, and smart solutions.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">J-LEE FANTASY SERVICES LLC provides business coaching, logistics support, ecommerce guidance, AI certification, workplace safety training, credit management, and more.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="#booking" className="bg-blue-700 px-7 py-6 text-base hover:bg-blue-800">Book an Appointment <ArrowRight className="ml-2" size={18} /></LinkButton>
                <LinkButton href="#services" variant="outline" className="px-7 py-6 text-base">Explore Services</LinkButton>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Card className="overflow-hidden rounded-[2rem] border-0 shadow-2xl">
                <CardContent className="p-0">
                  <div className="flex min-h-[430px] items-center justify-center bg-gradient-to-br from-blue-800 via-indigo-700 to-slate-900 p-8 text-center text-white">
                    <div>
                      <img src="/logo.png" alt="J-LEE Logo" className="mx-auto mb-5 h-40 w-auto rounded-3xl bg-white/95 p-2 shadow-2xl" />
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
              <p className="font-bold text-[#B8860B]">Our Services</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Premium solutions for growth, success, and execution</h2>
              <p className="mt-4 text-slate-700">Built for small business owners, Amazon and TikTok sellers, logistics companies, young entrepreneurs, students, corporate clients, and individuals needing credit support.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div key={service.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }}>
                    <Card className="h-full border border-slate-100 shadow-md transition hover:-translate-y-1 hover:shadow-2xl">
                      <CardContent className="p-7">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-slate-950 p-3 text-[#D4AF37]"><Icon size={25} /></div>
                        <h3 className="text-xl font-black">{service.title}</h3>
                        <p className="mt-3 leading-7 text-slate-700">{service.description}</p>
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
              <p className="font-bold text-[#B8860B]">About J-LEE</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Built from leadership, operations, safety, technology, and vision.</h2>
            </div>
            <div className="text-lg leading-8 text-slate-700">
              <p>J-LEE FANTASY SERVICES LLC was created because the world is evolving, and technology and ecommerce are in high demand. With experience as an Amazon WHS Specialist and Operations Manager, our founder brings real-world leadership, safety, operations, and business execution experience to help others grow while creating services that generate income and serve people.</p>
              <p className="mt-5">What makes J-LEE different is vision, leadership principles, and a commitment to helping the future generation build confidence, opportunity, and success.</p>
            </div>
          </div>
        </section>

        <section id="academy" className="px-6 py-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="font-bold text-[#D4AF37]">AI Academy</p>
                <h2 className="mt-2 text-3xl font-black md:text-4xl">Learn AI. Earn certificates. Build future-ready skills.</h2>
                <p className="mt-4 text-slate-200">The AI Academy will offer video courses, quizzes, certifications, and private member access designed for students, entrepreneurs, workers, and business owners.</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href={EMAIL_URL} className="bg-[#D4AF37] text-slate-950 hover:bg-[#C9A227]">Request Course Info</LinkButton>
                  <LinkButton href={WHATSAPP_URL} external className="bg-white text-slate-950 hover:bg-slate-100">Chat on WhatsApp</LinkButton>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {courseFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return <div key={feature.title} className="rounded-3xl bg-white/10 p-5 backdrop-blur-sm"><Icon className="mb-3 text-[#D4AF37]" size={28} /><p className="font-bold">{feature.title}</p></div>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="store" className="bg-white px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="font-bold text-[#B8860B]">Ecommerce Store</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">A future-ready online store for products, services, courses, and memberships.</h2>
                <p className="mt-4 text-slate-700">The platform will be designed to sell physical products, digital courses, consulting packages, and memberships while connecting with TikTok Shop and Shopify.</p>
                <div className="mt-6 flex flex-wrap gap-3">{storeTags.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700">{item}</span>)}</div>
              </div>
              <Card className="border-0 bg-gradient-to-br from-blue-900 to-slate-950 text-white shadow-2xl">
                <CardContent className="p-8">
                  <Store className="mb-5 text-[#D4AF37]" size={48} />
                  <h3 className="text-2xl font-black">Product Showcase Coming Soon</h3>
                  <p className="mt-3 text-slate-200">Featured products, courses, and service packages will appear here.</p>
                  <LinkButton href="#pricing" className="mt-6 bg-[#D4AF37] text-slate-950 hover:bg-[#C9A227]">View Service Packages</LinkButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="font-bold text-[#B8860B]">Service Packages</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Flexible ways to work with us</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-700">Choose a starting package or request a custom quote based on your business needs.</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {packages.map((pkg) => (
                <Card key={pkg.name} className={`relative border shadow-lg ${pkg.featured ? "border-[#D4AF37] shadow-2xl" : "border-slate-100"}`}>
                  {pkg.featured && <div className="absolute right-5 top-5 rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-slate-950">Popular</div>}
                  <CardContent className="p-7">
                    <h3 className="text-2xl font-black">{pkg.name}</h3>
                    <p className="mt-2 text-3xl font-black text-blue-900">{pkg.price}</p>
                    <p className="mt-3 text-slate-700">{pkg.description}</p>
                    <div className="mt-6 space-y-3">
                      {pkg.items.map((item) => <div key={item} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle className="mt-0.5 text-[#B8860B]" size={18} /><span>{item}</span></div>)}
                    </div>
                    <LinkButton href="#booking" className={`mt-7 w-full ${pkg.featured ? "bg-[#D4AF37] text-slate-950 hover:bg-[#C9A227]" : ""}`}>Choose Package</LinkButton>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {paymentMethods.map((method) => <Card key={method} className="border-0 text-center shadow-md"><CardContent className="p-6"><CreditCard className="mx-auto mb-3 text-blue-900" size={28} /><p className="font-black">{method}</p></CardContent></Card>)}
            </div>
          </div>
        </section>

        <section id="booking" className="relative overflow-hidden bg-white px-6 py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#FFF8E1_0%,#FFFFFF_38%,#F8FAFC_100%)]" />
          <div className="absolute left-0 top-24 -z-10 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-white px-5 py-2 text-sm font-black uppercase tracking-wide text-[#B8860B] shadow-sm">
                <Sparkles size={16} /> Luxury Booking Experience
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight text-[#07111F] md:text-6xl">
                Schedule Your <span className="block bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#8B6508] bg-clip-text text-transparent">Consultation</span>
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-8 text-slate-700">
                Choose the best time to discuss your business vision, ecommerce goals, AI training needs,
                logistics support, workplace safety training, or credit management plan.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="space-y-5">
                <Card className="overflow-hidden border border-slate-200 bg-white shadow-2xl">
                  <div className="flex items-center gap-4 bg-[#07111F] px-6 py-5 text-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/60 bg-[#D4AF37]/10">
                      <CalendarDays className="text-[#D4AF37]" size={28} />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-wide">What to Expect</h3>
                  </div>
                  <CardContent className="p-7">
                    <div className="space-y-6 text-slate-800">
                      <div className="flex gap-4">
                        <CheckCircle className="mt-1 shrink-0 text-[#D4AF37]" size={24} />
                        <div>
                          <p className="font-black text-[#07111F]">Professional Consultation</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">A professional consultation based on your specific goals and needs.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <CheckCircle className="mt-1 shrink-0 text-[#D4AF37]" size={24} />
                        <div>
                          <p className="font-black text-[#07111F]">Clear Recommendations</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">Clear, actionable recommendations for your next steps.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <CheckCircle className="mt-1 shrink-0 text-[#D4AF37]" size={24} />
                        <div>
                          <p className="font-black text-[#07111F]">Comprehensive Support</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">Support for ecommerce, AI, logistics, safety, business, or credit needs.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border border-slate-200 bg-white shadow-2xl">
                  <div className="flex items-center gap-4 bg-[#07111F] px-6 py-5 text-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/60 bg-[#D4AF37]/10">
                      <MessageCircle className="text-[#D4AF37]" size={28} />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-wide">Need Help Booking?</h3>
                  </div>
                  <CardContent className="p-7">
                    <p className="text-base font-medium leading-7 text-slate-700">
                      You can also reach us directly by phone, WhatsApp, or email.
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                      <LinkButton href={WHATSAPP_URL} external className="w-full bg-[#D4AF37] text-[#07111F] hover:bg-[#C9A227]">
                        Chat on WhatsApp
                      </LinkButton>
                      <LinkButton href={EMAIL_URL} className="w-full border border-[#07111F] bg-white text-[#07111F] hover:bg-slate-100">
                        Email Us
                      </LinkButton>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-[2rem] border border-[#D4AF37] bg-[#07111F] p-4 shadow-2xl">
                <div className="rounded-[1.5rem] bg-white p-3">
                  <CalendlyEmbed />
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {[
                ["Secure & Confidential", "Your information is safe and protected."],
                ["Flexible Scheduling", "Choose a time that works best for you."],
                ["Expert Guidance", "Get personalized advice from business-focused support."],
                ["Results Focused", "We focus on strategies that drive real results."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg">
                  <p className="font-black text-[#07111F]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white px-6 py-16">
          <div className="mx-auto max-w-7xl text-center">
            <p className="font-bold text-[#B8860B]">Testimonials</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Client success stories will be featured here</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-700">As J-LEE grows, this section will showcase reviews, business wins, course graduates, and client transformations.</p>
          </div>
        </section>

        <section id="contact" className="px-6 py-16">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-[#07111F] via-[#0B2A55] to-[#05070A] p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="font-bold text-[#D4AF37]">Contact</p>
                <h2 className="mt-2 text-3xl font-black md:text-4xl">Ready to turn your vision into execution?</h2>
                <p className="mt-4 text-slate-200">Book a consultation, request service information, join the AI Academy, or connect with us for ecommerce, logistics, safety, credit, and business growth solutions.</p>
                <div className="mt-6 flex gap-3"><SocialIcon label="Facebook" href={FACEBOOK_URL} /><SocialIcon label="Instagram" href={INSTAGRAM_URL} /><SocialIcon label="TikTok" href={TIKTOK_URL} /></div>
              </div>
              <div className="space-y-4 text-slate-200">
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-[#D4AF37]"><Phone size={20} className="text-[#D4AF37]" /> +1 786 762 5663</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#D4AF37]"><MessageCircle size={20} className="text-[#D4AF37]" /> WhatsApp: +1 786 762 5663</a>
                <a href={EMAIL_URL} className="flex items-center gap-3 hover:text-[#D4AF37]"><Mail size={20} className="text-[#D4AF37]" /> info@jleefantasy.com</a>
                <div className="flex items-center gap-3"><MapPin size={20} className="text-[#D4AF37]" /> 137 N Olympic Ave, Arlington, WA</div>
                <div className="rounded-3xl bg-white/10 p-5"><p className="font-bold text-[#D4AF37]">Official Domain</p><p className="mt-1">jleefantasy.com</p></div>
                <div className="flex flex-col gap-3 sm:flex-row"><LinkButton href="#booking" className="bg-[#D4AF37] text-slate-950 hover:bg-[#C9A227]">Book Now</LinkButton><LinkButton href={EMAIL_URL} className="bg-white text-slate-950 hover:bg-slate-100">Email Us</LinkButton></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white px-6 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} J-LEE FANTASY SERVICES LLC. All rights reserved. | Your Vision. Our Execution.</footer>
    </div>
  );
}
