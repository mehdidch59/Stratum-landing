import { SiDocker, SiKubernetes, SiGithub, SiGitlab, SiTerraform } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techStack = [
    {
        name: "Docker",
        icon: SiDocker,
    },
    {
        name: "Kubernetes",
        icon: SiKubernetes,
    },
    {
        name: "AWS",
        icon: FaAws,
    },
    {
        name: "GitHub",
        icon: SiGithub,
    },
    {
        name: "GitLab",
        icon: SiGitlab,
    },
    {
        name: "Terraform",
        icon: SiTerraform,
    },
];

const TechStack = () => {
    return (
        <section className="py-16 overflow-hidden relative z-20">
            <div className="max-w-5xl mx-auto px-6">
                <p className="text-center text-slate-500 text-xs mb-10 font-bold tracking-[0.2em]">
                    SEAMLESS INTEGRATION WITH YOUR STACK
                </p>

                <div className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm px-6 py-10 md:px-10 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-4 items-start justify-center">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex flex-col items-center gap-3 group cursor-pointer transition-all duration-300"
                            >
                                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-slate-950/60 border border-white/10 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all">
                                    <tech.icon className="w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <span className="text-xs md:text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
