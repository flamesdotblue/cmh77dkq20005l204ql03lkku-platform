import React from 'react';
import { FileText, ListTodo, BarChart3, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, badge }) => (
  <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
    {badge ? (
      <span className="absolute -top-2 right-3 inline-flex items-center rounded-full bg-indigo-600 text-white px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
        {badge}
      </span>
    ) : null}
    <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white grid place-items-center mb-4">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{desc}</p>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Everything you need to move work forward</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Notes with rich text, Kanban tasks, embeddable widgets, and seamless team collaboration — powered by real-time sync and Stripe subscriptions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={FileText}
            title="Rich Notes"
            desc="Capture ideas with a clean, fast editor. Organize by workspace with history and quick search."
          />
          <FeatureCard
            icon={ListTodo}
            title="Taskboard"
            desc="Plan with a simple Kanban: To-Do, In Progress, Done. Drag-and-drop with assignees and due dates."
          />
          <FeatureCard
            icon={BarChart3}
            title="Analytics Widgets"
            desc="Plug in GitHub and Google Analytics to visualize commits, traffic, and more with draggable widgets."
            badge="New"
          />
          <FeatureCard
            icon={Zap}
            title="Realtime + Roles"
            desc="Socket-powered updates and role-based access (Admin, Editor, Viewer) keep teams aligned."
          />
        </div>

        <div id="pricing" className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
            <h3 className="text-xl font-bold">Free</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Perfect to get started</p>
            <div className="mt-4 text-3xl font-extrabold">$0</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>• 1 workspace</li>
              <li>• 3 widgets</li>
              <li>• Notes & Tasks</li>
            </ul>
            <a href="#" className="mt-6 inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">
              Start Free
            </a>
          </div>
          <div className="relative rounded-2xl border-2 border-indigo-500 bg-gradient-to-b from-white to-indigo-50 dark:from-slate-900 dark:to-indigo-950 p-6">
            <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-indigo-600 text-white px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">Most Popular</span>
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">For teams who ship</p>
            <div className="mt-4 text-3xl font-extrabold">$10<span className="text-base font-semibold text-slate-500">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-slate-800 dark:text-slate-200">
              <li>• Unlimited workspaces</li>
              <li>• Unlimited widgets</li>
              <li>• Team roles & realtime</li>
              <li>• Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500">
              Upgrade with Stripe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
