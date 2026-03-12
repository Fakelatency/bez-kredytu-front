import ContactForm from "@/components/contactForm";
import FAQSection from "@/components/faqSection";
<<<<<<< HEAD
=======
// import FlexStatsSection from "@/components/flexComponent";
// import FlexProveComponent from "@/components/flexProveComponent";
>>>>>>> parent of fbd6af1 (update)
import Footer from "@/components/footer";
import MainView from "@/components/mainView";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainView></MainView>
      {/* <FlexStatsSection></FlexStatsSection> */}
      {/* <FlexProveComponent></FlexProveComponent> */}
      <FAQSection></FAQSection>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}
