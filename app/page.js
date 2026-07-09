import Image from "next/image";
import styles from "./page.module.css";
import HomeHero from "@/components/HomeComponents/HomeHero";
import HomeAbout from "@/components/HomeComponents/HomeAbout";
import HorizontalScrollSection from "@/components/HomeComponents/HomeSkills";
import HomeExperience from "@/components/HomeComponents/HomeExperience";
import HomeWorks from "@/components/HomeComponents/HomeWorks";
import HomeVideos from "@/components/HomeComponents/HomeVideos";
import HomeEducation from "@/components/HomeComponents/HomeEducation";
import HomeMoreProjects from "@/components/HomeComponents/HomeMoreProjects";
import HomeContact from "@/components/HomeComponents/HomeContact";

export default function Home() {

  return (
    <main className="">
      <section id="home">
        <HomeHero />
      </section>

      <section id="works">
        <HomeWorks />
      </section>

      <section id="videos">
        <HomeVideos />
      </section>

      <section id="experience">
        <HomeExperience />
      </section>

      <section id="about">
        <HomeAbout />
      </section>

      <section id="skills">
        <HorizontalScrollSection />
      </section>

      <HomeEducation />
      <HomeMoreProjects />

      <section id="contact">
        <HomeContact />
      </section>
    </main>
  );
}
