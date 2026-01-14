import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Is it open source?",
        answer: "Stratum Core is built on open-source technologies like Nuclei, but the dashboard and orchestration platform are proprietary. We do contribute back to the community regularly."
    },
    {
        question: "Can I host it myself?",
        answer: "Yes, the Team plan includes self-hosted options for keeping all data within your VPC."
    },
    {
        question: "How does the DAST scanner work?",
        answer: "Our DAST scanner performs active probing of your running application to identify runtime vulnerabilities like SQL Injection, XSS, and misconfigurations."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-white/10 bg-slate-900/30 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-white/5 transition-colors cursor-pointer"
                        >
                            <span className="font-medium text-slate-200">{faq.question}</span>
                            <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-4 text-slate-400 border-t border-white/5 pt-4">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};
