import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white shadow-md px-6 md:px-32 py-8 mt-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo */}
                <div className="font-bold text-2xl text-[#2c3e50]">
                    BezKredytu
                    <span className="text-red-600">.com</span>
                </div>
                {/* Links */}
                <div className="flex gap-4 text-sm">
                    <a href="/polityka-prywatnosci" className="text-[#2c3e50] hover:underline">
                        Polityka prywatności
                    </a>
                    <a href="/regulamin" className="text-[#2c3e50] hover:underline">
                        Regulamin
                    </a>
                </div>
            </div>
            {/* Company Info */}
            <div className="mt-6 text-sm text-[#2c3e50] opacity-80 text-center md:text-left">
                <div className="mb-2">
                    <strong>BEZKREDYTU.COM SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</strong>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                    <div>
                        <strong>NIP:</strong> 9562409006
                    </div>
                </div>
                <div className="mb-2">
                    <strong>Adres siedziby:</strong> Szosa Chełmińska 26 / 403, 87-100 Toruń, Polska
                </div>
                <div className="mb-2">
                    <strong>Email:</strong> <a href="mailto:kontakt@bezkredytu.com" className="hover:underline">kontakt@bezkredytu.com</a>
                </div>
                <div className="mb-2">
                    <strong>Telefon:</strong> <a href="tel:+48516091065" className="hover:underline">+48 516 091 065</a>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-center text-sm text-[#2c3e50] mt-6 opacity-70">
                &copy; {new Date().getFullYear()} BezKredytu.com. Wszelkie prawa zastrzeżone.
            </div>
            {/* Credits */}
            <div className="text-center text-xs text-[#2c3e50] mt-2 opacity-50">
                Projekt i realizacja: <a href="https://github.com/immunedev" target="_blank" rel="noopener noreferrer" className="hover:underline">SOHA PSA</a>
            </div>
        </footer>
    );
};

export default Footer;