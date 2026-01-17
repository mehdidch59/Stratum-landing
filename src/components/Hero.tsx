import React from 'react';
import {
    ArrowRight,

    Shield,
    Zap,
    Activity,
    ChevronDown,
    Server,
    Layers
} from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 pt-20">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium mb-8 animate-fade-in-up">
                    <Layers className="w-3 h-3 mr-2" />
                    v1.0 Now Public Beta
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-blue-400 to-white mb-8 leading-tight max-w-4xl">
                    Secure your Infrastructure <br />
                    at the Speed of Code
                </h1>

                <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
                    The all-in-one DevSecOps platform. Unified DAST, SAST, and Container Scanning to eliminate tool fatigue and secure your pipeline.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-24">
                    <a
                        href="https://console.stratum-app.com"
                        className="px-8 py-4 rounded-lg bg-slate-900 border border-white/10 text-slate-400 font-bold text-lg hover:text-white hover:border-white transition-all shadow-none hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center group"
                    >
                        Start Exploring
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                </div>
            </div>

            {/* Dashboard Preview */}
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="relative rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-linear-to-tr from-accent/5 to-purple-500/5 pointer-events-none"></div>

                    {/* Top Bar Mockup */}
                    <div className="h-12 border-b border-slate-800 flex items-center px-4 space-x-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="flex-1 text-center text-xs text-slate-500 font-mono">dashboard.stratum.security</div>
                    </div>

                    {/* Dashboard Content Mockup */}
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Stat Card 1 */}
                        <div className="bg-slate-950/50 rounded-lg p-5 border border-slate-800/50">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-slate-400 text-sm font-medium">Avg Risk Score</h3>
                                    <div className="text-3xl font-bold text-white mt-1">85<span className="text-slate-500 text-lg font-normal">/100</span></div>
                                </div>
                                <div className="p-2 bg-green-500/10 rounded-md">
                                    <Shield className="w-5 h-5 text-green-500" />
                                </div>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="bg-slate-950/50 rounded-lg p-5 border border-slate-800/50">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-slate-400 text-sm font-medium">Critical Vulns</h3>
                                    <div className="text-3xl font-bold text-white mt-1">0</div>
                                </div>
                                <div className="p-2 bg-accent/10 rounded-md">
                                    <Zap className="w-5 h-5 text-accent" />
                                </div>
                            </div>
                            <div className="text-xs text-slate-500 mt-2 flex items-center">
                                <span className="text-green-400 mr-1 flex items-center"><ChevronDown className="w-3 h-3 mr-0.5" /> 2</span> from last week
                            </div>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="bg-slate-950/50 rounded-lg p-5 border border-slate-800/50">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-slate-400 text-sm font-medium">7-Day Velocity</h3>
                                    <div className="text-3xl font-bold text-white mt-1">+12</div>
                                </div>
                                <div className="p-2 bg-blue-500/10 rounded-md">
                                    <Activity className="w-5 h-5 text-blue-500" />
                                </div>
                            </div>
                            <div className="text-xs text-slate-500 mt-2">Active scans performing well</div>
                        </div>
                    </div>

                    {/* Recent Activity Table Mockup */}
                    <div className="px-6 pb-6">
                        <h3 className="text-slate-300 font-semibold mb-4 text-sm uppercase tracking-wider">Recent Activity</h3>
                        <div className="bg-slate-950/50 rounded-lg border border-slate-800/50 overflow-hidden">
                            <div className="grid grid-cols-4 gap-4 p-4 border-b border-slate-800/50 text-xs font-medium text-slate-500 uppercase">
                                <div>Target</div>
                                <div>Type</div>
                                <div>Status</div>
                                <div>Risk</div>
                            </div>
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="grid grid-cols-4 gap-4 p-4 border-b border-slate-800/50 last:border-0 hover:bg-slate-800/20 transition-colors cursor-default text-sm">
                                    <div className="flex items-center text-slate-200">
                                        <Server className="w-4 h-4 mr-2 text-slate-500" />
                                        nginx:latest
                                    </div>
                                    <div className="text-slate-400">Container Scan</div>
                                    <div>
                                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">COMPLETED</span>
                                    </div>
                                    <div className="text-accent font-mono">85</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
