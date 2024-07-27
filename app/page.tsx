import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Proccess from "@/components/Proccess";
import RecentProjects from "@/components/RecentProjects";
import { Navbar } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Proccess />
        <Footer />
      </div>
    </main>
  );
}
