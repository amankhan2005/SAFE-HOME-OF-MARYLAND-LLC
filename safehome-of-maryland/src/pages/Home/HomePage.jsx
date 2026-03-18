import HomeHero from "../../components/home/HomeHero";
import HomeAboutPreview from "../../components/home/HomeAboutPreview";
import HomeServices from "../../components/home/HomeServices";
import HomeMissionVision from "../../components/home/HomeMissionVision";
import HomeFAQ from "../../components/home/HomeFAQ";

const HomePage = () => {
  return (
    <div>

      {/* HERO */}
      <HomeHero />

      {/* ABOUT PREVIEW */}
      <HomeAboutPreview />

      {/* SERVICES */}
      <HomeServices />

      {/* MISSION & VISION */}
      <HomeMissionVision />

      {/* FAQ */}
      <HomeFAQ />

    </div>
  );
};

export default HomePage;