import BlogCard from "@/components/BlogCard";
import ProfilCard from "@/components/ProfilCard";
import TestimonialCard from "@/components/TestimonialCard";
import ButtonChange from "@/components/ButtonChange";
import TextInput from "@/components/TextInput";
import CollectionSection from "@/components/CollectionSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <TestimonialCard />
      <BlogCard />
      <ProfilCard />
      <ButtonChange />
      <TextInput />
      <CollectionSection />
      <NewsletterSection />
      <ContactForm />
    </main>
  );
}
