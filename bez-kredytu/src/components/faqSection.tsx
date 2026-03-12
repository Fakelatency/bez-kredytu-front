'use client'

import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
    {
        question: "Czym zajmuje się Bez Kredytu?",
        answer:
            "Odpowiedź na pytanie.",
    },
    {
        question: "Jak mogę się z Wami skontaktować?",
        answer:
            "Odpowiedź na pytanie.",
    },
    {
        question: "Czy usługa jest płatna?",
        answer:
            "Odpowiedź na pytanie.",
    },
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="px-6 py-10 max-w-[80%] mx-auto bg-gray-50 mt-[64px] ">
            <div className="text-left">
                <h1 className="text-5xl font-extrabold m-0 text-indigo-900 tracking-tight">
                    Nurtujące pytania
                </h1>
                <span className="text-lg text-red-700 mt-2 block">
                    I odpowiedzi na nie
                </span>
                <hr className="my-6 border-t-2 border-gray-200 w-80" />
            </div>
            <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {faqs.map((faq, idx) => (
                    <button
                        key={idx}
                        type="button"
                        className={`bg-white rounded-xl shadow-md p-7 flex flex-col items-start transition-all duration-300 w-full text-left focus:outline-none
                            ${openIndex === idx ? "ring-2 ring-indigo-400 min-h-[220px]" : "min-h-[60px]"}
                        `}
                        onClick={() => toggleFAQ(idx)}
                        aria-expanded={openIndex === idx}
                        tabIndex={0}
                    >
                        <FaQuestionCircle size={32} className="mb-3 text-indigo-900" />
                        <div className="w-full font-bold text-lg mb-1.5 flex justify-between items-center pointer-events-none">
                            <span className="text-indigo-800">{faq.question}</span>
                            <svg
                                className={`w-5 h-5 text-indigo-600 transform transition-transform duration-300 ${
                                    openIndex === idx ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-300 w-full ${
                                openIndex === idx ? "max-h-40 py-2" : "max-h-0"
                            }`}
                            style={{
                                opacity: openIndex === idx ? 1 : 0,
                            }}
                        >
                            <p className="text-gray-700 text-base">{faq.answer}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
