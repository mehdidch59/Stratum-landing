import React, { useState, useEffect } from 'react';
import { Github, Terminal, Code } from 'lucide-react';

export const HowItWorks = () => {
    const [activeStep, setActiveStep] = useState(0);

    // Auto-cycle workflow steps for demo effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 3);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[100px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Security Lifecycle <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-400 to-white">Automated</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">From code commit to deployment, Stratum guards every step.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Step 1: Connect */}
                    <div className={`relative p-8 rounded-2xl border transition-all duration-500 ${activeStep === 0 ? 'bg-slate-900 border-accent/50 shadow-lg shadow-accent/5' : 'bg-slate-900/30 border-slate-800 opacity-60'}`}>
                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 text-blue-500">
                            <Github className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">1. Connect</h3>
                        <p className="text-slate-400 mb-6">Link your GitHub repositories or define target URLs. Stratum automatically detects tech stacks and attack surfaces.</p>

                        <div className="bg-slate-950 rounded p-4 font-mono text-xs text-slate-500 border border-slate-800">
                            <div className="flex gap-2 mb-2">
                                <span className="text-accent">$</span> stratum connect
                            </div>
                            <div className="text-green-500">✓ Repository detected</div>
                            <div className="text-green-500">✓ Dockerfile found</div>
                        </div>
                    </div>

                    {/* Step 2: Scan */}
                    <div className={`relative p-8 rounded-2xl border transition-all duration-500 ${activeStep === 1 ? 'bg-slate-900 border-accent/50 shadow-lg shadow-accent/5' : 'bg-slate-900/30 border-slate-800 opacity-60'}`}>
                        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6 text-accent">
                            <Terminal className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">2. Scan</h3>
                        <p className="text-slate-400 mb-6">Nuclei-powered engine checks 5000+ vulnerabilities. Fast, low-noise, and customized for your architecture.</p>

                        <div className="bg-slate-950 rounded p-4 font-mono text-xs text-slate-500 border border-slate-800">
                            <div className="flex gap-2">
                                <span className="text-accent animate-pulse">●</span> Scanning api.production.com...
                            </div>
                            <div className="mt-2 text-yellow-500">[WARN] Open Port 8080</div>
                            <div className="text-red-500">[CRIT] SQL Injection found</div>
                        </div>
                    </div>

                    {/* Step 3: Remediate */}
                    <div className={`relative p-8 rounded-2xl border transition-all duration-500 ${activeStep === 2 ? 'bg-slate-900 border-accent/50 shadow-lg shadow-accent/5' : 'bg-slate-900/30 border-slate-800 opacity-60'}`}>
                        <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 text-purple-500">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">3. Remediate</h3>
                        <p className="text-slate-400 mb-6">Get actual code fixes, not just alerts. Auto-generate PRs and export reports for compliance.</p>

                        <div className="bg-slate-950 rounded p-4 font-mono text-xs text-slate-500 border border-slate-800 line-through opacity-50">
                            old_config = "unsafe"
                        </div>
                        <div className="bg-slate-950 rounded p-4 font-mono text-xs text-green-400 border border-slate-800 -mt-2">
                            new_config = "secure"
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
