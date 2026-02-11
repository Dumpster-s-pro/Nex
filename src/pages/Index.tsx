import { motion } from "framer-motion";
import { ArrowRight, Layers, Eye, Zap, BrainCircuit, MessageSquareX, Clock, SearchSlash, Shuffle, Rocket, ShieldCheck, BarChart3, Sparkles, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight font-['Space_Grotesk']">
            <span className="text-primary">Nexo</span>
            <span className="text-accent">.</span>
          </span>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Get Early Access
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(230_65%_52%/0.08),transparent_70%)]" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(170_60%_45%/0.06),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Redefining Project Collaboration
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            One Ecosystem.
            <br />
            <span className="text-primary">Infinite Alignment.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We're building the digital backbone for large-scale projects — where every stakeholder stays connected, every decision is informed, and every milestone moves faster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base gap-2 shadow-lg shadow-primary/20">
              Join Early Access <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-border hover:bg-muted">
              Learn More
            </Button>
          </motion.div>
        </div>
        {/* Abstract grid */}
        <div className="max-w-5xl mx-auto mt-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur p-1 shadow-2xl shadow-primary/5"
          >
            <div className="rounded-xl bg-gradient-to-br from-muted/50 to-card p-8 md:p-12">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg ${
                      i % 5 === 0
                        ? "bg-primary/15"
                        : i % 3 === 0
                        ? "bg-accent/15"
                        : "bg-muted"
                    } transition-colors hover:bg-primary/20`}
                  />
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <div className="flex-1 h-3 rounded-full bg-primary/20" />
                <div className="w-1/4 h-3 rounded-full bg-accent/20" />
                <div className="w-1/6 h-3 rounded-full bg-muted" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              The Problem
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Complexity Shouldn't Mean Chaos
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-xl mx-auto text-lg">
              Large-scale projects are plagued by invisible bottlenecks that cost time, money, and momentum.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: MessageSquareX, title: "Fragmented Communication", desc: "Critical information scattered across channels, emails, and calls — never in one place." },
              { icon: Clock, title: "Delayed Updates", desc: "Decisions stall when teams wait days for status reports that should flow in real-time." },
              { icon: SearchSlash, title: "Zero Centralized Visibility", desc: "No single source of truth means no one sees the full picture until it's too late." },
              { icon: Shuffle, title: "Coordination Breakdown", desc: "Misaligned teams, duplicated effort, and missed handoffs erode project velocity." },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i}>
                <Card className="bg-card border-border/60 h-full hover:border-primary/30 transition-colors group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
                Our Vision
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                A Unified Digital
                <br />
                <span className="text-primary">Collaboration Ecosystem</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed mb-6">
                We envision a world where every professional on a project — regardless of role or location — operates from the same intelligent platform. One that surfaces the right information at the right time, keeps everyone aligned, and turns complexity into clarity.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
                This isn't another tool. It's an ecosystem designed to elevate how teams think, decide, and deliver — together.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Layers, label: "Unified Platform" },
                  { icon: Eye, label: "Full Visibility" },
                  { icon: Zap, label: "Real-time Sync" },
                  { icon: BrainCircuit, label: "Smart Insights" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`p-6 rounded-2xl border border-border/60 bg-card flex flex-col items-center text-center gap-3 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 ${
                      i === 1 || i === 2 ? "translate-y-4" : ""
                    }`}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="font-semibold text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-primary/[0.03]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Key Benefits
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Outcomes That Matter
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { icon: Rocket, title: "Faster Project Execution", desc: "Eliminate delays caused by information gaps. Move from plan to delivery with unprecedented speed." },
              { icon: ShieldCheck, title: "Better Transparency", desc: "Every stakeholder sees what matters — progress, blockers, and milestones — without chasing updates." },
              { icon: Zap, title: "Reduced Operational Friction", desc: "Streamlined handoffs, fewer meetings, and less time wasted on coordination overhead." },
              { icon: BarChart3, title: "Smarter Project Insights", desc: "Turn raw project data into actionable intelligence that drives better decisions at every level." },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i}>
                <div className="flex gap-5 p-6 rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Direction */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(170_60%_45%/0.06),transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              What's Next
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Building the Future of
              <br />
              <span className="text-primary">Intelligent Collaboration</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              We're pioneering the next wave of digital transformation — where AI-driven insights, predictive workflows, and autonomous coordination converge to make project execution not just faster, but fundamentally smarter.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap justify-center gap-3"
            >
              {["AI-Driven Insights", "Predictive Analytics", "Smart Automation", "Digital Transformation"].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Get In Touch
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Let's Shape the Future Together
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're an early adopter, a potential partner, or simply curious — we'd love to hear from you. Join us in redefining how the world builds.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@nexo.dev</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Global — Remote First</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border/60">
                <CardContent className="p-8 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Name</label>
                      <Input placeholder="Your name" className="bg-muted/50 border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email</label>
                      <Input placeholder="you@company.com" className="bg-muted/50 border-border" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Subject</label>
                    <Input placeholder="Partnership, Early Access, General Inquiry" className="bg-muted/50 border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <Textarea placeholder="Tell us what you're building or how we can work together..." rows={4} className="bg-muted/50 border-border" />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold tracking-tight font-['Space_Grotesk']">
            <span className="text-primary">Nexo</span>
            <span className="text-accent">.</span>
          </span>
          <p className="text-sm text-muted-foreground">
            © 2026 Nexo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
