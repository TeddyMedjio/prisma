import BlogCard from "@/components/BlogCard";
import Earnings from "@/components/Earnings";
import ProfilCard from "@/components/ProfilCard";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <main>
      <TestimonialCard />
      <BlogCard />
      <ProfilCard />
      <Earnings />
    </main>
  );
}
