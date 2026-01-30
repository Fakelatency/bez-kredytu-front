'use client'

import React, { useState } from "react";

const caseTypes = [
    "CHF",
    "EUR",
    "Inna"
];

const ContactForm: React.FC = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [caseType, setCaseType] = useState(caseTypes[0]);
    const [loanAmount, setLoanAmount] = useState("");
    const [contractYear, setContractYear] = useState("");
    const [consent, setConsent] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, phone, caseType, loanAmount, contractYear }),
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            setSubmitted(true);
            // Optionally clear the form
            setFullName("");
            setEmail("");
            setPhone("");
            setCaseType(caseTypes[0]);
            setLoanAmount("");
            setContractYear("");
            setConsent(false);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="px-6 py-10 max-w-[80%] mx-auto bg-gray-50 mt-[64px] rounded-3xl">
            <div className="text-center flex flex-col items-center justify-center mb-8">
                <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight">
                    Wypełnij poniższy formularz,
                </h1>
                <span className="text-lg text-red-700 mt-2 block">
                    a my zaproponujemy termin spotkania.
                </span>
                <hr className="my-6 border-t-2 border-gray-200 w-80" />
            </div>
            <form
                className="flex flex-col gap-6 max-w-[80%] mx-auto"
                onSubmit={handleSubmit}
            >
                <label className="flex flex-col font-semibold text-indigo-800">
                    Imię i nazwisko
                    <input
                        type="text"
                        required
                        className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        placeholder="Twoje imię i nazwisko"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                </label>
                <label className="flex flex-col font-semibold text-indigo-800">
                    Adres e-mail
                    <input
                        type="email"
                        required
                        className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        placeholder="Twój adres e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label className="flex flex-col font-semibold text-indigo-800">
                    Nr tel.
                    <input
                        type="tel"
                        required
                        className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        placeholder="Twój numer telefonu"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        pattern="^[0-9+\s()-]{7,}$"
                    />
                </label>
                <label className="flex flex-col font-semibold text-indigo-800">
                    Rodzaj sprawy
                    <select
                        required
                        className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        value={caseType}
                        onChange={e => setCaseType(e.target.value)}
                    >
                        {caseTypes.map((t, idx) => (
                            <option key={idx} value={t}>{t}</option>
                        ))}
                    </select>
                </label>
                <label className="flex flex-col font-semibold text-indigo-800">
                    Kwota kredytu lub innego zobowiązania (PLN)
                    <input
                        type="number"
                        required
                        className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        placeholder="Kwota w PLN"
                        value={loanAmount}
                        onChange={e => setLoanAmount(e.target.value)}
                        min="0"
                        step="0.01"
                    />
                </label>
                <label className="flex flex-col font-semibold text-indigo-800">
                    Rok zawarcia umowy
                    <input
                        type="number"
                        required
                        className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        placeholder="Rok (np. 2010)"
                        value={contractYear}
                        onChange={e => setContractYear(e.target.value)}
                        min="1900"
                        max={new Date().getFullYear()}
                    />
                </label>
                <label className="flex items-start gap-3 font-semibold text-indigo-800">
                    <input
                        type="checkbox"
                        required
                        className="mt-1 w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        checked={consent}
                        onChange={e => setConsent(e.target.checked)}
                    />
                    <span className="text-sm">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu i udzielenia odpowiedzi na zapytanie
                    </span>
                </label>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-lg transition mt-2 shadow disabled:bg-indigo-400"
                >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
                </button>
                {submitted && (
                    <div className="text-indigo-900 text-center font-semibold mt-2">
                        Dziękujemy za kontakt! Odpowiemy wkrótce.
                    </div>
                )}
                {error && (
                    <div className="text-red-900 font-semibold mt-2">
                        Wystąpił błąd: {error}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;