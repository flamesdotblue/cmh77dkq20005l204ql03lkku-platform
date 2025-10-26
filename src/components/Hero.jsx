import React from 'react';
import { Shield, Users, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-16 md:py-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Realtime • Stripe billing • Team roles
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The unified productivity hub for modern teams
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Multi-Tool Dashboard combines notes, tasks, analytics widgets, and team permissions into one sleek, real-time workspace. Scale from a solo creator to an entire company with built-in subscriptions.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-indigo-500"
            >
              Get Pro — $10/mo
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Explore Features
            </a>
          </div>
          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span>Secure by default</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <Users className="h-4 w-4 text-sky-500" />
              <span>Admin • Editor • Viewer</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <Sparkles className="h-4 w-4 text-fuchsia-500" />
              <span>Realtime sync</span>
            </div>
          </div>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-800/80 bg-white/50 dark:bg-slate-900/40 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-xs font-medium text-slate-500">Notes</div>
              <div className="mt-2 h-28 rounded-lg bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 border border-slate-200 dark:border-slate-800" />
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-xs font-medium text-slate-500">Kanban</div>
              <div className="mt-2 flex gap-2">
                <div className="flex-1 rounded-lg h-28 bg-slate-100 dark:bg-slate-800" />
                <div className="flex-1 rounded-lg h-28 bg-slate-100 dark:bg-slate-800" />
                <div className="flex-1 rounded-lg h-28 bg-slate-100 dark:bg-slate-800" />
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-xs font-medium text-slate-500">Widgets</div>
              <div className="mt-2 h-28 rounded-lg bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-slate-200 dark:border-slate-800" />
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
              <div className="text-xs font-medium text-slate-500">Team</div>
              <div className="mt-2 h-28 rounded-lg bg-gradient-to-br from-amber-500/10 to-rose-500/10 border border-slate-200 dark:border-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
