import AboutMe from "./AboutMe";
import ReleventJobHistory from "./ReleventJobHistory";
import Outro from "./Outro";
import SkillsSection from "./SkillGroup";

const RightSideSection = () => {
  return (
    <div className="md:w-1/2 flex flex-col justify-start items-start overflow-auto md:overflow-hidden max-h-[calc(100vh-12rem)] md:max-h-full ">
      <AboutMe />
      <ReleventJobHistory />
      <SkillsSection />
      <Outro />
    </div>
  );
};

export default RightSideSection;
