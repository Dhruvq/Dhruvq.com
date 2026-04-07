import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center px-4 sm:px-8 py-8 md:py-16 selection:bg-neon-purple selection:text-white max-w-5xl mx-auto w-full">
      {/* Navigation / Top Bar */}
      <nav className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-white">
            Dhruv Thippasandra
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-neon-green glow-green"></span>
            <span className="text-xs uppercase tracking-wider text-neon-green font-mono">
              Status: Graduating Dec '26
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-3 w-full sm:w-auto">
          <Link
            href="/current_resume.pdf"
            target="_blank"
            className="inline-flex w-full sm:w-56 h-10 items-center justify-center rounded-md bg-neon-purple px-6 text-sm font-medium text-white transition-all glow-purple hover:glow-purple-hover"
          >
            [Download Resume PDF]
          </Link>
          <Link
            href="https://github.com/Dhruvq"
            target="_blank"
            className="inline-flex w-full sm:w-56 h-10 items-center justify-center rounded-md bg-neon-purple px-6 text-sm font-medium text-white transition-all glow-purple hover:glow-purple-hover"
          >
            GitHub ↗
          </Link>
          <Link
            href="https://www.linkedin.com/in/dhruv-thippasandra/"
            target="_blank"
            className="inline-flex w-full sm:w-56 h-10 items-center justify-center rounded-md bg-neon-purple px-6 text-sm font-medium text-white transition-all glow-purple hover:glow-purple-hover"
          >
            LinkedIn ↗
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full mb-16 max-w-3xl mr-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-neutral-white leading-tight mb-4 tracking-tight">
          Software Engineer building Scalable, Data-driven <span className="text-neon-green">Systems</span>
        </h2>
        <p className="text-lg text-dimmed-zinc leading-relaxed">
          Focused on machine learning infrastructure, experimentation, and real-world deployment
        </p>
      </section>

      {/* Experience & Education */}
      <section className="w-full grid md:grid-cols-2 gap-12 mb-20">
        {/* Experience */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs text-dimmed-zinc uppercase tracking-widest font-mono border-b border-white/10 pb-4">
            Experience
          </h3>
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-1">
              <span className="text-sm font-mono text-neon-green">Jun 2026 - Aug 2026</span>
              <span className="text-neutral-white font-medium text-lg">Systems Engineering Intern</span>
              <span className="text-dimmed-zinc">AT&amp;T (Incoming)</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-sm font-mono text-neon-green">Sep 2025 - Jan 2026</span>
              <span className="text-neutral-white font-medium text-lg">Machine Learning Engineer</span>
              <span className="text-dimmed-zinc">Mercor</span>
              <p className="text-sm text-dimmed-zinc/80 mt-2">
                Drafting detailed NLP pipelines, ML agent plans, and implementing containerized Python environments for rigorous model evaluation.
              </p>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs text-dimmed-zinc uppercase tracking-widest font-mono border-b border-white/10 pb-4">
            Education
          </h3>
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-1">
              <span className="text-sm font-mono text-neon-green">Aug 2025 - Dec 2026 (Expected)</span>
              <span className="text-neutral-white font-medium text-lg">M.S. Electrical Engineering (Data Science)</span>
              <span className="text-dimmed-zinc">University of Southern California</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-sm font-mono text-neon-green">Sep 2022 - Jun 2025</span>
              <span className="text-neutral-white font-medium text-lg">B.S. Electrical Engineering</span>
              <span className="text-dimmed-zinc">University of California, Riverside (Cum Laude)</span>
              <div className="text-sm text-dimmed-zinc/80 mt-2 flex flex-col gap-1">
                <p>GPA: 3.77</p>
                <div className="opacity-80 mt-1 flex flex-col leading-snug">
                  <span>Graduated Cum Laude</span>
                  <span>Chancellor’s Honors List (All years)</span>
                  <span>Dean’s Honors List (All quarters)</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Quick Hits / Projects */}
      <section className="w-full flex flex-col gap-6 mb-20">
        <h3 className="text-xs text-dimmed-zinc uppercase tracking-widest font-mono border-b border-white/10 pb-4 mb-2">
          Projects / Quick Hits
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Network Deg */}
          <Link href="https://networkdeg.dhruvq.com/" target="_blank" className="glass-panel p-6 rounded-xl flex flex-col gap-3 group transition-all duration-300 hover:border-neon-purple/50">
            <div className="flex justify-between items-start">
              <h4 className="text-neutral-white font-bold group-hover:text-neon-purple transition-colors">AI Network Degradation</h4>
              <span className="text-xs text-dimmed-zinc font-mono border border-white/10 px-2 py-0.5 rounded">Live on AWS ↗</span>
            </div>
            <p className="text-sm text-dimmed-zinc flex-1">
              Predicts short-term network performance degradation using internet telemetry (RIPE Atlas) via XGBoost with SMOTE.
            </p>
          </Link>

          {/* Apollo */}
          <Link href="https://dhruvq.github.io/Apollo-AI-Research-Analyst/demo.html" target="_blank" className="glass-panel p-6 rounded-xl flex flex-col gap-3 group transition-all duration-300 hover:border-neon-purple/50">
            <div className="flex justify-between items-start">
              <h4 className="text-neutral-white font-bold group-hover:text-neon-purple transition-colors">Apollo AI</h4>
              <span className="text-xs text-dimmed-zinc font-mono border border-white/10 px-2 py-0.5 rounded">Demo ↗</span>
            </div>
            <p className="text-sm text-dimmed-zinc flex-1">
              Research assistant that digests arXiv papers using LLMs into biweekly reports. Also features a live Telegram assistant for interactive querying.
            </p>
          </Link>

          {/* Wildfire */}
          <Link href="https://fire.dhruvq.com/" target="_blank" className="glass-panel p-6 rounded-xl flex flex-col gap-3 group transition-all duration-300 hover:border-neon-purple/50">
            <div className="flex justify-between items-start">
              <h4 className="text-neutral-white font-bold group-hover:text-neon-purple transition-colors">Wildfire Forecaster</h4>
              <span className="text-xs text-dimmed-zinc font-mono border border-white/10 px-2 py-0.5 rounded">Live on Home-Cloud ↗</span>
            </div>
            <p className="text-sm text-dimmed-zinc flex-1">
              Predicts 1–8 hr wildfire spread over 3D interactive terrain utilizing satellite & weather data.
            </p>
          </Link>

          {/* LDTMusic */}
          <Link href="https://ldtmusic.com/" target="_blank" className="glass-panel p-6 rounded-xl flex flex-col gap-3 group transition-all duration-300 hover:border-neon-purple/50">
            <div className="flex justify-between items-start">
              <h4 className="text-neutral-white font-bold group-hover:text-neon-purple transition-colors">LDTMusic Marketplace</h4>
              <span className="text-xs text-dimmed-zinc font-mono border border-white/10 px-2 py-0.5 rounded">Live ↗</span>
            </div>
            <p className="text-sm text-dimmed-zinc flex-1">
              A full-stack marketplace platform for independent artists to book and pay professional producers securely. Built with Next.js, Supabase, and Stripe.
            </p>
          </Link>

          {/* Home Cloud */}
          <Link href="https://github.com/Dhruvq/home-cloud" target="_blank" className="glass-panel p-6 rounded-xl flex flex-col gap-3 group transition-all duration-300 hover:border-neon-purple/50 sm:col-span-2 sm:mx-auto sm:w-[calc(50%-8px)] w-full">
            <div className="flex justify-between items-start">
              <h4 className="text-neutral-white font-bold group-hover:text-neon-purple transition-colors">Home Cloud Cluster</h4>
              <span className="text-xs text-dimmed-zinc font-mono border border-white/10 px-2 py-0.5 rounded">GitHub ↗</span>
            </div>
            <p className="text-sm text-dimmed-zinc flex-1">
              Self-hosted 3-node compute cluster built with Proxmox VE, configured with Tailscale and GPU passthrough to run distributed AI training and containerized workloads securely.
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex justify-between items-center py-6 border-t border-white/10 mt-auto">
        <span className="text-sm text-dimmed-zinc">© 2026 Dhruv Thippasandra.</span>
      </footer>
    </main>
  );
}
