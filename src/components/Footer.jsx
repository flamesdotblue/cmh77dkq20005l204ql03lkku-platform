import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-semibold">Multi-Tool Dashboard</h4>
          <p className="text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            The all-in-one productivity SaaS for notes, tasks, analytics, and team collaboration — built on a modern stack.
          </p>
        </div>
        <div>
          <h5 className="font-semibold">Product</h5>
          <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
            <li><a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Company</h5>
          <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-300">
            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Multi-Tool Dashboard. All rights reserved.
      </div>
    </footer>
  );
}
