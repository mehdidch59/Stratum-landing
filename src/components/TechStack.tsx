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
        <section className="py-10 border-y border-white/5 bg-slate-950/50 overflow-hidden relative z-20">
            <p className="text-center text-slate-500 text-xs mb-8 font-bold tracking-[0.2em]">
                SEAMLESS INTEGRATION WITH YOUR STACK
            </p>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center opacity-70">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center gap-2 group cursor-pointer hover:opacity-100 transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all">
                                <tech.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <span className="text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
