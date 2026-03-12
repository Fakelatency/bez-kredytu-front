import ContactForm from "@/components/contactForm";
import React from "react";



const ContactPage: React.FC = () => {
    return (
        <main className="bg-gradient-to-br from-indigo-50 to-white pt-[64px]">
            <section className="max-w-[80%] mx-auto px-4 py-12">
                <div className="mb-10 text-center">
                    <h2 className="text-5xl font-extrabold text-indigo-900 mb-4 drop-shadow-sm">
                        Skontaktuj się z nami
                    </h2>
                    <p className="text-lg text-gray-700 max-w-xl mx-auto">
                        Masz pytania dotyczące kredytów, wsparcia prawnego lub innego tematu? Poprzez wypełnienie formularza skontaktujesz się z naszym zespołem, który pokieruje w kwesti dalszych kroków.
                    </p>
                    <strong>Jesteśmy tutaj, aby Ci pomóc!</strong>
                </div>
                <ContactForm />
                
            </section>
        </main>
    );
};

export default ContactPage;