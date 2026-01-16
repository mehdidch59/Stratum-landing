import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6"
                >
                    Secure your Infrastructure <br />
                    <span className="bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        at the Speed of Code.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                >
                    The All-in-One DevSecOps Platform. DAST, SAST, and Container Scanning in one unified dashboard. Stop juggling 10 different tools.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex justify-center gap-4 mb-20"
                >
                    <a href="/pricing" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-heading tracking-wide rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center group cursor-pointer">
                        Start Scanning for Free
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </a>
                </motion.div>

                {/* Dashboard Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ perspective: "1000px" }}
                    className="relative mx-auto max-w-6xl"
                >
                    <div className="bg-[#020617] border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-sm transform transition-transform hover:scale-[1.01] duration-500 relative z-10 text-left font-mono">
                        {/* Dashboard Header */}
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Home / Dashboard / Overview</div>
                                <h2 className="text-2xl font-bold text-white mb-1">Dashboard</h2>
                                <p className="text-xs text-slate-500">Target Infrastructure Security Overview</p>
                            </div>
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.3)] flex items-center gap-2 transition-all cursor-pointer">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                New Scan
                            </button>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                            {/* Card 1 */}
                            <div className="bg-[#0B1221] border border-white/5 rounded-lg p-5 relative overflow-hidden group">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Total Scans</span>
                                    <div className="p-1.5 bg-blue-500/10 rounded text-blue-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-blue-400">1</div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#0B1221] border border-white/5 rounded-lg p-5 relative overflow-hidden group">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Avg Risk Score</span>
                                    <div className="p-1.5 bg-green-500/10 rounded text-green-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <div className="text-3xl font-bold text-green-400">85</div>
                                    <span className="text-[10px] text-slate-600">/100</span>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#0B1221] border border-white/5 rounded-lg p-5 relative overflow-hidden group">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Critical Vulns</span>
                                    <div className="p-1.5 bg-red-500/10 rounded text-red-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-red-500">0</div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-[#0B1221] border border-white/5 rounded-lg p-5 relative overflow-hidden group">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">7-Day Velocity</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <div className="text-3xl font-bold text-white">1</div>
                                    <span className="text-[10px] text-green-400">+1 trend</span>
                                </div>
                                <div className="mt-2 h-10 w-full flex items-end gap-1">
                                    <div className="w-full bg-slate-800/50 h-[20%] rounded-sm"></div>
                                    <div className="w-full bg-slate-800/50 h-[40%] rounded-sm"></div>
                                    <div className="w-full bg-slate-800/50 h-[30%] rounded-sm"></div>
                                    <div className="w-full bg-slate-800/50 h-[20%] rounded-sm"></div>
                                    <div className="w-full bg-blue-500/50 h-[60%] rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-[#0B1221] border border-white/5 rounded-lg overflow-hidden">
                            <div className="px-6 py-4 border-b border-white/5">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Recent Activity</h3>
                                <p className="text-[10px] text-slate-600">Monitoring active workloads and artifact security posture</p>
                            </div>

                            {/* Table Header */}
                            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                                <div className="col-span-4">Artifact ID</div>
                                <div className="col-span-2">Status</div>
                                <div className="col-span-2">Risk Score</div>
                                <div className="col-span-2">Findings</div>
                                <div className="col-span-2">Date</div>
                            </div>

                            {/* Row 1 */}
                            <div className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-white/5 transition-colors items-center border-b border-white/5 group bg-slate-900/20">
                                <div className="col-span-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 border border-white/5">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">nginx:latest</div>
                                        <div className="text-[10px] text-slate-600">ID: 98849c25</div>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        COMPLETED
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center gap-2">
                                    <span className="text-sm font-bold text-red-500">85</span>
                                    <div className="h-1.5 w-16 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[85%] bg-red-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="col-span-2 flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                </div>
                                <div className="col-span-2 text-xs text-slate-500">
                                    2026-01-05 21:07
                                </div>
                            </div>
                        </div>

                        {/* Glow behind dashboard */}
                        <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-10 -z-10"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
