import LeftSideSection from "./LeftSideSection";
import RightSideSection from "./RightSideSection";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:min-h-screen max-w-7xl mx-auto pt-20 px-10">
      <LeftSideSection />
      <RightSideSection />
    </div>
  );
};

export default HomePage;
