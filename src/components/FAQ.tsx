import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Toggle FAQ accordion
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [


        {
            question: "How does the DAST scanner work?",
            answer: "Our Nuclei-powered DAST engine scans your running applications for thousands of known vulnerabilities, misconfigurations, and exposure risks in real-time."
        },
        {
            question: "How does Stratum integrate with my CI/CD?",
            answer: "Stratum connects directly to your pipelines (GitHub Actions, GitLab CI, etc.). It runs automatically on every commit or PR, blocking insecure code from reaching production."
        },
        {
            question: "What does the SAST engine analyze?",
            answer: "Our SAST engine scans your Git repositories for insecure code patterns, secrets, and vulnerabilities in your dependencies (SCA)."
        },
        {
            question: "Can Stratum scan my Docker images?",
            answer: "Yes. We scan your container registries and running containers to identify vulnerabilities in OS packages and configuration issues."
        },
        {
            question: "What features are included in the Premium plans?",
            answer: "Premium plans (Team & Business) provide advanced capabilities including SSO, RBAC, API access, priority 24/7 support, and increased scan limits suitable for larger organizations."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-slate-900/30">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Common Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-800 rounded-lg bg-slate-950/50 overflow-hidden hover:border-slate-700 transition-colors"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-medium text-lg text-slate-200 flex-1 text-center">{faq.question}</span>
                                {openFaq === index ? <ChevronUp className="w-5 h-5 text-accent" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                            </button>
                            <div
                                className={`px-6 text-slate-400 text-center transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
